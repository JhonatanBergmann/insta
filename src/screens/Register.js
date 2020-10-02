import React, { Component } from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    placeholder='Nome' autoFocus={true} value={this.state.name}
                    onChangeTe={name => this.setState({ name })} />
                <TextInput style={styles.input} 
                    placeholder='Email' keyboardType='email-address' value={this.state.email}
                    onChangeText={email => this.setState({ email })} />
                <TextInput style={styles.input}
                    placeholder='Senha' secureTextEntry={true} value={this.state.password}
                    onChangeText={password => this.setState({ password })} />
                <TouchableOpacity styles={styles.buttom} onPress={() => { }}>
                    <Text style={styles.buttomText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286F4'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    }
})

export default Register