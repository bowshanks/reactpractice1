import React from 'react';

// require('./AwesomeComponent.css');
class BaseComponent extends React.Component {
     render() {
       var baseContainter = {
        width: '100%',
        height: 'calc(100vh - 150px)'
      };
        return (
        <div style={baseContainter}>
            <h2>Base Component</h2>
        </div>
        );
    }
}

export default BaseComponent
