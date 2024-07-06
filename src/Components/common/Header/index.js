import React from 'react'
import './Header.css';
// import { useHistory } from "react-router-dom";


function Header() {
  // const history = useHistory
  // const Addrest = () =>{
  //   history.push('/Addrest')
  // }

  return (
    <div className='max-width '>
      <ul className='icons absolute-center'>
        <li className='not-same'>
          <a className='get-app' href=''>Get App</a>
        </li>
        <li className='same'>
          {/* <button className='add css' onClick={Addrest} href=''>Add Restaurant</button> */}
          <a className='add css' href='/Addrest'>Add Restaurant</a>
        </li>
        <li className='same'>
          <a className='login css' href=''>Login</a>
        </li>
        <li className='same'>
          <a className='sign-up css' href=''>Sign Up</a>
        </li>
      </ul>
      <div className="max-width header">
        <img src="https://logosmarcas.net/wp-content/uploads/2020/11/Zomato-Logo.png"
          alt="Logo"
          className='header-logo'
        />
        <div className='header-right'>
          <div className='header-location-search-container'>
            <div className='location-wrapper'>
              <div className='location-icon-name'>
                <i className='fi fi-rr-marker absolute-center location-icon'></i>
                <div>
                  <input placeholder='Delhi' className='search-input' />
                </div>
              </div>
              <i className='fi fi-rr-caret-down absolute-center'></i>
            </div>
            <div className='location-search-seperator'></div>
            <div className='header-search-bar'>
              <i className='fi fi-rr-search absolute-center search-icon'></i>
              <input placeholder='Search for Restaurant, cusine or a dish'
                className='search-input'
              />
            </div>
          </div>
          <div className='profile-wrapper'>
            <img
              src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
              className="header-profile-image"
              alt="Profile"
            />
            <span className='header-user-name'>Profile</span>
            <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
