import React, { useState } from "react";
import Ikona from "../../Assets/Icon.png";
import Button from "../Button/Button";

function Box({ category }) {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const firstFiveCategories = category.slice(0, 5);
  const remainingCategories = category.slice(5);

  const displayCategories = showAll ? category : firstFiveCategories;

  return (
    <div className="box-wrapper">
      {displayCategories.map((cat, index) => (
        <div className="box1" key={index}>
          <div className="background-image">
            <div className="circle">
              <img className="icon" src={Ikona} alt="Ikona" />
            </div>
            <div className="text">{cat}</div>
          </div>
        </div>
      ))}

      {category.length > 5 && !showAll && (
        <div className="button-box">
          <Button onClick={toggleShowAll}> Show More</Button>
        </div>
      )}
      {showAll && (
        <div className="box-wrapper">
          {remainingCategories.map((cat, index) => (
            <div className="box1" key={index}>
              <div className="background-image">
                <div className="circle">
                  <img className="icon" src={Ikona} alt="Ikona" />
                </div>
                <div className="text">{cat}</div>
              </div>
            </div>
          ))}
          {showAll && (
            <div className="button-box">
              <Button onClick={toggleShowAll}> Show Less</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Box;
