import React from 'react';
import Link from 'gatsby';

function SinglePizza({ pizza }) {
  return (
    <div>
      <Link to={`/pizza/${pizza.slug.current}`}>
          
                     <h2>{pizza.name}</h2>
      </Link>
    </div>
  );
}

export default function PizzaFunction({ pizzas }) {
  return (
    <div>
      {pizzas.map((pizza) => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}
