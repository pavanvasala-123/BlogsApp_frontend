
import { useState, useEffect } from "react";
import BlogItems from "../BlogItems";
import Pagination from "../Pagination";
import './Home.css'

export const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loader, setLoader] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [postPerPage] = useState(5); // Default to 5 posts per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const res = await fetch(
          `https://blogsapp-backend.onrender.com/blogs?page=${currentPage}&limit=${postPerPage}`
        );
        const data = await res.json();
        setLoader(false);
        setBlogs(data.blogs);
        setTotalPages(data.totalPages);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [currentPage]);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="home">
      <BlogItems currentPosts={blogs} loader={loader} />
      { blogs && <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />}
    </div>
  );
};

export default Home;


