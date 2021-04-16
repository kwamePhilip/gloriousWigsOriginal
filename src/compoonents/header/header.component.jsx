import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import './header.component.styles.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';



const Header = ({hidden})=>(
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
        <CartIcon/>


        </div>


        {
            hidden? null:
            <CartDropdown/>}
       
        
    </div>
);

const mapDispatchToProps = createStructuredSelector({hidden: selectCartHidden}); 

export default connect(mapDispatchToProps) (Header);
