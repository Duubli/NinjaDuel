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


import AnimatedSprite from '../AnimatedSprite';


export default class Setup extends Component {
  
  onComplete(e) {
    this.props.setScene.call();
  }
  
  render() {
    return (
      <View style={styles.menuContainer}>
        <AnimatedSprite
          width={640}
          fps={2}
          frames={[0,1,2,3]}
          sprite={require('./assets/Setup.png')}
          loop={1}
          onComplete={this.onComplete.bind(this)}
        />
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
  

