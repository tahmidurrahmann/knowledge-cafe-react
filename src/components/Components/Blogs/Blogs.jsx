import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
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
            <h1 className="text-4xl">Blogs</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;