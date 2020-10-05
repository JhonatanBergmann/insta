import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/user'
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ImageBackground, 
    View
} from 'react-native'
import { 
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp 
} from 'react-native-responsive-screen'

import backgroudImage from '../../assets/imgs/Login.jpg'

class Login extends Component {
    state = {
        name: 'Temporario',
        email: '',
        password: ''
    }

    componentDidUpdate = prevProps => {
        if (prevProps.isLoading && !this.props.isLoading) {
            this.props.navigation.navigate('Profile')
        }
    }

    login = () => {
        this.props.onLogin({ ...this.state })
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={backgroudImage}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TextInput placeholder='Email' style={styles.input}
                        autoFocus={true} keyboardType='email-address'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} />
                    <TextInput placeholder='Senha' style={styles.input}
                        secureTextEntry={true} value={this.state.password}
                        onChangeText={password => this.setState({ password })} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={this.login} style={styles.buttom}>
                        <Text style={styles.buttomText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Register')
                    }} style={styles.buttom}>
                        <Text style={styles.buttomText}>Criar conta</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#FFF'
    },
    buttom: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
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
        textAlign: 'center',
        fontSize: hp('2.5%'),
        color: '#545454'
    },
    input: {
        marginTop: 10,
        width: wp('90%'),
        backgroundColor: '#FAFAFA',
        height: wp('15%'),
        borderWidth: 1,
        borderColor: '#D6D6D6',
        paddingLeft: 15,
        borderRadius: 5,
        opacity: 0.6
    }
})

const mapStateToProps = ({ user }) => {
    return {
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

// export default Login
export default connect(mapStateToProps, mapDispatchToProps)(Login)