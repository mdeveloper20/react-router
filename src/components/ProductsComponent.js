
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function ProductsComponent() {
  let {id}=useParams();
  let history= useHistory();
  return (
    <div>
      <h2>Here is list of my products:</h2>
      ID: {id}
      <ul>
        <li>Computer</li>
        <li>Laptop</li>
        <li>Mobile Phone</li>
        <li>TV</li>
      </ul>
      
      <button onClick={()=>history.push('/about')}
      >
        Go to home
      </button>


    </div>
  );
}

