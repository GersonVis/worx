import React from 'react';
import './index.css';
import { render } from '@testing-library/react';

const listNames=[
  "gerson",
  "juan",
  "Carlos"
]
const showList = ({list})=>{
    const contentList=[]
    for(let t=0; t<=list.lenght; t++){
      contentList.push(<li>{list[t]}</li>)
    }
    return contentList
}
const Names=()=>{
  return <ul>{showList(listNames)}</ul>
}

const App=()=>{
 return <div><Names></Names></div>

}

render(<App></App>, document.getElementById("root"))
