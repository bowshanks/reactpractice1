import React from 'react';

// require('./AwesomeComponent.css');
class OtherPageComponent extends React.Component {
     render() {
       var otherPageContainter = {
        width: '100%',
        height: 'calc(100vh - 150px)'
      };
        return (
        <div style={otherPageContainter}>
            <h2>OtherPage Component</h2>
        </div>
        );
    }
}

export default OtherPageComponent
