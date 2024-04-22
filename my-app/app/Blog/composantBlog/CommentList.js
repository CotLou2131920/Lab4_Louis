'use client';
import	React from "react"
import UserContext from "./UserContext.js";
import Comment from "./Comment.js"

export default function CommentList()
{
    const id = React.useContext(UserContext);
    let [Commentaires, setCommentaires] = React.useState([]);

    React.useState(() => {
        async function obtenirCommentaires() {
   
            await  fetch(`http://localhost:3000/commentaire?blogId=${id}`)
            .then(reponse => reponse.json())     
            .then(json => setCommentaires(json)) 
            }
            obtenirCommentaires();
    }, [])
    
    return <>
        <div >
        {Commentaires.map((Commentaires) => <Comment key={Commentaires.id} {...Commentaires}></Comment>)}
        </div>
        
        </> 
    
}

