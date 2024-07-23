// import React, { useEffect,useState } from 'react';
// import './BlogItems.css';
// import {Circles} from 'react-loader-spinner';

// function BlogItems({currentPosts,loader}) {
  
//      return (
//     <div className='blogsCon'>
//         <h1>Blogs</h1>

//         {loader ? <Circles
//                height="80"
//                width="80"
//                color="#4fa94d"
//                ariaLabel="circles-loading"
//                wrapperStyle={{}}
//                wrapperClass=""
//                visible={true}
//                />
//         :
//         ( <ul>
//              {currentPosts.map(eachBlog => <li key={eachBlog._id}>
//         <div className='tiletimeCon'>
//              <div>
//                 <h2>{eachBlog.title}</h2>
//                 <h3>{eachBlog.author}</h3>
//             </div>
//                  <p>{eachBlog.createdAt.substring(0, 10)}</p>
//          </div>
//         <p>{eachBlog.description}</p>
//    </li>)}
// </ul>)}

//     </div>
//   )
// }

// export default BlogItems



import React from 'react';
import './BlogItems.css';
import { Circles } from 'react-loader-spinner';

function BlogItems({ currentPosts, loader }) {
  return (
    <div className='blogsCon'>
      <h1>Blogs</h1>

      {loader ? (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          className="loader"
        />
      ) : (
        <ul>
          {currentPosts.map((eachBlog) => (
            <li key={eachBlog._id}>
              <div className='tiletimeCon'>
                <div>
                  <h2>{eachBlog.title}</h2>
                  <h3>{eachBlog.author}</h3>
                </div>
                <p>{eachBlog.createdAt.substring(0, 10)}</p>
              </div>
              <p>{eachBlog.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BlogItems;
