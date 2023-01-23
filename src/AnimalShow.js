import "./AnimalShow.css";
import { useState } from "react"
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = {        // In an object properties are normally listed as bird: bird etc.
                        // but since we have the name imported at the top, we can just use a comma for the same result.
  bird,                 // bird comma creates a key and assigns a value at the same time like bird: bird;
  cat,
  cow,
  dog,
  gator,
  horse
};


function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img
      className="heart" 
      alt="heart" 
      src={heart} 
      style={{ width: 10 + 10 * clicks + "px" }}                            // One set of curly braces to say we are writing some javascript 
                                            // and another inside to show we are passing an object, inside this object we can add the style s for the heart(css)
    />                                      
    </div>
  );   
}

export default AnimalShow;
