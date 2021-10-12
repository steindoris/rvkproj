import { Button } from 'react-bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../rvk.css'



const HeroBlock = () => {
    var styles1 = {
        
        
      };
    const btnPrim = () => {
        window.open("https://reykjavik.is/");
    }
    const btnTert = () => {
        window.open("https://medium.com/javascript-scene/the-missing-introduction-");
    }

return (
    <div className='layout'>
            
        <h1 className='hero'>Stuðningsþjónusta<br />við fatlað fólk</h1>
        
        <div>
            <p className='parag'>Stuðningsþjónusta mætir fötluðu fólki á þeim stað sem það er í lífinu og fer fram þar sem best hentar. 
            Fólk fær stuðning við að útfæra þjónustuna þannig að hún styðji það við að lifa sjálfstæðu lífi, fást við 
            dagleg verkefni og efla þátttöku sína í samfélaginu. <br /><br />
            Bókaðu símtal og við finnum út úr því saman hvernig þjónusta hentar þér.
            </p>
            <div className='buts'>
                <Button className='buts1' onClick={btnPrim}>
                    Bóka símtal
                </Button><br />
                <Button className='buts1 buts2' variant="outline-primary" onClick={btnTert}>
                Spurt og svarað
                </Button><br />
            </div>
            <div>
                <img className="img1" src="https://styles.reykjavik.is/assets/illustrations/allirsaman1.png" alt="logo" />
            </div>
            
        </div>
    </div>
)
}

export default HeroBlock
