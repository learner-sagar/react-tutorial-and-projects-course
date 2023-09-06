import React from "react";

const People = ({ people }) => {
  const { image, id, name, age } = people;
  return (
    <article className="person" key={id}>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default People;
