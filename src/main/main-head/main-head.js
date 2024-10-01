import { Component } from "react";
import './main-head.css'

class MainHeader extends Component {
  render() {
    return (
        <div class="header__main main-header">
            <div class="main-header__container">
                <a href="#" class="main-header__logo">
                    <img src="img/svg/logo.svg" alt="logo"></img>
                    <div class="main-header__logo-text logo-text">
                        Furniking
                    </div>
                </a>
                <form class="main-header__form">
                    <input type="text" class="main-header__input lng-input" placeholder=" Search here"></input>
                    <select class="main-header__select">
                        <option selected="selected" class="lng-categories">Categories</option>
                        <option class="lng-all">All</option>
                    </select>
                    <button class="main-header__btn">
                         <img src="img/svg/search.svg" alt="search"></img>
                    </button>
                </form>
                <div class="main-header__actions ">
                    <a href="#" class="main-header__action">
                        <img src="img/svg/bag.svg" alt="bag"></img>
                        <span>4</span>
                    </a>
                    <a href="#" class="main-header__action">
                        <img src="img/svg/call.svg" alt="call"></img>
                    </a>
                </div>
            </div>
        </div>
    );
  }
}
export default MainHeader;