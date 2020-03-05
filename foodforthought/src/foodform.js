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

class FoodForm extends React.Component {
  render(){
  return (
    <div style={{backgroundColor: "#e3e3e3"}}>


      <ul>
        {
          <label>Food Form</label>
        }
        {
          <form>
            <label>
              Dietary Restrictions:
              <ReactMultiSelectCheckboxes options={DietaryRestrictions} />
            </label>
          </form>
        }
        {
          <form>
            <label>
              Intolerances:
              <ReactMultiSelectCheckboxes options={Intolerances} />
            </label>

          </form>
        }
        {
          <form>
            <label>
              Search Ingredients:
              <input type="text" name="name" />
            </label>

          </form>
        }
        {
          <input type="submit" value="Submit" />
        }
      </ul>



    </div>
  );
}}

export default FoodForm;
