import axios from "axios";
import React from "react";

function PublishedPosts()
{
    const url = "https://ghost-blog.ipxp.in/ghost/api/v4/content/posts/?key=8196190b08906dda0ebf6e6f5d";
    const [publishedPosts, setPublishedPosts] = React.useState([
        {
          PostName: null,
          postUrl: null,
        },
        {
          PostName: null,
          postUrl: null,
        },
        {
          PostName: null,
          postUrl: null,
        },
        {
          PostName: null,
          postUrl: null,
        },
        {
          PostName: null,
          postUrl: null,
        },
      ]);

    React.useEffect(() => 
    {
        axios.get(url).then((response) => 
        {
            setPublishedPosts([
                {
                  PostName: response.data.posts[0].title,
                  postUrl: response.data.posts[0].url,
                },
                {
                  PostName: response.data.posts[1].title,
                  postUrl: response.data.posts[1].url,
                },
                {
                  PostName: response.data.posts[2].title,
                  postUrl: response.data.posts[2].url,
                },
                {
                  PostName: response.data.posts[3].title,
                  postUrl: response.data.posts[3].url,
                },
                {
                  PostName: response.data.posts[4].title,
                  postUrl: response.data.posts[4].url,
                },
              ]);
        });
    }, []);
    
    return (
    <div className='total-boxes'>  
    <p>Last 5 published posts : </p> 
    <ul>
        <li> <a href={publishedPosts[0].postUrl}>{publishedPosts[0].PostName}</a> </li>
        <li> <a href={publishedPosts[1].postUrl}>{publishedPosts[1].PostName}</a> </li>
        <li> <a href={publishedPosts[2].postUrl}>{publishedPosts[2].PostName}</a> </li>
        <li> <a href={publishedPosts[3].postUrl}>{publishedPosts[3].PostName}</a> </li>
        <li> <a href={publishedPosts[4].postUrl}>{publishedPosts[4].PostName}</a> </li>
    </ul>
    </div>
    );
}

export default PublishedPosts;










