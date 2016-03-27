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


export default class Menu extends Component {
  
  onTap(e) {
    this.props.setScene.call();
  }
  
  render() {
    return (
      <View style={styles.menuContainer} onStartShouldSetResponder={(evt) => true} onResponderRelease={this.onTap.bind(this)}>
        <Image source={require('./assets/menu.png')} />
      </View>
    )
  }
}



const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
  

