'use client';
import BlogDetails from "../composantBlog/BlogDetails.js"
import UserContext from "../composantBlog/UserContext.js"
import CommentList from "../composantBlog/CommentList.js";
import AddComment from "../composantBlog/AddComment.js"

export default function Blog({params})
{
  
 return(
   <>
      <UserContext.Provider value={params.id}>
      <div className="text-center p-5 bg-dark">
      <img src="/Image/Logo.png" alt="" className="img-fluid " style={{ height: '400px', width: '100%' }}></img>
      </div>
        <BlogDetails></BlogDetails>
        <CommentList></CommentList>
        <AddComment></AddComment>
      </UserContext.Provider>

   </>
    
 )
}