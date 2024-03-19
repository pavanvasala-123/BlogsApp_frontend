import React from 'react'
import '../Components/Pagination.css'

function Pagination({PostPerPage , totalPosts,Paginate}) {

    const numbers = [];
    
    for(let i = 1; i <= Math.ceil(totalPosts/ PostPerPage) ; i++){
        numbers.push(i)
        console.log(i)
    }

  return (
    
        <ul style={{display:'flex', justifyContent:'center' , alignItems:'center'}}>
            {numbers.map(eachnumber =>
             
                <button  onClick={()=>Paginate(eachnumber)}>{eachnumber}</button>
                
            )}
        </ul>
    
  )
}

export default Pagination