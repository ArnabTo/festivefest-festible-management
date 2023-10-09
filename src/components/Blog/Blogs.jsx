import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {

    const [blog, setBlog] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(blogData => setBlog(blogData))
    },[])
    return (
        <div>
        <h1 className="text-center uppercase text-4xl font-semibold my-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl m-auto my-8">
        {
            blog.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
        }
    </div>
        </div>
    );
};

export default Blogs;