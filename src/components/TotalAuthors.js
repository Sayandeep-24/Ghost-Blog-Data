import axios from "axios";
import React from "react";

function TotalAuthors()
{
    const url = "https://ghost-blog.ipxp.in/ghost/api/v4/content/authors/?key=8196190b08906dda0ebf6e6f5d";
    const [authors, setAuthors] = React.useState(0);

    React.useEffect(() => 
    {
        axios.get(url).then((response) => 
        {
            setAuthors(response.data.authors.length);
        });
    }, []);
    
    return (
    <div className='total-boxes'>  
    <p>Total number of Authors : </p> 
     <h4> {authors}</h4>
    </div>
    );
}

export default TotalAuthors;










