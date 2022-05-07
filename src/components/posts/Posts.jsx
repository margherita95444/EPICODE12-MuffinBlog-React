import Post from '../post/Post'
import posts from "../../data/posts"

export default function Posts () {
   
    const card = posts.map(post => <Post post={post} key={post.id}/>);

    return (
        <div className="row justify-content-center">
            <div className="col-6">
                { card } 
            </div>
        </div>
    );
}

 