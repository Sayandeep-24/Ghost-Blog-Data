import axios from "axios";
import React from "react";
import NoPostsMessage from "./NoPostsMessage";
import { useState } from 'react';
import $ from 'jquery';



export default function BrokenInternal()
{
    let url="https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062";
    let internal ='https://demo.ghost.io';
    const [publishedPosts, setPublishedPosts] = React.useState([]);
    const [flag, setFlag] = useState(true);


    function getTotalLinks(rawHTML)
    {
        let doc = document.createElement("html");
        doc.innerHTML = rawHTML;
        let link = doc.getElementsByTagName("a");
        return link;
    }
    

          
      

    React.useEffect(() => 
    {
        axios.get(url).then((response) => 
        {
            for (const post of response.data.posts) 
            {
                let rawHTML = post.html;
                let link = getTotalLinks(rawHTML);
                for (const c of link) {
                    let urlBeginning=c.href.slice(0,22);
                    if(urlBeginning===internal)
                    {
                        $.get(c.href).done(function () {
                          }).fail(function () {
                            setFlag(false);
                            setPublishedPosts(prevState => [...prevState, { postUrl : c.href,
                                id : post.id
                              }]);  
                          });                        
                    }
                  }
            }
        });
    }, []);


    return (
    <div className='pages-boxes'>  
        <p className = 'heading-bottom'>Broken Internal Pages </p> 
        <ul>
            {publishedPosts.map(post => {
                return (
                <li className='pages-posts' key={post.id}> <a href={post.postUrl}>{post.postUrl}</a> </li>
                )
            })}
        </ul>
        <div>{flag && <NoPostsMessage />}</div>
    </div>
    );
}
