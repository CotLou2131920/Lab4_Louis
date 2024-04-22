import css from "../css/style.css";

export default function Header()
{
    return<>
        <header style={css.Header} >
        <h1>CEPI - Blog</h1>
    </header>
    <div className="d-flex" >
    <img src="/Image/Logo.png" alt="" className="col-2 logo" style={css.logo}></img>
        <nav className="navbar navbar-expand-md menu " style={css.nav}>
            <div className="container-fluid" style={css.menu}>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="col-12">
                    <a href="/" className="" style={css.nav}>Accueil</a> 
                    <a href="#" className="" style={css.nav}>Produits</a> 
                    <a href="#" className="" style={css.nav}>Panier</a> 
                    <a href="#" className="" style={css.nav}>Contact</a>
                    <img src="/Image/Profil.png" alt="" className="" style={css.nav}></img>
                </div>
                </div>
            </div>
        </nav>
    </div>
    
    </> 
}