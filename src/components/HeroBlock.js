import { Button } from 'react-bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



const HeroBlock = () => {
    const mystyle = {
        marginTop: "60px",
        fontFamily: "Arial",
        textAlign: 'left',
      };
    const btnPrim = () => {
        window.open("https://reykjavik.is/");
    }
    const btnTert = () => {
        window.open("https://medium.com/javascript-scene/the-missing-introduction-");
    }

return (
    <div style={mystyle}>
            
        <h1>Stuðningsþjónusta við fatlað fólk</h1>
        
        <div>
            <p>Stuðningsþjónusta mætir fötluðu fólki á þeim stað sem það er í lífinu og fer fram þar sem best hentar. 
            Fólk fær stuðning við að útfæra þjónustuna þannig að hún styðji það við að lifa sjálfstæðu lífi, fást við 
            dagleg verkefni og efla þátttöku sína í samfélaginu.
            Bókaðu símtal og við finnum út úr því saman hvernig þjónusta hentar þér.
            </p>
            <div>
                <Button variant="primary" onClick={btnPrim}>
                    Bóka símatal
                </Button><br />
                <Button variant="outline-primary" onClick={btnTert}>
                Spurt og svarað
                </Button><br />
            </div>
            <img className="img1" width="193" height="130" src="https://styles.reykjavik.is/assets/illustrations/allirsaman1.png" alt="logo" />
        </div>
    </div>
)
}

export default HeroBlock
