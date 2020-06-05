import React from 'react'; 
import Container from 'react-bootstrap/Container';


import UserForm from './Components/UserForm'
import Footer from './Components/Footer.js'


import './App.css';

function App() {
  return (
      <div className="Main">
          <UserForm />
          <Footer />
      </div>
    );
}

export default App;
