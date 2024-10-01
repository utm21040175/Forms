import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"

export const Counter = () =>{

    const [count, setCount] = useState(0)
    const [list, setList] = useState([1])

    const addListElement =() =>{
        const nList = list;
        nList.push(nList.length +1)
        setList([...nList])
    }

    const restListElement =() =>{
        const nList = list;
        nList.pop()
        setList([...nList])
    }

    return(
        <Container>
            <h3>{count}</h3>
            <Button onClick={()=>setCount(count+1)}>ADD</Button>
            <Button onClick={()=>setCount(count-1)}>LESS</Button>
            <hr></hr>

            <h3>LISTA DINAMICA</h3>

            {
                list.map((value, i)=>(
                    <>
                        <p>Cifra{i+1}</p>
                        <Form.Control className="mb-3" placeholder={ i + (i-1)}/>

                    </>
                ))
            }
            
            <Button onClick={()=>addListElement()}>ADD</Button>
            <Button onClick={()=>restListElement()}>LESS</Button>

        </Container>
    )
}