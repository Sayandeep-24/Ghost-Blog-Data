import axios from "axios";
import React from "react";

function TotalPosts()
{
    const url = "https://ghost-blog.ipxp.in/ghost/api/v4/content/posts/?key=8196190b08906dda0ebf6e6f5d";
    const [posts, setPost] = React.useState(0);

    React.useEffect(() => 
    {
        axios.get(url).then((response) => 
        {
            setPost(response.data.posts.length);
        });
    }, []);
    
    return (
    <div className='upper-boxes'>  
    <p className = 'heading'>Total number of Posts  </p> 
     <h3> {posts}</h3>
    </div>
    );
}

export default TotalPosts;










