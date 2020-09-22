import React from 'react';
import { Route } from 'react-router-dom';
import { screen01, screen02, screen03 } from "./screens";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={screen01} />
        <Route exact path="/screen02" component={screen02} />
        <Route exact path="/screen03" component={screen03} />
      </div>
    )
  }
}

export default App;