import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import HeaderComponent from './shared/HeaderComponent/HeaderComponent.jsx';
import BaseComponent from './shared/BaseComponent/BaseComponent.jsx';
import OtherPageComponent from './shared/OtherPageComponent/OtherPageComponent.jsx';
import FooterComponent from './shared/FooterComponent/FooterComponent.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={hashHistory}>
                    <Route component={HeaderComponent}>
                        <Route path="/" component={BaseComponent} />
                        <Route path="/otherPage" component={OtherPageComponent} />
                    </Route>
                </Router>
              <FooterComponent />
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));
