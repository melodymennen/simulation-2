import React, { Component } from 'react';
import x from '../images/delete_icon.png';
import Listing from '../components/Listing';



class Dashboard extends Component {
    // Simulation-2 36F
  render() {
    return (
      <div>
          <section className="main-content">
            <div className="above-line">
                <button className="new-prop light-green">Add new property</button> <br />
                List properties with "desired rent" greater than: $ <input className="price-input" placeholder="0" />
                <button className=" filter light-green">Filter</button>
                <button className="reset dark-green">Reset</button>
            </div>
            <hr/>
            <div>
                <strong>Home Listings</strong>
                <Listing />
            </div>
          </section>
      </div>
    );
  }
}

export default Dashboard;
