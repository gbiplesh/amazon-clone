import React from 'react'
import "./header.css";
import { Search, ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase.js';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }


  return (
    <>
      <div className="header">

        <Link to="/">
          <img alt="logo" className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"> 
          </img>
        </Link>

          <div className="header__search">
            <input className="header__searchInput" type="text" />
            <Search className="header__searchIcon" />
          </div>

          <div className="header__nav" > 
            <Link to={ !user && '/login'}>
              <div
                onClick={handleAuthentication} 
                className="header__option">
                <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                <span className="header__optionLineTwo">Sign { user ?  ' Out' : ' In' }</span>
              </div>
            </Link>
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">Orders</span>
            </div>
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div >

            <Link to="/checkout">
              <div className="header__optionBasket" >
                <ShoppingBasket />
                <span 
                  className="header__optionLineTwo header__basketCount"
                  >
                    {/* ? helps it not to crash when there is nothing in the basket */}
                    {basket?.length} 
                  </span>
              </div>
            </Link>

          </div>
      </div>
    </>
  )
}

export default Header;
