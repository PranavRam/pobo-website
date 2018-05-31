import React from 'react'
import Link from 'gatsby-link'

// import logo from '../assets/images/logo.svg';
import logo from '../assets/images/pobo_col.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Socializing Simplified</h1>
        <p className="coming-soon-p">Coming Soon!</p>
    </header>
)

export default Header
