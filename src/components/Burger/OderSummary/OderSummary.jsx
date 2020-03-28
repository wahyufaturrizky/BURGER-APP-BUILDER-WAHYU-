import React from 'react';
import Aux from '../../../hoc/Aux';

const OderSummary = (props) => {
  const ingredientSummary = Object.keys.(props.ingredients).map(igKey => {
    return (
      <li>
        <span style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]});
      </li>
  });
  
  return(
    <Aux>
      <h3>Your order</h3>
      <p>A delicous buger with the following ingredients:</p>
      <ul>

      </ul>
    </Aux>
  )
}

export default OderSummary;