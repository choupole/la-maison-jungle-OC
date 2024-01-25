import logo from '../assets/logo.png'; //ici on fait l'importation du logo en déclarant une variable logo

import '../styles/Banner.css';
function Banner() {
    return (
        <div className="lmj-banner">
            {/* ici on utilise notre logo */}
            <img src={logo} alt='La maison jungle' className='lmj-logo'/> 
            <h1>La maison de la jungle</h1>
        </div>
    )  
}
export default Banner;