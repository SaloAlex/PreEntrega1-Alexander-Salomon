import { useState } from "react";
import  Button  from "react-bootstrap/Button";

export const Counter = () => {
    const[count,setCount] = useState (0)
    return (
        <>
        <Button onClick={()=>setCount(count+1)} variant="info">+</Button>{' '}
        <Button onClick={()=>setCount(count-1)} variant="info">-</Button>{' '}
        <p>Cantidad de libros: {count}</p>
        </>
    )
}