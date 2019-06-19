import React from 'react';
import io from 'socket.io-client';
import { Image, FlatList } from 'react-native';
import socketUrl from '../../services/socket';

import {
  Container,
  FeedItem,
  FeedItemHeader,
  UserInfo,
  Name,
  Place,
  FeedImage,
  FeedItemFooter,
  Actions,
  Action,
  Like,
  Comment,
  Hashtag,
} from './styles';

import api from '../../services/api';
import more from '../../assets/more.png';
import like from '../../assets/like.png';
import comment from '../../assets/comment.png';
import send from '../../assets/send.png';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
    };
  }

  async componentDidMount() {
    this.registerToSocket();
    const { data } = await api.get('/posts/me');

    this.setState({ feeds: data });
  }

  registerToSocket = () => {
    const socket = io(socketUrl);

    socket.on('post', newPost => {
      this.setState({ feeds: [newPost, ...this.state.feeds] });
    });

    socket.on('like', likedPost => {
      this.setState({
        feeds: this.state.feeds.map(post => (post._id === likedPost._id ? likedPost : post)),
      });
    });
  };
  handleLike = async id => {
    await api.post(`/post/${id}/like`);
  };

  render() {
    const { feeds } = this.state;
    return (
      <Container>
        <FlatList
          data={feeds}
          keyExtractor={post => post._id}
          renderItem={({ item }) => (
            <FeedItem>
              <FeedItemHeader>
                <UserInfo>
                  <Name>{item.author}</Name>
                  <Place>{item.place}</Place>
                </UserInfo>
                <Image source={more} />
              </FeedItemHeader>

              <FeedImage source={{ uri: `http://localhost:3333/files/${item.image}` }} />

              <FeedItemFooter>
                <Actions>
                  <Action onPress={() => this.handleLike(item._id)}>
                    <Image source={like} />
                  </Action>
                  <Action onPress={() => {}}>
                    <Image source={comment} />
                  </Action>
                  <Action onPress={() => {}}>
                    <Image source={send} />
                  </Action>
                </Actions>
                <Like>{item.likes} curtidas</Like>
                <Comment>{item.description}</Comment>
                <Hashtag>{item.hashtags}</Hashtag>
              </FeedItemFooter>
            </FeedItem>
          )}
        />
      </Container>
    );
  }
}
