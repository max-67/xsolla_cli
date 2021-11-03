import React from "react";

const PostItem = (props, posts) => {
return (
    <div className='post'>
        <div className='post_content'>
            <p>{props.post.content}</p>
        </div>
        <div className='post_btn'>
            <button>Удалить</button>
        </div>    
    </div>
)
}

export default PostItem;