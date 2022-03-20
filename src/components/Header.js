import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Link} from 'react-router-dom';
import { Typography, Button, TextField, Container } from '@mui/material';
import Modal from '@mui/material/Modal';

function LoginModel(){
    const [isOpen, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginHandler(){

        // fetch /api/login with credential
        // const response = fetch('/api/login', {
        //     method: "post",
        //     body: {
        //         email: email,
        //         password: password
        //     }
        // })

        // parse response JSON

        // save JWT Token to local storage
        window.localStorage.setItem('userid', '012345')
        window.localStorage.setItem('user_token', 'abcdefg')

        setOpen(false)
    }

    let MainButton;
    // check if logged in
    if (window.localStorage.getItem('user_token')){
        MainButton = (
            <Button 
                color="secondary" 
                variant='contained'
                onClick={()=>{
                    window.localStorage.removeItem('userid')
                    window.localStorage.removeItem('user_token')
                }}
            >Logout</Button>
        )
    }else{
        MainButton = (
            <Button 
                color="secondary" 
                variant='contained'
                onClick={()=>setOpen(true)}
            >Login</Button>
        )
    }

    return (
        <>
            <Modal open={isOpen}
                onClose={()=>setOpen(false)}
            >
                <div fluid style={{
                    backgroundColor: "white",
                    width: "400px",
                    margin: "20vh auto",
                    padding: "20px"
                }}>
            
                    <Typography variant='h5'>Log In</Typography>
                    <TextField 
                        label="Email" 
                        value={email}
                        onChange={(event)=>setEmail(event.target.value)}
                        /><br/>
                    <TextField 
                        label="Password" 
                        value={password}
                        type="password"
                        onChange={(event)=>{setPassword(event.target.value)}}/><br/>
                    <Button variant='contained' onClick={loginHandler}>Login</Button>
                    <Button variant='contained' color='error'
                        onClick={()=>setOpen(false)}
                    >Close</Button>
                </div>
            </Modal>
            {MainButton}
        </>
    )
}

function NewPost(){
    return (window.localStorage.getItem('user_token'))?(
        <Link to="/newpost">
            <Button variant='contained'>
                New Post
            </Button>
        </Link>
        )
    :<></>
}

function Header(){
    const [userInfo, setUserInfo] =  useState({
        id: undefined,
        token: undefined
    })

    return (
        <AppBar position="static">
            <Toolbar sx={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <Typography variant='h5' component={'div'}>
                    <Link to="/">Dog Cat Matcher</Link>
                </Typography>
                <div>
                    <NewPost/>
                    <LoginModel/>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;