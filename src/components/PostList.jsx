import React from "react";
import PostItem from "./PostItem";

const PostList = ({post, title}) => {
    console.log(title);
    return (
        <div>
            <h1>{title}</h1>
            {post.map((post) => 
                <PostItem post={post}/>
            )}
        </div>
    );
};
export default PostList;