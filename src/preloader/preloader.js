import { Component } from "react";
import Main from "../main/main";
import Header from "../header/header";
import Footer from "../footer/footer";
import './preloader.css'

window.onload = function () {
    setTimeout(function () {
        document.body.classList.add('loaded')

    }, 200)
}
class Preloader extends Component {
  render() {
    return (
        <div>
            <div class="loading">
                <img src="img/svg/logo.svg" alt="logo"></img>
            </div>
            <div class="preload">
                <div class="wrapper">
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
  }
}
export default Preloader;