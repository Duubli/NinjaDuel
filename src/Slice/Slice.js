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


function getAngle(p1, p2) {
  return Math.atan2(p2.y - p1.y, p2.x - p1.x);
}

function getDistance(p1, p2) {
  return Math.sqrt((p2.x-=p1.x)*p2.x + (p2.y-=p1.y)*p2.y);
}


export default class Slice extends Component {
  
  constructor(props) {
    super(props);
  }
 
  render() {
      
    const angle = getAngle(
      this.props.slice.start,
      this.props.slice.end
    );
    
    const degrees = angle * 180 / Math.PI;
    
    const distance = getDistance(
      this.props.slice.start,
      this.props.slice.end
    );
    
    const top = this.props.slice.start.y + Math.sin(angle)*(distance/2);
    const left = this.props.slice.start.x + Math.cos(degrees)*(distance/2);
    
    return (
      <View 
        style={styles.container} 
       >
        <View
          style={{
            position: 'absolute',
            top: top,
            left: left,
            width: distance,
            height: 2,
            transform: [{
              rotate: `${degrees}deg`
            }],
            backgroundColor: '#fff'
          }}
        />
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  }
});
  

