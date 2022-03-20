import Container from '@mui/material/Container';
import Header from "../components/Header";
import {useState} from 'react';
import {useParams
} from "react-router-dom";
import { useEffect } from 'react';

function AnimalPage(){
    const {name} = useParams();
    const [animalInfo, setAnimalInfo] = useState({
        name: '',
        description: ''
    })

    // useEffect(async ()=>{
    //     const res = await fetch('/animal', {
    //         method: "get",
    //         data: {
    //             name: name
    //         }
    //     })

    //     setAnimalInfo({
    //         name: res.name,
    //         description: res.description
    //     })
    // })

    if (window.localStorage.getItem("user_token")){
        return(
            <Container fluid> 
                <Header/>
    
                <h1>{name} Information</h1>

                Name: {animalInfo.name}<br/>
                description: {animalInfo.description}
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

export default AnimalPage;