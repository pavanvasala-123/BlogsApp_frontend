// // import Login from '../src/Components/loginPage/login'
// // import { BrowserRouter, Route, Routes  } from 'react-router-dom';
// // import './App.css';
// // import Navbar from './Components/Navbar/Navbar';
// // import Signup from './Components/SignUpPage/SignUp';
// // import Home from './Components/Home/Home';
// // import BlogForm from './Components/CreateBlog/CreateBlog';
// // import PrivateRoutes from './Components/privateRoutes';
// // import UserBlogs from './Components/UserBlogs/UserBlogs';

// // function App() {
// //   return (
// //     <div >

// //       <BrowserRouter>
// //         <Navbar/>
// //         <Routes>
// //        <Route  path='/blogs' Component={Home}/>
     
// //        <Route path='/login' Component = {Login}/>
     
// //        <Route path='/signUp' Component={Signup}/>
// //        <Route element = {<PrivateRoutes/>}>
// //           <Route path='/createblog' element = {<BlogForm/>} exact />
// //           <Route path='/myblogs' element = {<UserBlogs/>} exact />
    
// //        </Route>
// //        </Routes>
// //       </BrowserRouter>

// //     </div>
// //   );
// // }

// // export default App;


// import Login from './Components/loginPage/login';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import Signup from './Components/SignUpPage/SignUp';
// import Home from './Components/Home/Home';
// import BlogForm from './Components/CreateBlog/CreateBlog';
// import PrivateRoutes from './Components/privateRoutes';
// import UserBlogs from './Components/UserBlogs/UserBlogs';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route element={<PrivateRoutes />}>
//             <Route path="/createblog" element={<BlogForm />} exact />
//             <Route path="/myblogs" element={<UserBlogs />} exact />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


// import Login from './Components/loginPage/login';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import Signup from './Components/SignUpPage/SignUp';
// import Home from './Components/Home/Home';
// import BlogForm from './Components/CreateBlog/CreateBlog';
// import PrivateRoutes from './Components/privateRoutes';
// import UserBlogs from './Components/UserBlogs/UserBlogs';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route element={<PrivateRoutes />}>
//             <Route path="/createblog" element={<BlogForm />} exact />
//             <Route path="/myblogs" element={<UserBlogs />} exact />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Login from './Components/loginPage/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/SignUpPage/SignUp';
import Home from './Components/Home/Home';
import BlogForm from './Components/CreateBlog/CreateBlog';
import PrivateRoutes from './Components/privateRoutes';
import UserBlogs from './Components/UserBlogs/UserBlogs';
import { AuthProvider } from './Components/AuthContext';
import UpdateBlogForm from './Components/UpdateBlog/UpdateBlog';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/blogs" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/createblog" element={<BlogForm />} exact />
            <Route path="/myblogs" element={<UserBlogs />} exact />
            <Route path= '/update/:id' element={<UpdateBlogForm />} exact />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

