import { useParams } from "react-router-dom";
import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {RiCake3Line} from "react-icons/ri";
import posts from "../../data/posts"

export default function PostDetail () {

    const [post, setPost] = useState({});
    const { postId } = useParams();

     useEffect(() => {
        for(let i=0; i<posts.length; i++){
            if(posts[i].id == postId){
                console.log(posts[i]);
                setPost({post: posts[i]})
            }
        }
    }, [postId]);
   
    //console.log(posts);
    return (
        <div className="row justify-content-center my-5" >
            <img className="imgDetail" src={post.post?.img}/> 
            <div className="col text-start mt-5 postDetail">
                <h1>{post.post?.title}</h1> 
                
                <p dangerouslySetInnerHTML={{ __html:post.post?.content }}></p>
                <div className="row">
                    <div className="col-6">
                        <p className="mt-5">
                            <strong>Created at: </strong>
                            <span>{post.post?.created_at} </span>
                        </p> 
                        <p>
                            <strong>Time:  </strong>
                            <span>{post.post?.time} </span>
                            <span>{post.post?.categoryId} </span>
                        </p>
                        <p>
                            <strong>Category:  </strong>
                            <span>{post.post?.categoryId} </span>
                        </p> 
                    </div>
                    <div className="col-6 d-flex"><Link className="text-white text-decoration-none back" to={"/"} > <span className="backdot">...</span><RiCake3Line className="btnMuffin"/></Link> </div>
                </div>
            </div> 
        </div>         
    )
}

