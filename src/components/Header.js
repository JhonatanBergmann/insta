import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Gravatar } from 'react-native-gravatar'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { 
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp 
} from 'react-native-responsive-screen'

import Icon from 'react-native-vector-icons/SimpleLineIcons'

class Header extends Component {
    render() {
        const gravatar = this.props.email ?
            <Gravatar style={styles.avatar}
                options={{ email:this.props.email, secure: true }} />
            : null
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Icon style={{ opacity: 0.3 }} name='social-instagram' size={hp('3.2%')} color={'#111111'} />
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
        padding: 10,
        width: '100%',
        backgroundColor: '#FAFAFA',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: '#111111',
        fontFamily: 'countryside',
        height: 30,
        fontSize: hp('2.5%'),
        marginLeft: 10,
        opacity: 0.3 
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
        width: wp('5%'),
        height: hp('5%'),
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

