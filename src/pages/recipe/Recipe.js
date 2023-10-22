import React from 'react'
import './Recipe.css'
import  { useEffect,useState } from 'react'
import {useParams,useHistory} from 'react-router-dom'

import { useTheme} from '../../hooks/useTheme'
import { projectFirestore } from '../../firebase/Config'


export default function Recipe() {
  const {id} = useParams()
  const {mode} = useTheme()
  const history = useHistory()

  const [recipe,setRecipe] = useState(null)
  const [isPending,setIsPending] = useState(false)
  const [error,setError] = useState(false)

  useEffect(()=>{
    setIsPending(true)

    const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc)=>{
      if (doc.exists){        
        setIsPending(false)
        setRecipe(doc.data())
      } else {
        setIsPending(false)
        setError('could not find that confession')
      }
    })

    return()=> unsub()
    
  },[id])

  // const handleClick =()=>{
  //   projectFirestore.collection('recipes').doc(id).update({
  //     title : 'this his the new title'
  //   })
  // }

  useEffect(()=>{
    if(error){
      //redirect
      //history.goBack()
      setTimeout(()=>{
        history.push('/')
      },2000)
    }
  },[error,history])
  return (
    <div>
      
    <div className={`recipes ${mode}`}>
      
      {isPending && <div>Loading...</div>}
      {error && <div className={`error ${mode}`}>{error}</div>}
      {recipe && 
        <div className='card'>
          <h3>{recipe.title}</h3>
          <p>Credit: {recipe.cookingTime}  </p>
          <h5>Tags - </h5>
          <ul>
            {recipe.ingredients.map(ing =><li key={ing}>#{ing}</li>)}
          </ul>
          
          <p>{recipe.method}</p>
          {/* <button onClick={handleClick}> update</button> */}
        </div>
      }
  </div>

    </div>
  )
}
