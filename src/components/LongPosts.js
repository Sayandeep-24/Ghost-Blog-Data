import axios from "axios";
import React from "react";
import NoPostsMessage from "./NoPostsMessage";
import { useState } from 'react';


export default function LongPosts()
{
    const url = "https://ghost-blog.ipxp.in/ghost/api/v4/content/posts/?key=8196190b08906dda0ebf6e6f5d";
    let address = 'https://ghost-blog.ipxp.in/'
    const [publishedPosts, setPublishedPosts] = React.useState([]);
    const [flag, setFlag] = useState(true);

    function htmlToText(html) {
        var temp = document.createElement('div');
        temp.innerHTML = html;
        return temp.textContent; 
    }
    function countWords(str) {
        str = str.replace(/(^\s*)|(\s*$)/gi,"");
        str = str.replace(/[ ]{2,}/gi," ");
        str = str.replace(/\n /,"\n");
        return str.split(' ').length;
     }
    
    React.useEffect(() => 
    {
        axios.get(url).then((response) => 
        {
            for (const post of response.data.posts) 
            {
                let text=htmlToText(post.html);
                let wordCount = countWords(text);
                if(wordCount >1500)
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
        <p className = 'heading-bottom'>Too long posts </p> 
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
