import { useTheme } from "../hooks/useTheme";
import modeIcon from '../assets/mode-icon.svg'

import './ThemeSelector.css';


const themeColors = ['#58249c', '#249c6b', '#b70233']
//onClick={()=>changeColor('pink')
export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme()

  const toggleMode=()=>{
    changeMode( mode ==="light"?"dark":"light")
  }
  console.log(mode)

  return (
    <div className="themeSelector">
        <div className="mode-toggle">
            <img
            onClick = {toggleMode}
             src={modeIcon}
             alt='dark/light toggle icon'
             style={{filter:mode ==='dark'? 'invert(100%)' : 'invert(20%)'}}
             />
        </div>
        <div > 
        {themeColors.map(color => (
            <div className="themeButtons"
            key={color}
            onClick={() => changeColor(color)}
            style={{background: color }}
            >
               
            </div>
        ))} 
        </div>
    </div>
  )
}
// {recipes.map(recipe =>(
//     <div key={recipe.id} className='card'>
//         <h3>{recipe.title}</h3>
//         <p>{recipe.cookingTime} to make.</p>
//         <div>{recipe.method.substring(0,100)}...</div>
//         <Link to={`/recipes/${recipe.id}`}>Cook This</Link></div>
// ))}
