import React, { Component } from 'react';
import Header from '../layout/header.js';
import Footer from '../layout/footer.js';
import '../App.css';


class Home extends Component {
  render() {
    return (
      <div >
        <div className='homeFirstImg'>
        <Header />

        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
