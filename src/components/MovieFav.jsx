import React, { useState } from 'react';

const ContenedorImagenes = {
    position: "relative",
    left: "35px",
    top: "500px",
    display: "grid",
    gridTemplateColumns:" repeat(3, 1fr)",
    gap: "10px"
    //gridAutoRows: "max-content",
    //display: "flex",
    //flexFlow: "RowWrap",
    //flexDirection: "column",
    //justifyContent: "spaceEvenly"
}

const text = {
    fontFamily: "verdana",
    fontSize: "18px",
    textAlign: "justify"
}

const imagenes = {
    objectFit: "fill",
    width: "70%",
    height: "70%",
}

const ContenedorForm = {
    position: "relative",
}


export default function MovieFav(){

    //Usamos el estado del boton, lo iniciamos en uno
  const [likes, setLikes] = useState(1);
    //Incrementamos en uno cada vez que se presiona el botón
  function increment() {
   setLikes(likes + 1);
  }


 // const version = [version, setVersion] = useState(0);
    const [form, setForm] = useState([
        {
    moovie: 'Harry Potter'
        },
        {
    moovie: 'Shrek'
        },
        {
    moovie: 'Spider-Man'
        }
  ])


    return(
       <div style={ContenedorImagenes}>
        <div>
        <p style={text}>Harry Potter</p>
        <img src='./public/imagenes/Harry.jpg' alt="Harry Potter" style={imagenes}/> 
        </div>
        <div>
        <p style={text}>Shrek</p>
        <img src='./public/imagenes/Shrek.jpg' alt="Shrek" style={imagenes}/> 
        </div>
        <div>
        <p style={text}>Spider-Man</p> 
        <img src='./public/imagenes/spider.jpg' alt="Spider-Man" style={imagenes}/>
        </div>
        <div style={ContenedorForm}>
        <button onClick={increment}>Me gusta</button>
        <br />
        <p style={text}>Te gusta(n) {likes} pelicula</p>
        
        </div>
       </div>
    )
}

