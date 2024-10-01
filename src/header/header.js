
import { Component } from "react";
import './header.css'

class Header extends Component {
  render() {
    return (
      <header id="top" class="header">
            <div class="header__top top-header">
                <div class="top-header__container">
                    <div class="top-header__welcome">
                        <p class="lng-welcome">
                            Welcome to our online shop
                        </p>
                    </div>
                    <div class="top-header__event">
                        <button class="lng-theme" id="theme-button">Switch theme</button>
                        <span></span>
                        <div class="top-header__select">
                            <select class="header-selct">
                                <option value="en" selected>English</option>
                                <option value="ru">Русский</option>
                            </select>
                        </div>
                        <span></span>
                        <div class="top-header__exits">
                            <a href="authorization.html" class="top-header__in lng-Login">Log in</a>
                            <a class="lng-or"> or </a>
                            <a href="authorization.html" class="top-header__up lng-Signup">Sign up</a>
                        </div>
                        <div class="top-header__exits2 hidden">
                            <button class="top-header__in"><a href="profile.html" class="lng-profile">Profile</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
  }
}
export default Header;