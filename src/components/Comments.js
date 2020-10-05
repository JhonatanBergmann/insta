import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

class Comments extends Component {
    render() {
        let view = null
        if (this.props.comments) {
            view = this.props.comments.map((item, index) => {
                return (
                    <View style={styles.commentContainer} key={index}>
                        <Text style={styles.nickname}>{item.nickname}: </Text>
                        <Text style={styles.comment}>{item.comment}</Text>
                    </View>
                )
            })
        }

        return (
            <View style={styles.container}>
                {view}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5
    },
    commentContainer: {
        flexDirection: 'row',
        marginTop: 1
    },
    nickname: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#111111',
        fontSize: hp('2.2%')
    },
    comment: {
        color: '#111111',
        fontSize: hp('2%')
    }
})

export default Comments