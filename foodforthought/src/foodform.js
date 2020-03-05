import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Button } from 'react-bootstrap';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';


import './App.css';

const DietaryRestrictions = [
    ['Gluten Free', 1],
    ['Ketogenic', 2],
    ['Vegetarian', 3],
    ['Lacto-Vegetarian', 4],
    ['Ovo-Vegetarian', 5],
    ['Vegan', 6],
    ['Pescatarian', 7],
    ['Paleo', 8],
    ['Primal', 9],
    ['Whole30', 10],
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
            <div style={{backgroundColor: "white", width:"50%", marginLeft: "25%"}}>
                <form onSubmit = {this.handleSubmit}>
                    <ul>
                        <label>Food Form</label>
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
                <Form>
                <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}>
                        Diet
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control as="select">
                        {DietaryRestrictions.map(type => (
                            <option id={type[1]}>{type[0]}</option>
                        ))}
                    </Form.Control>
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}>
                        Intolerances
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check label="Dairy" id="1"/>
                        <Form.Check label="Egg" id="2"/>
                        <Form.Check label="Gluten" id="3" />
                        <Form.Check label="Grain" />
                        <Form.Check label="Peanut" />
                        <Form.Check label="Seafood" />
                        <Form.Check label="Sesame" />
                        <Form.Check label="Shellfish" />
                        <Form.Check label="Soy" />
                        <Form.Check label="Sulfite" />
                        <Form.Check label="Tree Nut" />
                        <Form.Check label="Wheat" />
                    </Col>
                    </Form.Group>
                </fieldset>
                <div style={{width: "100%;", marginLeft:"48%"}}>
                <Button variant="primary" type="submit" center>
                    Submit
                </Button>
                </div>
                </Form>

            </div>
        );
    }
}



export default foodform;
