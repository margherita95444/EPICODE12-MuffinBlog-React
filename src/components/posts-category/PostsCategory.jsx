import { useParams } from 'react-router-dom';
import Post from '../post/Post';
import posts from "../../data/posts"


export default function PostsCategory() {
    const {categoryId} = useParams();

    const rows = posts.map((post) => {
        if(post.categoryId == categoryId){
            return <Post post={post} key={post.id}/>
        }
    });
   
    return (
        <div className="mt-5">
            {rows}    
        </div>
    );
}