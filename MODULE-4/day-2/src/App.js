import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar'
import MyFooter from './components/MyFooter'

class App extends React.Component {
  render() {


   return (
    <>
      <div className="App">
        <NavBar />
        <Home />
        <MyFooter />
      </div>
    </>
   );
  }
}

export default App;
