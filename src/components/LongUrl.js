import axios from "axios";
import React from "react";
import NoPostsMessage from "./NoPostsMessage"
import { useState } from 'react';


export default function WithoutMeta()
{
    const url = "https://ghost-blog.ipxp.in/ghost/api/v4/content/posts/?key=8196190b08906dda0ebf6e6f5d";
    let address = 'https://ghost-blog.ipxp.in/'
    const [publishedPosts, setPublishedPosts] = React.useState([]);
    const [flag, setFlag] = useState(true);


    React.useEffect(() => 
    {
        axios.get(url).then((response) => 
        {
            for (const post of response.data.posts) 
            {
                if(post.meta_description && post.url.length >100)
                {   
                    setFlag(false);
                    setPublishedPosts(prevState => [...prevState, { postUrl : address.concat(post.url.slice(27)),
                        postName: post.title,
                        id : post.id
                      }]);
                }
            }
        });
    }, []);

    return (
    <div className='post-boxes'>  
        <p className = 'heading-bottom'>Too long URL </p> 
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
