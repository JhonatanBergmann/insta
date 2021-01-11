import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../store/actions/posts'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
  Alert
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

/* 
    CFG react-native-image-picker

    -----------  --- AndroidManifest.xml 

    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>

    <application ....
        android:requestLegacyExternalStorage="true" 
    >
    */

const noUser = 'Você precisa estar logado para adicionar imagens, entre agora mesmo para poder publicar algo.'

class AddPhoto extends Component {
  state = {
    image: null,
    comment: '',
  }

  componentDidUpdate = prevProps => {
    if (prevProps.loading && !this.props.loading) {
      this.setState({
        image: null,
        comment: ''
      })
      this.props.navigation.navigate('Feed')
    }
  }

  pickImage = () => {
    if (!this.props.name) {
      Alert.alert('Falha!', noUser)
      return
    }

    ImagePicker.showImagePicker({
      title: 'Escolher Imagem',
      maxHeight: 600,
      maxWidth: 800
    }, res => {
      if (!res.didCancel) {
        this.setState({ image: { uri: res.uri, base64: res.data } })
      }
    })
  }

  save = async () => {
    if (!this.props.name) {
      Alert.alert('Falha!', noUser)
      return
    }

    this.props.onAddPost({
      id: Math.random(),
      nickname: this.props.name,
      email: this.props.email,
      image: this.state.image,
      comments: [{
        nickname: this.props.name,
        comment: this.state.comment
      }]
    })
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#FFF' }}>
        <View style={styles.container}>
          <Image style={styles.imageIcon} source={require('../../assets/imgs/AddPhoto.png')} />
          <View style={styles.imageContainer}>
            <Image source={this.state.image}
              style={styles.image} />
          </View>
          <TouchableOpacity onPress={this.pickImage}
            style={styles.buttom}>
            <Text style={styles.buttomText}>Adicionar foto</Text>
          </TouchableOpacity>
          <TextInput placeholder='Algum comentário para a foto?'
            style={styles.input} value={this.state.comment}
            editable={this.props.name != null}
            onChangeText={comment => this.setState({ comment })} />
          <TouchableOpacity onPress={this.save}
            disabled={this.props.loading}
            style={[styles.buttom, this.props.loading ? styles.buttonDisabled : null]}>
            <Text style={styles.buttomText}>Publicar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#FFF'
  },
  imageIcon: {
    opacity: 0.3,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('10%'),
    height: hp('10%')
  },
  imageContainer: {
    width: '90%',
    height: Dimensions.get('window').width / 2,
    backgroundColor: '#EEE',
    marginTop: 30
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width / 2,
    resizeMode: 'center'
  },
  buttom: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: wp('90%'),
    height: wp('15%'),
    padding: 10,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 5,
    opacity: 0.9
  },
  buttomText: {
    fontSize: hp('2.5%'),
    color: '#545454'
  },
  input: {
    marginTop: 20,
    width: '90%',
    borderWidth: 0.2,
    borderColor: '#D6D6D6',
    textAlign: 'center',
    height: wp('15%')
  },
  buttonDisable: {
    backgroundColor: '#AAA'
  }
})

const mapStateToProps = ({ user, posts }) => {
  return {
    email: user.email,
    name: user.name,
    loading: posts.isUploading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => dispatch(addPost(post))
  }
}

// export default AddPhoto
export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)