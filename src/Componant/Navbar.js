/** @format */

import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    let { toggleMode, mode, text } = this.props;
    return (
      <div className='text-light'>
        {}
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
          <a className='navbar-brand' href='/'>
            NewMonkey
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='/'>
                  Home <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/about'>
                  About
                </a>
              </li>
            </ul>
          </div>
          <form className={`d-flex bd-`} role='search'>
            <button
              className={`btn bg-${text} btn-outline-success`}
              type='submit'
              onClick={toggleMode}>
              {text.toUpperCase()} MODE
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default Navbar;
