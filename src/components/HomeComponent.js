
import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeComponent() {
  return (
    <div>
        <h2>Welcome to my website</h2>

        <ul>
            <li><Link to='/about'>About us</Link></li>
            <li><Link to='/products'>My products</Link></li>

        </ul>


    </div>
  );
}

