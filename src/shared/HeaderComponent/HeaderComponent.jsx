import React from 'react';
import {Link} from 'react-router';

class HeaderComponent extends React.Component {
     render() {
       var headerContainter = {
        width: '100%',
        height: 100,
        background: 'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
      };
      var headerItem = {
        width: 50,
        height: 50,
        border: '1px solid white'
      }
      return (
        <div>
          <div style={headerContainter}>
            <div style={headerItem}>menu
              <Link to="/">
                  <p>base</p>
              </Link>
              <Link to="/otherPage">
                  <p>other page</p>
              </Link>
            </div>
            <div style={headerItem}>title</div>
            <div style={headerItem}>icon</div>
          </div>
          <div>
            {this.props.children}
          </div>
        </div>
        );
    }
}

export default HeaderComponent
