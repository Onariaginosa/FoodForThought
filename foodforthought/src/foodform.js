import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';


import './App.css';

const DietaryRestrictions = [
  { label: 'Dietary Restriction 1', value: 1},
  { label: 'Dietary Restriction 2', value: 2},
];

const Intolerances = [
  { label: 'Intolerance 1', value: 1},
  { label: 'Intolerance 2', value: 2},
];

let ingredientData = [];
let dietaryRestrictionData = "";
let intoleranceData = [];

class foodform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: null
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        ingredientData += event.target.value;
        console.log(ingredientData);

    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        })
    }


    render() {
        const {ingredients} = this.state;
        return (
            <div style={{backgroundColor: "#e3e3e3"}}> 
                <form onSubmit = {this.handleSubmit}>
                    <ul> 
                        <label>Food Form</label>
                    </ul>
        
                    <ul>     
                        <label>
                        Dietary Restriction:
                        <ReactMultiSelectCheckboxes options={DietaryRestrictions} name = "dietaryRestrictions"/>
                        </label>
                    </ul> 
        
                    <ul>      
                        <label>
                        Intolerances:
                        <ReactMultiSelectCheckboxes options={Intolerances} name = "intolerances"/>
                        </label>
                    </ul>
        
                    <ul>     
                        <label>
                        Search Ingredients:<br/>
                        <input type="text" name="ingredients" onChange = {this.handleChange}/>
                        </label>
                    </ul>
        
                    <ul>
                        <input type="submit" name = "submit" value="Submit" />
                    </ul>
                </form>
                <p>{ingredients}</p>
        
        
            </div>
        );
    }
}



export default foodform;