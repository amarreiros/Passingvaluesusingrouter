import { useState } from "react";

function ItemComponent(props) {
  const [valueItem, setValue] = useState(props.location.value2Show.value);
  const updateInputValue = (e) => setValue(e.target.value);
  let saveClickHandler = () => {
    props.location.value2Show.value = valueItem;
    props.history.push("./");
  };
  return (
    <div>
      <h1>Item</h1>
      <p>{props.location.value2Show.name}</p>
      <p>{props.location.value2Show.date}</p>
      <p>
        <input
          type="text"
          value={valueItem}
          onChange={updateInputValue}
        ></input>
      </p>
      <input type="button" value="Save" onClick={saveClickHandler}></input>
    </div>
  );
}

export default ItemComponent;
