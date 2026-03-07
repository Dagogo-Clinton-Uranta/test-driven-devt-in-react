import React from 'react'

export default function Header (){


    return (
    <div>
        <nav className="py-3 border-bottom navbar navbar-expand navbar-light">

        <a data-testid="logo" href="/#" className="navbar-brand">
        <img src="logo192.png" width="40"  alt="Logo!"/>
        </a>

        <form data-testid="search" className="mr-auto w-50 form-inline">
          <input placeholder="Search homes" type="text" class="w-50 form-control"/>
        </form>

      

        <div data-testid="menu" className="ml-auto text-uppercase navbar-nav">
          <a href="#home" className="nav-link">Become a Host</a>
          <a href="#link" className="nav-link">Help</a>
          <a href="#link" className="nav-link">Sign Up</a>
          <a href="#link" className="nav-link">Login</a>
        </div>

        </nav>


        <div className="m-0 px-4 py-2 container-fluid mw-100 border-bottom container">
            <button type="button" className="text no-wrap mr-4 py-1 btn btn-outline-secondary" data-testid="home-type">Home type </button>
            <button  className="text no-wrap mr-4 py-1 btn btn-outline-secondary" data-testid="dates">Dates</button>
            <button className="text no-wrap mr-4 py-1 btn btn-outline-secondary"  data-testid="guests">Guests </button>
            <button  className="text no-wrap mr-4 py-1 btn btn-outline-secondary" data-testid="price">Price </button>
            <button  className="text no-wrap mr-4 py-1 btn btn-outline-secondary" data-testid="rooms">Rooms</button>
            <button className="text no-wrap mr-4 py-1 btn btn-outline-secondary" data-testid="amenities">Amenities</button>
        </div>

    </div>
    )
}