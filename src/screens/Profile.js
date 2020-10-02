import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'

class Profile extends Component {
    logout = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        const options = { email: 'fulanoone@email.com', secure: true }
        return (
            <View style={styles.container}>
                <Gravatar style={styles.avatar} options={options} />
                <Text style={styles.nickname}>Fulano</Text>
                <Text style={styles.email}>fulano@email.com</Text>
                <TouchableOpacity style={styles.buttom} onPress={this.logout}>
                    <Text style={styles.buttomText}>Sair</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    email: {
        marginTop: 20,
        fontSize: 25
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

export default Profile