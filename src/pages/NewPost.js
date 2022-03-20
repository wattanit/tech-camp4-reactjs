import Container from '@mui/material/Container';
import Header from "../components/Header";

function NewPostPage(){
    if (window.localStorage.getItem("user_token")){
        return(
            <Container fluid> 
                <Header/>
    
                <h1>New Post</h1>
            </Container>
        )
    }else{
        return(
            <Container fluid> 
                <Header/>
    
                <h1>
                    Oh no! You are not allowed here!
                </h1>
            </Container>
        )
    }

    
}

export default NewPostPage;