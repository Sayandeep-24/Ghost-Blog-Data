import axios from "axios";
import React from "react";

function TotalTags()
{
    const url = "https://ghost-blog.ipxp.in/ghost/api/v4/content/tags/?key=8196190b08906dda0ebf6e6f5d";
    const [tags, setTags] = React.useState(0);

    React.useEffect(() => 
    {
        axios.get(url).then((response) => 
        {
            setTags(response.data.tags.length);
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










