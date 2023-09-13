import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookMark, handleReadTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch('blogs.json');
            const data = await res.json();
            setBlogs(data);
        }
        fetchData();
    },[])
    return (
        <div className="w-2/3">
            <h1 className="text-4xl">Blogs : {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} handleBookMark={handleBookMark} handleReadTime={handleReadTime} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;