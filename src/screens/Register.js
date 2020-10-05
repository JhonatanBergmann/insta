import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ImageBackground
} from 'react-native'
import { connect } from 'react-redux'
import { createUser } from '../store/actions/user'
import { 
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp 
} from 'react-native-responsive-screen'

import backgroudImage from '../../assets/imgs/Register.jpg'

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    componentDidUpdate = prevProps => {
        if (prevProps.isLoading && !this.props.isLoading) {
            this.setState({
                name: '',
                email: '',
                password: ''
            })
            this.props.navigation.navigate('Feed') // our Profile
        }
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={backgroudImage} >
                <TextInput placeholder='Nome' style={styles.input}
                    autoFocus={true} value={this.state.name}
                    onChangeText={name => this.setState({ name })} />
                <TextInput placeholder='Email' style={styles.input}
                    keyboardType='email-address' value={this.state.email}
                    onChangeText={email => this.setState({ email })} />
                <TextInput placeholder='Senha' style={styles.input}
                    secureTextEntry={true} value={this.state.password}
                    onChangeText={password => this.setState({ password })} />
                <TouchableOpacity 
                    onPress={() => { this.props.onCreateUser(this.state) }} 
                    style={styles.buttom}>
                    <Text style={styles.buttomText}>Salvar</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
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
        marginTop: 10,
        width: '90%',
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
        onCreateUser: user => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
// export default Register