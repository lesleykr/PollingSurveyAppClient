import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const currentYear = new Date().getFullYear();
        return ( 
            <footer className="footer">
  <div className="content has-text-centered">
    <p>
    @{currentYear} ShiTech, Inc
    </p>
  </div>
</footer>
         );
    }
}
 
export default Footer;