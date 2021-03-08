import React from 'react';
import { Link } from 'react-router-dom';
import './header.component.styles.scss'



const Header = ()=>(
    <div className='header' >
        <Link className='logo-container' to='/'> G W
        
        </Link>
        <div className='options'>
        <Link className='option' to='/frontalWigs' >
            Frontal Wigs
        </Link>
        <Link className='option' to='/fullLaceWigs' >
            Full Lace Wigs
        </Link>
        <Link className='option' to='/laceFrontalWigs' >
            Lace Frontal Wigs
        </Link>


        </div>
       
        
    </div>
)

export default Header;
