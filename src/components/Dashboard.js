import React, { Component } from 'react';
import x from '../images/delete_icon.png';



class Dashboard extends Component {
  render() {
    return (
      <div>
          <section className="main-content">
            <button className="new-prop light-green">Add new property</button>
            <div>
                List properties with "desired rent" greater than: $ <input className="price-input" placeholder="0" />
                <button className=" filter light-green">Filter</button>
                <button className="reset dark-green">Reset</button>
            </div>
            <hr/>
            <div>
                <strong>Home Listings</strong>
            </div>
          </section>
      </div>
    );
  }
}

export default Dashboard;
