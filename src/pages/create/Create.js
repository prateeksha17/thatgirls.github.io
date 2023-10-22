import React, { useEffect } from 'react'
import './Create.css'
import { projectFirestore } from '../../firebase/Config'
import {useState,useRef} from 'react'

import {useHistory} from 'react-router-dom'
import { useTheme} from '../../hooks/useTheme'
export default function Create() {
  const {mode} = useTheme()

  //functions 
  const [title, setTitle] = useState('')
  const [method,setMethod] = useState('')
  const [cookingTime,setCookingTime] = useState('')
  const [newIngredient,setNewIngredient] = useState('')
  const [ingredients,setIngredients] = useState([])
  const ingredientInput = useRef(null)

 

  const history = useHistory()

  // useEffect(()=>{
  //   if(error){
  //     //redirect
  //     //history.goBack()
  //     setTimeout(()=>{
  //       history.push('/')
  //     },2000)
  //   }
  // },[error,history])

  const handleSubmit = async (e)=>{
    e.preventDefault()
   
         
    const doc ={title, ingredients ,method , cookingTime: 'BY:' + cookingTime }

    try{
      await projectFirestore.collection('recipes').add(doc)
      history.push('/')
    } catch(err) {
      console.log(err)
    }
     
        
  }

  const handleAdd = (e) =>{
    e.preventDefault()
    const ing = newIngredient.trim()

    if(ing && !ingredients.includes(ing)){
      setIngredients(prevIngredients => [...prevIngredients,ing])
    }
    setNewIngredient('')
      ingredientInput.current.focus()
  }


  return (
    <div className={`create ${mode}`}> 
      <h2 className='page-title'>Add a new Confession</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input 
          type='text'
          onChange={(e)=>setTitle(e.target.value)}
          value={title}
          required
          />
        </label>

        <label>
          <span>Tags:</span>
          <div className='ingredients'>
            <input
            type='text'
            onChange={(e)=> setNewIngredient(e.target.value)}
            value={newIngredient}
            ref={ingredientInput}
            />
            <button onClick={handleAdd} type="button" className='btn'>Add</button>
          </div>
        </label>
        <p>Current Tags: {ingredients.map(i => <em key={i}>{i},</em>)}</p>

        <label>
          <span>Enter Confession</span>
          <textarea
          
          onChange={(e)=>setMethod(e.target.value)}
          value={method}
          required
          />
        </label>

        <label>
          <span>Instagram Handle (optional):</span>
          <input 
          type='text'
          onChange={(e)=>setCookingTime(e.target.value)}
          value={cookingTime}
          
          />
        </label>

        <button className='btn'>Summit</button>
      </form>
    </div>
  )
}
