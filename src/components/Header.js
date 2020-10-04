import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Gravatar } from 'react-native-gravatar'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'

import icon from '../../assets/imgs/logo.png'

class Header extends Component {
    render() {
        const gravatar = this.props.email ?
            <Gravatar style={styles.avatar}
                options={{ email:this.props.email, secure: true }} />
            : null
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image}/>
                    <Text style={styles.title}>Insta</Text>
                </View>
                <View style={styles.userContainer}>
                    {gravatar}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        width: '100%',
        backgroundColor: '#FAFAFA',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
    title: {
        color: '#111111',
        fontFamily: 'countryside',
        height: 30,
        fontSize: 15,
        marginLeft: 5
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        fontSize: 10,
        color: '#888'
    },
    avatar: {
        width: 30,
        height: 30,
        marginLeft: 10,
        borderRadius: 15
    }
})

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name
    }
}

/* export default Header */
export default connect(mapStateToProps)(Header)

