
import React, { Component } from 'react-native';
import AnimatedSprite from './AnimatedSprite';

export default class Bunny extends Component {
  render() {
    return (
      <AnimatedSprite
        sprite={require('../assets/bunny.png')}
        width={64}
        height={64}
        fps={12}
        frames={[7,8,9,10,11,12,13,14,15,16]}
       />
    )
  } 
}