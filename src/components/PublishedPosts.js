import axios from "axios";
import React from "react";

function PublishedPosts()
{
  let url="https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062";
  let address = 'https://demo.ghost.io/'
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
                  postUrl: address.concat(response.data.posts[0].url.slice(22)),
                },
                {
                  PostName: response.data.posts[1].title,
                  postUrl: address.concat(response.data.posts[1].url.slice(22)),
                },
                {
                  PostName: response.data.posts[2].title,
                  postUrl: address.concat(response.data.posts[2].url.slice(22)),
                },
                {
                  PostName: response.data.posts[3].title,
                  postUrl: address.concat(response.data.posts[3].url.slice(22)),
                },
                {
                  PostName: response.data.posts[4].title,
                  postUrl: address.concat(response.data.posts[4].url.slice(22)),
                },
              ]);
        });
    }, []);
    
    return (
    <div className='lower-boxes'>  
    <p className = 'heading-bottom'>Last 5 published posts  </p> 
    <ul>
        <li className='posts'> <a href={publishedPosts[0].postUrl}>{publishedPosts[0].PostName}</a> </li>
        <li className='posts'> <a href={publishedPosts[1].postUrl}>{publishedPosts[1].PostName}</a> </li>
        <li className='posts'> <a href={publishedPosts[2].postUrl}>{publishedPosts[2].PostName}</a> </li>
        <li className='posts'> <a href={publishedPosts[3].postUrl}>{publishedPosts[3].PostName}</a> </li>
        <li className='posts'> <a href={publishedPosts[4].postUrl}>{publishedPosts[4].PostName}</a> </li>
    </ul>
    </div>
    );
}

export default PublishedPosts;










