import React from 'react';
import ImagePicker from 'react-native-image-picker';

import api from '../../services/api';

import {
  Container,
  SelectButton,
  SelectButtonText,
  Input,
  ShareButton,
  ShareButtonText,
  Preview,
} from './styles';

export default class NewFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      place: '',
      description: '',
      hashtags: '',
      preview: null,
      image: null,
    };
  }

  static navigationOptions = {
    headerTitle: 'nova publicacao',
  };

  handleSubmit = async () => {
    const newData = new FormData();

    newData.append('image', this.state.image);
    newData.append('author', this.state.author);
    newData.append('place', this.state.place);
    newData.append('description', this.state.description);
    newData.append('hashtags', this.state.hashtags);

    await api.post('/post/me', newData);

    this.props.navigation.navigate('Feeds');
  };

  handleSelectImage = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Selecionar Imagem',
      },
      upload => {
        if (upload.error) {
          console.log('error...');
        } else if (upload.didCancel) {
          console.log('Used canceled');
        } else {
          const preview = {
            uri: `data:image/jpeg;base64,${upload.data}`,
          };

          let prefix;
          let ext;

          if (upload.fileName) {
            [prefix, ext] = upload.fileName.split('.');
            ext = ext.toLocaleLowerCase() === 'heic' ? 'jpg' : ext;
          } else {
            prefix = new Date().getTime();
            ext = 'jpg';
          }

          const image = {
            uri: upload.uri,
            type: upload,
            name: `${prefix}.${ext}`,
          };

          this.setState({ preview, image });
        }
      },
    );
  };
  render() {
    return (
      <Container>
        <SelectButton onPress={this.handleSelectImage}>
          <SelectButtonText>Selelcionar Imagem</SelectButtonText>
        </SelectButton>
        {this.state.preview && <Preview source={this.state.preview} />}
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome do autor"
          placeholderTextColor="#999"
          value={this.state.author}
          onChangeText={author => this.setState({ author })}
        />

        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Local da foto"
          placeholderTextColor="#999"
          value={this.state.place}
          onChangeText={place => this.setState({ place })}
        />
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Descricao"
          placeholderTextColor="#999"
          value={this.state.description}
          onChangeText={description => this.setState({ description })}
        />
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="HashTags"
          placeholderTextColor="#999"
          value={this.state.hashtags}
          onChangeText={hashtags => this.setState({ hashtags })}
        />

        <ShareButton onPress={this.handleSubmit}>
          <ShareButtonText>Compartilhar</ShareButtonText>
        </ShareButton>
      </Container>
    );
  }
}
