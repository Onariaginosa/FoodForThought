import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import FoodForm from "./foodform.js";
import Recipe from "./Recipe";
import RecipeList from "./Components/RecipeList";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            recpieList: null,
            formInfo: null,
            currentRecipe: null,
        }
    }

    onSubmitFoodForm(formInput) {
        this.setState({
            formInfo: null
        })
    }

    onClickRecipe(recipeId) {
        this.setState({
            currentRecipe: null
            }
        )
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    < Navbar style = {{backgroundColor: 'white', color:'black'}}>
                        <Navbar.Brand > Food For Thought < /Navbar.Brand>
                        < Navbar.Toggle / >
                    < /Navbar>
                < /div>
                <div className = "row" >
                    <FoodForm submitForm={this.onSubmitFoodForm.bind(this)} />
                </div>
                <div className ="row">
                    <div className = "recipeList col">
                        <RecipeList />
                    </div>

                    <div className = "recipe col">
                        <Router>
                            <Switch>
                                <Route exact path="/" component={Recipe}></Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            < /div>
    )
        ;
    }
}

export default App;
