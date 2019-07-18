import * as React from 'react'
import styled from 'styled-components';

type Props = { }
type State = { file: any, imagePreviewUrl: any, saveMode: boolean }
export default class Profile extends React.Component<Props, State> {

    constructor(props: any){
        super(props);
        this.state = {
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
    render() {

        let { imagePreviewUrl } = this.state;

        return (
            <ProfileContent>
                <h2>Profile Page</h2>
                <Image><img src={imagePreviewUrl} alt="profile image"/></Image>
                <div><input type="file" onChange={this.handleImageChange}/></div>
                <div>Email: {localStorage.email}</div>
                <div>Telephone: {localStorage.telephone}</div>
                <div>Age: {localStorage.age}</div>

                {this.state.saveMode &&
                    <div>
                        <button type="submit">
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

const Image = styled('div')`
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
