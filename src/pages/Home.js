import react, {Component, useState, useEffect} from 'react';
import Container from '@mui/material/Container';

import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimalCard from '../components/AnimalCard';

function HomePage(){

    // fetch animal list from server
    const animalList = [
        {
            name: "Shabu",
            description: "Looks like the most famous corgi around"
        },
        {
            name: "Meow",
            description: "A white, chubby cat"
        },
        {
            name: "Corgi2",
            description: "Another stray corgi"
        },
        {
            name: "Corgi3",
            description: "Another stray corgi"
        },
        {
            name: "Corgi4",
            description: "Another stray corgi"
        },
    ]

    // const [animalList, setAnimalList] = useState([]);

    // useEffect(()=>{
    //     // fetch data from server
    //     fetch('/listAnimal').then(
    //         (list)=>{
    //             setAnimalList(list)
    //         }
    //     )
    // }, [])

    let animalCards;
    
    if (window.localStorage.getItem('user_token')){
        animalCards = animalList.map(animal=>{
            return (<AnimalCard 
                    name={animal.name} 
                    description={animal.description}
                    />)
        })
    }

    return (
        <Container fluid> 
            <Header/>
            <h1>Homepage</h1>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                {animalCards}   
            </div>
            
            <Footer/>
        </Container>
    );
}

export default HomePage;
