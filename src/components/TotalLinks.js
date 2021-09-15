import axios from "axios";
import React from "react";

function TotalLinks()
{
    const url = "https://ghost-blog.ipxp.in/ghost/api/v4/content/posts/?key=8196190b08906dda0ebf6e6f5d";
    let internal ='https://ghost-blog.ipxp.in/';

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
                    let urlBeginning=c.href.slice(0,26);
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
    <div className='upper-boxes'>  
    <p className = 'heading'>Total number of Links </p> 
     <h3> {Links}</h3>
     <p className = 'heading'>Total number of Internal Links </p> 
     <h3> {InternalLinks}</h3>
     <p className = 'heading'>Total number of External Links </p> 
     <h3> {ExternalLinks}</h3>

    </div>
    );
}

export default TotalLinks;










