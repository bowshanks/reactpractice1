import React from 'react';

class FooterComponent extends React.Component {
  render () {
    var footerContainter = {
     width: '100%',
     height: 50,
     background: 'red',
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'space-between',
     paddingLeft: 20,
     paddingRight: 20,
   };
    return (
      <div style={footerContainter}>
        <h2>Footer</h2>
      </div>
    )
  };
}

export default FooterComponent
