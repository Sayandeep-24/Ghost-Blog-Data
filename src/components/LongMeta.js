import axios from "axios";
import React from "react";
import { useState } from 'react';
import NoPostsMessage from "./NoPostsMessage"


export default function WithoutMeta()
{
    let url="https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062";
    let address = 'https://demo.ghost.io/'
    const [publishedPosts, setPublishedPosts] = React.useState([]);
    const [flag, setFlag] = useState(true);


    React.useEffect(() => 
    {
        axios.get(url).then((response) => 
        {
            for (const post of response.data.posts) 
            {
                if(post.meta_description && post.meta_description.length >155)
                {
                    setFlag(false);
                    setPublishedPosts(prevState => [...prevState, { postUrl : address.concat(post.url.slice(22)),
                        postName: post.title,
                        id : post.id
                      }]);
                }
            }
        });
    }, []);

    return (
    <div className='post-boxes' id='long-meta'>  
        <p className = 'heading-bottom'>Too long meta description </p> 
        <ul>
            {publishedPosts.map(post => {
                return (
                <li className='post-posts' key={post.id}> <a href={post.postUrl}>{post.postName}</a> </li>
                )
            })}
        </ul>
        <div>{flag && <NoPostsMessage />}</div>
    </div>
    );
}
