   
   import MovieFav from "./MovieFav"

   export default function MainOwnerStyle(){
   
   const OwnerStyle = {
     position: "relative",
     height: "1000px",
     width: "650px",
     border: "3px solid rgb(29, 28, 27)",
     borderRadius: "20px",
     marginBottom: "120px",
    }

    const imageStyle = {
     position: "absolute",
     objectFit: "cover",
     width: "40%",
     height: "30%",
     borderRadius: "50%",
     border: "5px solid rgb(51, 43, 18)",
     left: "200px",
     top: "30px"
    }

    const title = {
     position: "absolute",
     fontFamily: "Monaco",
     fontSize: "22px",
     top: "340px",
     left: "230px"
    }

    const text = {
        position: "absolute",
        fontFamily: "verdana",
        fontSize: "18px",
        textAlign: "justify",
        top: "360px",
        padding: "15px"
    }

    const secondTitle = {
        position: "absolute",
        fontFamily: "Monaco",
        fontSize: "20px",
        top: "480px",
        left: "225px"
    }


    return (
           <div style={OwnerStyle}>
             <img src='./public/imagenes/unnamed.jpg' alt="Imagen" style={imageStyle}/> 
            <h2 style={title}>Francisco Gutiérrez</h2>
             <p style={text}>Soy estudiante de Desarrollo Web, tengo formación en Ingeniería Biomédica lo que me permite combinar mi pasión por el área de la salud y la tecnología, me gusta colobarorar en equipos multidiscipinarios enfocado a crear soluciones y resultados.</p>
           <ul>
                <li> <a href="https://www.linkedin.com/in/franciscogtz07/">LinkedIn</a></li>
                <li><a href="https://github.com/FranciscoGtz1996">GitHub</a></li>
           </ul>
            <h3 style={secondTitle}>Mis peliculas Favoritas</h3>
           
              <MovieFav />
           
           </div>
        
    )
}

///home/paco/pizza-menu/public/imagenes/unnamed.jpg