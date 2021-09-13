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
    <div className='upper-boxes'>  
    <p className = 'heading'>Total number of Authors </p> 
     <h3> {authors}</h3>
    </div>
    );
}

export default TotalAuthors;










