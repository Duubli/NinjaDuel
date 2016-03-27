
import React, { Component, View, Image } from 'react-native';

export default class AnimatedSprite extends Component {
  
  constructor(props) {
    super(props),
    this.state = {
      currentFrame: 0
    }
    
    this.loop = this.props.loop || false;
    this.currentLoop = 0;
    this.fps = this.props.fps;
    this.now = null;
    this.then = null;
    this.interval = 1000/this.fps;
    this.delta = null;
  }
  
  componentDidMount() {
    this.then = Date.now();
    this.animate();
    
  }
 
  animate() {
    
    if (this.loop === false || this.currentLoop === this.loop) {
      this.props.onComplete.call();
      return;
    }
    
    requestAnimationFrame(this.animate.bind(this));
    this.now = Date.now();
    this.delta = this.now-this.then;
    if (this.delta > this.interval) {
      
      this.then = this.now - (this.delta % this.interval);
      
      let nextFrame = this.state.currentFrame + 1;
      
      if (nextFrame >= this.props.frames.length) {
          nextFrame = 0;
          this.currentLoop += 1;
      }
      this.setState({
        currentFrame: nextFrame
      });
    }
  }
  
  render() {
    return (
      <View style={{width: this.props.width, height: this.props.height, overflow: 'hidden'}}>
        <Image
          source={this.props.sprite}
          style={{
            transform: [{translateX: this.props.frames[this.state.currentFrame] * -this.props.width}]
          }}
        />
        </View>
    );
  }
  
}