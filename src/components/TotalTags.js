import axios from "axios";
import React from "react";

function TotalTags()
{
    let url="https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062";
    const [tags, setTags] = React.useState(0);

    React.useEffect(() => 
    {
        axios.get(url).then((response) => 
        {
            setTags(response.data.posts.length);
        });
    }, []);
    
    return (
    <div className='upper-boxes'>  
    <p className = 'heading'>Total number of Tags  </p> 
     <h3> {tags}</h3>
    </div>
    );
}

export default TotalTags;










