import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearch, BiUser, BiShoppingBag } from 'react-icons/bi';

const Header = () => {
    return (
        <header className="header">
            <div className="header-inner">
                <div className="header-logo">
                    <Link>Logo</Link>
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
                            <BiSearch className="icon icon-white" />
                        </button>
                    </li>
                    <li>
                        <Link className="btn btn-icon">
                            <BiUser className="icon icon-white" />
                        </Link>
                    </li>
                    <li>
                        <Link className="btn btn-icon btn-margin-left">
                            <BiShoppingBag className="icon icon-white" />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
