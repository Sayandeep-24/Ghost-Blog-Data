import axios from "axios";
import React from "react";

function TotalLinks()
{
    let url="https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062";
    let internal ='https://demo.ghost.io';

    const [Links, setLinks] = React.useState(0);
    const [InternalLinks, setInternalLinks] = React.useState(0);
    const [ExternalLinks, setExternalLinks] = React.useState(0);


    let totalLinks = 0;
    let totalInternalLinks = 0;
    let totalEnternalLinks = 0;

    function getTotalLinks(rawHTML)
    {
        let doc = document.createElement("html");
        doc.innerHTML = rawHTML;
        let link = doc.getElementsByTagName("a");
        return link;
    }
    

    
    React.useEffect(() => 
    {
        axios.get(url).then((response) => 
        {
            for (const post of response.data.posts) 
            {
                let rawHTML = post.html;
                let link = getTotalLinks(rawHTML);
                totalLinks = totalLinks+(link.length);

                for (const c of link) {
                    let urlBeginning=c.href.slice(0,13);
                    if(urlBeginning===internal)
                    {
                        totalInternalLinks++;
                    }
                    else
                    {
                         totalEnternalLinks++;
                    }
                  }
            }
            setLinks(totalLinks);
            setInternalLinks(totalInternalLinks);
            setExternalLinks(totalEnternalLinks);

        });
    }, []);
    
    return (
    <div className='pages-upper-box'>  
    <p className = 'pages-heading'>Total number of Links </p> 
     <h3> {Links}</h3>
     <p className = 'pages-heading'>Total number of Internal Links </p> 
     <h3> {InternalLinks}</h3>
     <p className = 'pages-heading'>Total number of External Links </p> 
     <h3> {ExternalLinks}</h3>

    </div>
    );
}

export default TotalLinks;










