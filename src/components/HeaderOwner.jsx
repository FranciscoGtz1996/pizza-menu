//Modificar estilos usamos inline styles con un objeto o styled components es más avanzado

export default function HeaderOwner(){
    //Creamos un objeto style para el componente
    const headerOwnerStyle = {
    color: "#e9bb24",
    textAlign: "center",
    fontSize: "4.2rem",
    fontWeight: 250,
    letterSpacing: "1.5px",
    width: "100%",
    display: "block",
    }
    return (
        <header>
            <h1 style={headerOwnerStyle}>- About the Owner -</h1>
        </header>
    )
}