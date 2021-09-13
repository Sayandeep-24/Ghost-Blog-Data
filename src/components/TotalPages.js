import axios from "axios";
import React from "react";

function TotalPages()
{
    const url = "https://ghost-blog.ipxp.in/ghost/api/v4/content/pages/?key=8196190b08906dda0ebf6e6f5d";
    const [pages, setPages] = React.useState(0);

    React.useEffect(() => 
    {
        axios.get(url).then((response) => 
        {
            setPages(response.data.pages.length);
        });
    }, []);
    
    return (
    <div className='upper-boxes'>  
    <p className = 'heading'>Total number of Pages  </p> 
     <h3 > {pages}</h3>
    </div>
    );
}

export default TotalPages;










