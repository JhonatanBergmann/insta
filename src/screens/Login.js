import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/user'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

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
            <View style={styles.container}>
                <TextInput placeholder='Email' style={styles.input}
                    autoFocus={true} keyboardType='email-address'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })} />
                <TextInput placeholder='Senha' style={styles.input}
                    secureTextEntry={true} value={this.state.password}
                    onChangeText={password => this.setState({ password })} />
                <TouchableOpacity onPress={this.login} style={styles.buttom}>
                    <Text style={styles.buttomText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Register')
                }} style={styles.buttom}>
                    <Text style={styles.buttomText}>Criar nova conta</Text>
                </TouchableOpacity>
            </View>
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
        marginTop: 20,
        padding: 10,
        backgroundColor: '#FAFAFA',
        borderWidth: 1,
        borderColor: '#D6D6D6',
        borderRadius: 5
    },
    buttomText: {
        fontSize: 20,
        color: '#545454'
    },
    input: {
        marginTop: 10,
        width: '90%',
        backgroundColor: '#FAFAFA',
        height: 40,
        borderWidth: 1,
        borderColor: '#D6D6D6',
        paddingLeft: 15,
        borderRadius: 5
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