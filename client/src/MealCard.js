import React from "react";

const MealCard = props => {
  return (
    <>
      <p data-testid="mealName">{props.name}</p>
      <p>{props.course}</p>
      <p>{props.technique}</p>
    </>
  );
};

export default MealCard;
