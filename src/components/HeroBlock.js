import React from 'react'

const HeroBlock = () => {
    const btnPrim = () => {
        window.open("https://reykjavik.is/");
    }
    const btnTert = () => {
        window.open("https://medium.com/javascript-scene/the-missing-introduction-");
    }

    return (
        <div>
            <h1>Stuðningsþjónusta við fatlað fólk</h1>
            <img src="https://styles.reykjavik.is/assets/illustrations/allirsaman1.png" alt="logo" />
                <p>Stuðningsþjónusta mætir fötluðu fólki á þeim stað sem það er í lífinu og fer fram þar sem best hentar. 
                Fólk fær stuðning við að útfæra þjónustuna þannig að hún styðji það við að lifa sjálfstæðu lífi, fást við 
                dagleg verkefni og efla þátttöku sína í samfélaginu.
                Bókaðu símtal og við finnum út úr því saman hvernig þjónusta hentar þér.
                </p>
                
                <button onClick={btnPrim}>
                    Bóka símatal
                </button>
                <button onClick={btnTert}>
                    Spurt og svarað
                </button>
        </div>
    )
}

export default HeroBlock
