import * as React from 'react'
import styled from 'styled-components';
import { ApplicationState, ConnectedReduxProps } from '../store'
import { putRequest } from '../store/profile/actions'
import { connect } from 'react-redux';
import { Profile } from '../store/profile/types'

type State = { userId: number, file: any, imagePreviewUrl: any, saveMode: boolean }

interface PropsFromState {
    loading: boolean
    data: Profile[]
    errors?: string
}

interface PropsFromDispatch {
    putRequest: typeof putRequest
} 

type AllProps = PropsFromState & PropsFromDispatch 
& ConnectedReduxProps & {email: string, password: string, img : string}

class ProfileComponent extends React.Component<AllProps, State> {

    constructor(props: any){
        super(props);
        this.state = {
            userId: localStorage.id,
            file: localStorage.img,
            imagePreviewUrl: localStorage.img,
            saveMode: false
        }
    }
    handleImageChange = (e: any) => {
        e.preventDefault()

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () =>{
            this.setState({
                file: file,
                imagePreviewUrl: reader.result,
                saveMode: true
            });
        }

        reader.readAsDataURL(file);
    }
    disableSaveMode = () =>{
        this.setState({
            file: localStorage.img,
            imagePreviewUrl: localStorage.img,
            saveMode: false
        });
    }

    saveImage = async (e: any) => {
        // console.log(this.state)
        e.preventDefault();
        const putUser: any = { id: this.state.userId, img: this.state.imagePreviewUrl};
        let response = await this.props.putRequest(putUser);
        localStorage.img = response.payload.img;
        this.setState({
            saveMode: false
        })
    }
    render() {

        let { imagePreviewUrl } = this.state;

        return (
            <ProfileContent>
                <h2>Profile Page</h2>
                <ProfileImage><img src={imagePreviewUrl} alt="profileImage" /></ProfileImage>
                <div><input type="file" onChange={this.handleImageChange}/></div>
                <div>Email: {localStorage.email}</div>
                <div>Telephone: {localStorage.telephone}</div>
                <div>Age: {localStorage.age}</div>

                {this.state.saveMode &&
                    <div>
                    <button type="submit" onClick={this.saveImage}>
                            Save
                        </button>
                        <button type="submit" onClick={this.disableSaveMode}>
                            Cancel
                        </button>
                    </div>    
                }
                {!this.state.saveMode &&
                    <button disabled type="submit">
                        Please make changes!
                    </button>
                }
                
            </ProfileContent>
        )
    }
}

const mapStateToProps = ({ profile }: ApplicationState) => ({
    loading: profile.loading,
    errors: profile.errors,
    data: profile.data
})

const mapDispatchToProps = {
    putRequest
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileComponent)

const ProfileImage = styled('div')`
    img{
        width: 200px;
        height: 200px;
    }
    
`

const ProfileContent = styled('article')`
    max-width: 1000px;
    margin: 0 auto;
    line-height: 1.6;

    a {
        color: blue;
    }

    h1,
    h2,
    h3,
    h4 {
        margin-bottom: 0.5rem;
        font-family: Arial;
        line-height: 1.25;
    }
`
