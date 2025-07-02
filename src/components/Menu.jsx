import Pizza from "./Pizza";
//Importando hook: usestate de react y use effect
import { useState, useEffect } from "react";

//Creamos funcion
export default function Menu(){
    //Hook: use state, retorna un array con dos elementos, el valor actual y una funcion para actualizarlo
   const [pizzas,setPizzas] = useState([
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: `$6 dlls`,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: `$10 dlls`,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: `$12 dlls`,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: `$12 dlls`,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: `$15 dlls`,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: `$18 dlls`,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
]) //Din estado

//Estado del hook useeffect obteniendo datos del localStorage si existen, es lanzado cuando se construye el componente (cuando se carga la página por primera vez)
useEffect(() => {
 const data = localStorage.getItem("pizzas");
 //Si la data tiene algo, que no sea falsy
 if(data) setPizzas(JSON.parse(data));
}, [])

//Fijar los datos en la localstorage o actualizarlos en caso que no exista
useEffect(() => localStorage.setItem("pizzas", JSON.stringify(pizzas)), [pizzas]);


//Estado del hook usestate boton para eliminar la pizza y actualizar el estado
const deletePizza = (pizzaName) => setPizzas(prev => prev.filter(pizza => pizza.name !== pizzaName));

console.log(pizzas);

    return(
        <main className="menu">
        <h2>Our menu</h2>
        { pizzas.length > 0 ?
        //Esta etiqueta <></> se conoce como fragment y no se renderiza en la aplicación, solo sirve como contenedor padre, pero sin ser renderizada en el html
        (<>
        <p>
            Authentic Italian cousine. 6 creatives dishes to choose from. All from our stone oven, all organic all delicious.
        </p>
        <ul className="pizzas">
            {pizzas.map((pizza) => /*return*/ {
                //console.log(pizza);
                return(
                    <Pizza pizzaObject={pizza} key={pizza.name} onDelete={deletePizza}/>
                )
         })}
        </ul>
        </>):(
            <p>We're still working on our menu, Please come back later.</p>
        )

        }
        </main>
    );
}