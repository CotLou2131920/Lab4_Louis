'use client';
import	React from "react"

export default function AjoutBLog()
{
    
    function ajouterBlog() {
        fetch('http://localhost:3000/blog',
        {
            method: 'POST',
            body: JSON.stringify({
                titre: $("input").val(),
                auteur: $(".auteur").val(),
                contenu: $("textarea").val(),
                datePublication: getFormattedDate(),
    
            })
        })
    }
    
    
    // Obtenez la date actuelle au format JJ/MM/AAAA
    function getFormattedDate() {
        const now = new Date();
        const day = now.getDate().toString().padStart(2, '0');
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Les mois sont indexés à partir de zéro
        const year = now.getFullYear();
        return `${day}/${month}/${year}`;
      }
    
       
    

    

    return (
        <>
        <form id="blogForm">
            <br></br>
        <label for="titre">Titre:</label>
        <input type="text" id="titre"></input>
        <br></br>
        <label for="auteur">Auteur:</label>
        <input type="text" id="auteur" class="auteur" ></input>
        <br></br>
        <label for="contenu">Contenu:</label>
        <textarea id="contenu" ></textarea>
        <button class="ajoutBlog" onClick={ajouterBlog}>Ajouter</button>
        </form>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
        </>
    );
}

