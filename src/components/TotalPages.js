import axios from "axios";
import React from "react";

function TotalPages()
{
    let url="https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062";
    const [pages, setPages] = React.useState(0);

    React.useEffect(() => 
    {
        axios.get(url).then((response) => 
        {
            console.log(response);
            setPages(response.data.meta.pagination.pages);
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










