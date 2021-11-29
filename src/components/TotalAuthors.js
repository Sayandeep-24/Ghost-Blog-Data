import axios from "axios";
import React from "react";

function TotalAuthors()
{
    let url="https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062";
    const [authors, setAuthors] = React.useState(0);

    React.useEffect(() => 
    {
        axios.get(url).then((response) => 
        {
            setAuthors(response.data.posts.length);
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










