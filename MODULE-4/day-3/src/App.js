import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge'
import BookList from './components/BookList'

class App extends React.Component {


  render() {

    return (
      <div>
        <WarningSign text="WarningSign Text Content" />
        <MyBadge text="MyBadge Text Content" style={{ color: 'red' }} />
        <BookList />
      </div>
      
    );
  }
}

export default App;
