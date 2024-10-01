import { Component } from "react";
import MainHeader from "./main-head/main-head";
import MainColumns from "./main-columns/main-columns";

class MainPage extends Component{
    render(){
        return(
            <main class="page">
                <MainHeader></MainHeader>
                <MainColumns></MainColumns>
            </main>
        )
    }
}

export default MainPage