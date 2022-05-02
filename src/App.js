import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";

class App extends React.Component
{
  render ()
  {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
