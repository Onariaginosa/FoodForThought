import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Button } from 'react-bootstrap';
// import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';


import './App.css';

// let ingredientData = [];
// let dietaryRestrictionData = "";
// let intoleranceData = [];

const FoodForm = () =>  {
    const [formData, setFormData] = useState();
    const [intolerances, setIntolerances] = useState([]);
    const [justIntolerances, setJustIntolerances] = useState('');
    const [ingredients, setIngredients] = useState();
    const [error, setError] = useState(null)
    const [diet, setDiet] = useState();

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
    
    useEffect(() => {
        let intolerances = [
            { name: "Dairy", id: 1 },
            { name: "Egg", id: 2 },
            { name: "Gluten", id: 3 },
            { name: "Grain", id: 4 },
            { name: "Peanut", id: 5 },
            { name: "Seafood", id: 6 },
            { name: "Sesame", id: 7 },
            { name: "Shellfish", id: 8 },
            { name: "Soy", id: 9 },
            { name: "Sulfite", id: 10},
            { name: "Tree Nut", id: 11},
            { name: "Wheat", id: 12 },
        ];

        setIntolerances(
            intolerances.map(data => {
                return {
                    select: false,
                    id: data.id,
                    name: data.name
                };
            })
        );

    }, []);

    

    const handleSubmit = async event => {
        event.preventDefault();
        setError(null);
        try {
            const limits = intolerances.reduce((a,o) => o.select ? a.concat(o.name) : a, []);
            setJustIntolerances(limits);
        } catch (error) {
            setError('Sorry, but something went wrong');
        }
    }
    // const limits =  intolerances.reduce((a,o) => o.select ? a.concat(o.name) : a, []);
    

    const handleSearchChange = event => setIngredients(event.target.value);
    const handleDietChange = event => setDiet(event.target.value);

    const handleSelect = (event) => {
        console.log("HERE!!!");
        // setChecked({...intolerances, [event.target.name]: event.target.value })
        console.log("checkedItems: ", intolerances);
        console.log("EVENT TARGET = ", [event.target.name]);
    }
    return (
        <div style={{backgroundColor: "#6FA86F", width:"50%", marginLeft: "25%", padding:"20px", borderRadius:"20px", color:"white"}}> 
            <Form onSubmit={handleSubmit}>
            <Form.Group as={Row}>
                <Form.Label as="legend" column sm={3}>
                    Diet
                </Form.Label>                    
                <Col sm={9}>
                <Form.Control value={diet} as="select" id="options" onChange={handleDietChange}>
                    {DietaryRestrictions.map(type => (
                        <option key={type[1]}>{type[0]}</option>
                    ))}
                </Form.Control>
                </Col>
            </Form.Group>
            <fieldset>
                <Form.Group as={Row}>
                <Form.Label as="legend" column sm={3}>
                    Intolerances
                </Form.Label>
                <Col sm={9}>
                    {intolerances.map(type => (
                        <Form.Check 
                            checked={intolerances.select} 
                            type="checkbox" 
                            label={type.name} 
                            key={type.id} 
                            onChange={event => {
                                let checked = event.target.checked;
                                setIntolerances(
                                    intolerances.map(d => {
                                        if (type.id === d.id) {
                                            d.select = checked;
                                        }
                                        return d;
                                    })
                                )
                            }} />
                    ))}
                </Col>
                </Form.Group>
            </fieldset>
            <Form.Group as={Row}>
                <Form.Label as="legend" column sm={3}>
                    Search Ingredients
                </Form.Label>
                <Col sm={9}>
                <Form.Control value={ingredients} type="text" placeholder="tomato, spinach ..." onChange = {handleSearchChange} />
                </Col>
            </Form.Group>
            <div style={{display:"flex", justifyContent:"center"}}>
            <Button variant="dark" type="submit">
                Generate Recipes
            </Button>
            </div>
            </Form>
            <p>{ingredients}</p>
            <p>{diet}</p>
        </div>
    );
}

export default FoodForm;
