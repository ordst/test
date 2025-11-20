'use client'
import { useEffect,useState } from "react";

async function getBlog() {
  const response= await fetch('https://jsonplaceholder.typicode.com/posts');
  return await response.json()
}

export default  function Post() {
  const[blog,setBlog]=useState([]);
  const initBlog= async()=>{
    const blogs=await getBlog();
    setBlog(blogs)
  }
useEffect(()=>{initBlog()},[])
console.log(blog)
  return (
   <>
   <div>Hello blog</div>
  <ul>
{blog.map((post)=>(
    <li key ={post.id} > {post.id}  {post.title}

</li>))}


</ul>


<img src="/file.svg" alt="file logo" width="150"/>


   </>
  );
}
