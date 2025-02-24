import Liste1 from './liste1';
import Liste2 from './liste2';
import Liste3 from './liste3';
import './maincontent.css';

function MainContent() {
    return (
    <>
        <h2>J'aime le développement web, et vous allez comprendre pourquoi à l'instant.</h2>

        <Liste1 titre="Je peux etre creatif"/>
        
        <Liste2/>
        
        <Liste3/>

    </>
    ) 
}

export default MainContent