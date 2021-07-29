import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../Routes/Home";
import Board from "../Routes/Board";
import Login from "../Routes/Login";
import Sign from "../Routes/Sign";
import Writing from "../Routes/Writing";
import Detail from "../Routes/Detail";
import Update from "../Routes/Update";
import Store from "../Routes/Store";
class Route1 extends Router{
    state={
        islogin:false
    }

    render(){
        return(
    <Router>
        <>
            <Header />
            <Switch> {/* Switch : 한 번에 오직 하나의 Route만 render */}
                <Route path="/" exact component={Home} /> {/*해당 path로 가면 Home 출력 */}
                <Route path="/board" component={Board} />
                <Route path="/store" component={Store} />
                <Route path="/login" component={Login}/>
                <Route path="/sign" component={Sign}/>
                <Route path="/writing" component={Writing}/>
                <Route path="/update/:id" component={Update}/>
                <Route path="/detail/:id"  component={Detail}/>
                {/* <Route path="/community" component={Community} />
                <Route path="/editorial" component={Editorial} />
                <Route path="/about" component={About} /> */}
                <Redirect from="*" to="/" /> {/* 일치하는 Route가 없으면 무조건 Home(/)으로 보냄 */}
            </Switch>
            <Footer />
        </>
    </Router>
        )
    }
}

export default Route1;