import React, { Component } from 'react';

class TopNav extends Component {
    render() {
        return (
            <nav className="top-nav">
                <ul className="top-nav__list">
                    <li className="top-nav__list__item"><a href="#" class="top-nav__list__item__link">Home</a></li>
                    <li className="top-nav__list__item"><a href="#" class="top-nav__list__item__link">Create Log</a></li>
                    <li className="top-nav__list__item"><a href="#" class="top-nav__list__item__link">Past Logs</a></li>
                </ul>
            </nav>
        )
    }
}

export default TopNav;