import './listes.css'

function Liste1(prop) {
    return (
    <>
        <div class="list-item">
            <img src="https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=60,format=auto/sources/AdobeStock_314829332.jpeg" alt="Créativité"/>
            <div>
                <h3>{prop.titre}</h3>
                <p>Le développement web me permet d'explorer ma créativité en concevant des interfaces uniques et interactives.</p>
            </div>
        </div>
    </>
    ) 
}


export default Liste1