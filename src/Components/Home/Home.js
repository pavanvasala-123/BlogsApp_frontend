import { useState, useEffect } from "react";
import BlogItems from "../BlogItems";
import Pagination from "../Pagination";

export const Home = () => {
  const [blog, setBlog] = useState([]);
  const [loader, setLoader] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [PostPerPage, setPostPerPage] = useState(5);

  const indexOfLastPost = currentPage * PostPerPage;
  const indexOfFirstPost = indexOfLastPost - PostPerPage;

  const currentPosts = blog.slice(indexOfFirstPost, indexOfLastPost);

  const Paginate = (number) => setCurrentPage(number);

  useEffect(() => {
    const Fetchdata = async () => {
      try {
        setLoader(true);
        const res = await fetch("https://blogsapp-backend.onrender.com/blogs");
        const data = await res.json();
        setLoader(false);
        setBlog(data);
      } catch (err) {
        console.log(err);
      }
    };

    Fetchdata();
  }, []);
  return (
    <div>
      <BlogItems currentPosts={currentPosts} loader={loader} />
      <Pagination
        PostPerPage={PostPerPage}
        totalPosts={blog.length}
        Paginate={Paginate}
      />
    </div>
  );
};

export default Home;
