import React from 'react';
import Feed from '../../components/Feed';
import { Image, Text, TouchableOpacity } from 'react-native';
import camera from '../../assets/camera.png';

export default class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = ({ navigation }) => ({
    title: 'New',
    headerRight: (
      <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('New')}>
        <Image source={camera} />
      </TouchableOpacity>
    ),
  });

  render() {
    return <Feed />;
  }
}
