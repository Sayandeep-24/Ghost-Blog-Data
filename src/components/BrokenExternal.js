import axios from "axios";
import React from "react";
import NoPostsMessage from "./NoPostsMessage";
import { useState } from 'react';
import $ from 'jquery';



export default function BrokenExternal()
{
    const url = "https://ghost-blog.ipxp.in/ghost/api/v4/content/posts/?key=8196190b08906dda0ebf6e6f5d";
    let internal ='https://ghost';
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
                    let urlBeginning=c.href.slice(0,13);
                    if(urlBeginning===internal)
                    {
  
                    }
                    else
                    {

                        $.get(c.href).done(function () {
                            console.log("success");
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
        <p className = 'heading-bottom'>Broken External Pages </p> 
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
