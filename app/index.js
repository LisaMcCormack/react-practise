import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// you can render different environments eg IOS environment
// so that is why you import ReactDOM separate from React

//Components have three aspects - it manages state, lifecycle (eg fetching
//data from an api) and UI


class App extends React.Component {
  render() {
    return (<div>Hello Lisa</div>)  // this is jsx, babel converts it into js
  }
}

ReactDOM.render(
  // this takes two arguments - the React Element and where
  //to render the Element to
  <App />, //the react element
  document.getElementById('app')
)
