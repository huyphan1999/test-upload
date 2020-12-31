/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import initStore from './store/store.config';


import { Provider } from 'react-redux';
import NavigationService from './navigation/NavigationService';
import Home from './containers/Home/Home';
import Navigation from './navigation/index';



const store = initStore();


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Navigation ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
      </Provider>
    );
  }
}

export default App;

 /* constructor(props) {
     super(props)
 
     this.state = {
       branch: []
     }
   }
 
   <MultipleChoice options={DATA} onSelection={(selectedOptions)=>this.onSelectBracnh(selectedOptions)} />
 
   onSelectBracnh = (selectedOptions) => {
     this.setState({ branch: [...selectedOptions] })
   }
   */