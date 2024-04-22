'use client';
import	React from "react"
import UserContext from "./UserContext.js";

export default function BlogDetails()
{
    const id = React.useContext(UserContext);
    let [Publications, setPublications] = React.useState([]);
   

    React.useState(() =>{ async function obtenirBlog() {
   
    fetch(`http://localhost:3000/blog?id=${id}`)	
    .then(reponse => reponse.json())    
    .then(json => {setPublications(json[0]); })
    }   obtenirBlog();
    }, [])
    

    if (Publications == null)
    {
        return <h1 className="text-center">Publication non valide</h1>
    }
    else
    {
        return <>
        <div className=" container d-flex  flex-column align-self-center ">
            <h1 className="text-center">{Publications.titre}</h1> 
            <p className="text-center">{Publications.auteur}</p>
            <p className="text-center">{Publications.datePublication}</p>
        </div>
        <div className="text-center container bg-dark w-25">
        <img src="/Image/Logo.png" alt="" className="img-fluid "></img>
        </div>
        <div className="ContenuBlog container d-flex  flex-column align-self-center">
            <h3 className="text-center">Caption</h3> 
            <p className="text-center">{Publications.contenu}</p>
        </div>
    </>
    }


}

