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
    <div className='total-boxes'>  
    <p>Total number of Tags : </p> 
     <h4> {tags}</h4>
    </div>
    );
}

export default TotalTags;










