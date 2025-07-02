//Modificar estilos usamos inline styles con un objeto o styled components es más avanzado
import miImagen from '/home/paco/pizza-menu/public/imagenes/unnamed.jpg'; // Importa la imagen

export default function Card(){
    //Creamos un objeto style para el componente
    const cardStyle = {
    color: "#edc84b",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "4.2rem",
    fontWeight: 250,
    letterSpacing: "3px",
    position: "relative",
    width: "100%",
   // display: "block",
    };

    const imgenStyle = {
        //position: "flex",
        margin: "10px",
        padding: "10px",
        width: "50px",
        height: "50px",
        objectFit: "cover",
    };

    const mainStyle = {
        borderRadius: "50px",
        border: "30 px solid red",
        padding: "80px",

    }

    return (
           <div style={mainStyle}>
            <p>Holas</p>

           </div>
        
    )
}