import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent(){
    console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google"><div id="gmail" className="right"></div>Sign-In with Google </a></li>
        );
      default:
        return (
          <li><a href="/api/logout">Logout</a></li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/dashboard' : '/'}
            className="left brand-logo">
            <div id="Logo" className="right"></div>
          </Link>
          <ul id="" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }){
  return { auth };
}
export default connect(mapStateToProps)(Header);