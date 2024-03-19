import React, { useEffect,useState } from 'react'
import './BlogItems.css'
import {Circles} from 'react-loader-spinner'
// import Pagination from '../Components/Pagination'

function BlogItems({currentPosts,loader}) {

    // const [blog , setBlog] = useState([])
    // const [loader , setLoader] = useState(false)

    // const[currentPage , setCurrentPage] = useState(1)
    // const[PostPerPage , setPostPerPage] = useState(5)

    // const indexOfLastPost = currentPage * PostPerPage 
    // const indexOfFirstPost = indexOfLastPost - PostPerPage 
    
    // const currentPosts = blog.slice(indexOfFirstPost ,indexOfLastPost)

    // const Paginate = (number) => setCurrentPage(number)

    // useEffect(() => {
    //     const Fetchdata = async() => {
    //         try{
    //             setLoader(true)
    //             const res = await fetch("http://localhost:3003/blogs")
    //             const data = await res.json()
    //             setLoader(false)
    //             setBlog(data)
    //         }catch(err){
    //             console.log(err)
    //         }
          
    //     }

    //     Fetchdata()  
    // }, [])
    

  return (
    <div className='blogsCon'>
        <h1>Blogs</h1>

        {loader ? <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
        :
        ( <ul>
             {currentPosts.map(eachBlog => <li key={eachBlog._id}>
        <div className='tiletimeCon'>
             <div>
                <h2>{eachBlog.title}</h2>
                <h3>{eachBlog.author}</h3>
            </div>
                 <p>{eachBlog.createdAt.substring(0, 10)}</p>
         </div>
        <p>{eachBlog.description}</p>
   </li>)}
</ul>)}

    </div>
  )
}

export default BlogItems