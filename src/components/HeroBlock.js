import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../rvk.css'



const HeroBlock = () => {

    const btnPrim = () => {
        window.open("https://reykjavik.is/");
    }
    const btnTert = () => {
        window.open("https://medium.com/javascript-scene/the-missing-introduction-");
    }

return (
    <div className='layout'>
    <div className='layout1'>
            
        <h1 className='hero'>Stuðningsþjónusta við fatlað fólk</h1>
        
        <div>
            <p className='parag'>Stuðningsþjónusta mætir fötluðu fólki á þeim stað sem það er í lífinu og fer fram þar sem best hentar. 
            Fólk fær stuðning við að útfæra þjónustuna þannig að hún styðji það við að lifa sjálfstæðu lífi, fást við 
            dagleg verkefni og efla þátttöku sína í samfélaginu. <br /><br />
            Bókaðu símtal og við finnum út úr því saman hvernig þjónusta hentar þér.
            </p>
            <div>
                <button className='buts buts2' onClick={btnPrim}>
                    Bóka símtal
                </button><br />
                <button className='buts buts3' onClick={btnTert}>
                Spurt og svarað
                </button><br />
            </div>
            <div>
                <img className="img1" src="https://styles.reykjavik.is/assets/illustrations/allirsaman1.png" alt="logo" />
            </div>
            
        </div>
        </div>
    </div>
)
}

export default HeroBlock
