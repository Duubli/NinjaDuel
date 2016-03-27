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


export default class Action extends Component {
  
  constructor(props) {
    super(props);
    
    this.start = null;
    
  }
  
  onTouchMove(e) {
    if (this.start === null) {
      this.start = {
        x: e.nativeEvent.pageX,
        y: e.nativeEvent.pageY,
        time: new Date()
      }
    }
  }
  
  onTouchEnd(e) {
    const end = {
      x: e.nativeEvent.pageX,
      y: e.nativeEvent.pageY,
      time: new Date()
    }
   
    this.props.setSlice({
      start: this.start,
      end: end
    })
  }
 
  render() {
    return (
      <View 
        style={styles.menuContainer} 
        onStartShouldSetResponder={(evt) => true}
        onResponderMove={this.onTouchMove.bind(this)}
        onResponderRelease={this.onTouchEnd.bind(this)}
       >
        <Image source={require('./assets/Action.png')} />
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
  

