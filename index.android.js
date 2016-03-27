/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing
} from 'react-native';

import StatusBarAndroid from 'react-native-android-statusbar';

StatusBarAndroid.hideStatusBar();


import Menu from './src/Menu/Menu';
import Setup from './src/Setup/Setup';
import Action from './src/Action/Action';
import Slice from './src/Slice/Slice';

class Ninja extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      scene: 'Action',
      slice: null
    };
  }
  
  setScene(sceneName) {
    this.setState({
      scene: sceneName
    });
  }
  
  setSlice(slice) {
   
    this.setState({
      scene: 'Slice',
      slice: slice
    });
  }
  
  
  render() {
    switch(this.state.scene) {
      case 'Menu':
        return <Menu setScene={this.setScene.bind(this, 'Setup')} />
      case 'Setup':
        return <Setup setScene={this.setScene.bind(this, 'Action')}  />
      case 'Action':
        return <Action setSlice={this.setSlice.bind(this)} />
      case 'Slice':
        return <Slice slice={this.state.slice} />
    }
  }
}


AppRegistry.registerComponent('Ninja', () => Ninja);
