export default function DisplayPosts(props)
{
    /*
    props.posts.forEach(element => {
        console.log(element.postUrl);
        console.log(element.postName);
    });
    console.log(props.posts)
    */
    
   return(
       <div>
            {props.posts.map(function(element, keys){
                    return <li keys={ element.key }>{element.postName}</li>;
                  })}
       </div>
   );
}