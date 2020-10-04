import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../store/actions/user'
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'

class Profile extends Component {
    logout = () => {
        this.props.onLogout() /* ARRUMAR AQUI */
        this.props.navigation.navigate('Login')
    }

    render() {
        const options = { email: this.props.email, secure: true }
        return (
            <View style={styles.container}>
                <Gravatar style={styles.avatar} options={options} />
                <Text style={styles.nickname}>{this.props.name}</Text>
                <Text style={styles.email}>{this.props.email}</Text>
                <TouchableOpacity style={styles.buttom} onPress={this.logout}>
                    <Text style={styles.buttomText}>Desconectar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100
    },
    nickname: {
        marginTop: 10,
        fontSize: 30,
        color: '#545454',
        fontWeight: 'bold'
    },
    email: {
        marginTop: 10,
        fontSize: 15,
        color: '#545454'
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

