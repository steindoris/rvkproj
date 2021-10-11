import React from 'react'
import Hamburger from 'hamburger-react'

const Header = () => {
    const mystyle = {
        color: "black",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        marginBottom: "-53px",
        fontFamily: "Arial",
        textAlign: 'left',
      };
      const mystyle2 = {
        float: "right",
      };

    return (
        <div>
            <h1 style={mystyle} >RVK</h1>
            <div style={mystyle2}>
                <Hamburger />
            </div>
            
        </div>
    )
}

export default Header
