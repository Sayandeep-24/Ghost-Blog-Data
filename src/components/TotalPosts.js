import axios from "axios";
import React from "react";

function TotalPosts()
{    
    let url="https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062";

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










