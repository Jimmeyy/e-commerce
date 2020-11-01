import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'static/routes';
import {
    BiSearch,
    BiUser,
    BiShoppingBag,
    BiMenuAltRight,
} from 'react-icons/bi';
import { registerValidate } from 'services';

const Header = () => {
    const { home, login, register } = routes;

    return (
        <header className="header">
            <div className="header-bar">
                <ul className="header-nav header-nav-small">
                    <li>
                        <Link>My account</Link>
                    </li>
                    <li>
                        <Link>Checkout</Link>
                    </li>
                    <li>
                        <Link>Cart</Link>
                    </li>
                </ul>
                <div className="header-auth">
                    <Link to={login.path} className="header-auth-login">Login</Link>
                    <span className="header-auth-divider">|</span>
                    <Link to={register.path} className="header-auth-register">Register</Link>
                </div>
            </div>
            <div className="header-inner">
                <div className="header-logo">
                    <Link to={home.path}>Logo</Link>
                </div>
                <ul className="header-nav">
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>News</Link>
                    </li>
                    <li>
                        <Link>Men</Link>
                    </li>
                    <li>
                        <Link>Women</Link>
                    </li>
                </ul>
                <ul className="header-buttons">
                    <li>
                        <button className="btn btn-icon">
                            <BiSearch className="icon icon-black" />
                        </button>
                    </li>
                    <li>
                        <Link className="btn btn-icon">
                            <BiUser className="icon icon-black" />
                        </Link>
                    </li>
                    <li>
                        <Link className="btn btn-icon btn-margin-left">
                            <BiShoppingBag className="icon icon-black" />
                        </Link>
                    </li>
                </ul>
                <div className="header-mobile">
                    <button className="btn btn-icon btn-no-margin ">
                        <BiMenuAltRight className="icon icon-black" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
