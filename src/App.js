import {Form, Card, CardBody, CardTitle, Container, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import FormComponent from './components/Forms';

function App() {
  //const [name, setName] = useState() //entidad, devuelve una variable que podemos manipular y una funcion que asigna el valor a la variable
  //const [apellido, setApellido] = useSate()
  //const onChange =(e)=>{
    //e.preventDefault(); //no ejecuta el evento por defautl
    //console.log(e)
    //console.log(e.target.name)
    //console.log(e.target.value)
    //if(e.target.name == "name"){
    //  setName(e.traget.value) //asignar el valor a la variable 
    //}else if(e.target.name == "apellido"){
     // setApellido(e.target.value)
    //}
  //}
  const[data, setData] = useState({})

  const onChange = (e) =>{
    e.preventDefault();
    const obj = data;
    obj[e.target.name] = e.target.value;
    setData(obj)
  }
   const onClick = () => {
    console.log(data)
   }


  return (
   <Container>
          <FormComponent onChange={onChange} onClick={onClick}/> 
   </Container>
  );
}

export default App;
