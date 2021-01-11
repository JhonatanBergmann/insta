import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../store/actions/user'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import backgroudImage from '../../assets/imgs/Profile.jpg'

class Profile extends Component {
  logout = () => {
    this.props.onLogout() /* ARRUMAR AQUI */
    this.props.navigation.navigate('Login')
  }

  render() {
    const options = { email: this.props.email, secure: true }
    return (
      <ImageBackground style={styles.container} source={backgroudImage}>
        <View style={{ alignItems: 'center' }}>
          <Gravatar style={styles.avatar} options={options} />
          <Text style={styles.nickname}>{this.props.name}</Text>
          <Text style={styles.email}>{this.props.email}</Text>
        </View>
        <TouchableOpacity style={styles.buttom} onPress={this.logout}>
          <Text style={styles.buttomText}>Desconectar</Text>
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginTop: 10
  },
  nickname: {
    marginTop: 10,
    fontSize: hp('4%'),
    color: '#545454',
    fontWeight: 'bold'
  },
  email: {
    fontSize: hp('2%'),
    color: '#545454'
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
  }
})

const mapStateToProps = ({ user }) => {
  return {
    email: user.email,
    name: user.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout())
  }
}

/* export default Profile */
export default connect(mapStateToProps, mapDispatchToProps)(Profile)

