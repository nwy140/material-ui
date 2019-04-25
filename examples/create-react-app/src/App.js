import React from "react";
import LiveClock from "./components/Clock";
import Links from "./components/Links";
import Searchbar from "./components/Searchbar";
import Card from "./components/Card";
import Date from "./components/Date";

function App() {
  return (
    <div>
      <Card>
        <Date />
        <LiveClock />
        <Links />
        <Searchbar />
      </Card>
    </div>
  );
}

//curly bracket in react is an object
// object is a key, value is whatever that is stored in the object
export default App;

// export must be same as function name
// each function component must have an export
