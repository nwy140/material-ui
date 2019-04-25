import React from "react";
import "./styles.css";

class Searchbar extends React.Component {
  state = {
    searchInput: "Search: "
  };

  //search button component
  SearchButton() {
    return <a> Search...</a>;
  }

  updateText(event) {
    var newValue = event.target.value;
    this.setState({
      searchInput: newValue
    });
  }
  render() {
    var url = "https://duckduckgo.com/?q=" + this.state.searchInput;

    return (
      <div>
        <input
          // className="SearchInput"
          value={this.state.searchInput}
          onChange={this.updateText.bind(this)} //real time onChange searchbar text display
          //State is a very special feature in reactJS
        />

        <a href={url}>Search</a>
      </div>
    );
  } // necessary to be declared in a react class
  // render function is your main component
  //in a nutshell
}

export default Searchbar;
