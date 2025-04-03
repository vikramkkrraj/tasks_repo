import {useEffect, useState } from 'react';

export const Counter = () => {
    const [counter , setCounter] = useState(0);

   useEffect(() => {
     console.log(counter);
     
   }, [counter])
   
    return (
        <>
        <h1> Counter : {counter}</h1>
        <button style={{marginRight : "10px"}} onClick = {() =>setCounter(counter+1)} >Add +1 </button>
        <button style={{marginRight : "10px"}}  onClick = {() => setCounter(counter-1)}>Remove -1 </button >
        <button onClick = {() => setCounter(0)}>reset 0</button >

        </>
    )
}
