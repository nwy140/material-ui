import React from "react";

function MyName(props) {
  return (
    <div>
      <h1>Hello my name is {props.name}</h1>
      <h1>
        I'm studying <br /> {props.course}
      </h1>
    </div>
  );
}

export default MyName;
