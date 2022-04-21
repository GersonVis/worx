import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import { render } from '@testing-library/react';


const Form = ({showed}) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    
    
    //hooks
    const itemFocus=useRef()
    useEffect(()=>{
      if(showed){
          itemFocus.current.focus()
      }
    }, [showed])
    // end hooks
    
    const sendForm = (evt) => {
        evt.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch(e=>{
                console.log("Somethig went wrong")
            })

    }
    return <form onSubmit={(evt) => sendForm(evt)}>
        <label htmlFor="title">Title: </label>
        <input id="title" value={title} type="text" onChange={(evt) => setTitle(evt.target.value)} ref={itemFocus}></input>
        <label htmlFor="body">body:</label>
        <textarea id="body" value={body} type="textarea" onChange={(evt) => setBody(evt.target.value)}></textarea>
        <input type="submit" value="enviar"></input>
    </form>
}
const ShowHidden=()=>{
    const [show, setShow]=useState(false)
    return <div>
        <button onClick={()=>setShow(show==false)}>Show form</button>
        {show && <Form showed={show}></Form>}
    </div>
}

const App = () => {
    return <div>
        <ShowHidden></ShowHidden>
        </div>

}

render(<App></App>, document.getElementById("root"))
