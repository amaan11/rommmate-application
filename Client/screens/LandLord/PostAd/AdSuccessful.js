import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RadialGradientView, Step } from '../../../components';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    radialView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    successfulHeading: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 10,
        fontFamily: 'Montserrat',
    },
    content: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Montserrat',
    },
    loginBtn: {
        width: 230,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
class AdSuccessful extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={['#40A8FB', '#6C5BF5', '#8156F7', '#B947FB']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{ flex: 1 }}>
                    <View style={styles.radialView}>
                        <RadialGradientView />
                    </View>
                    <View style={styles.contentView}>
                        <Text style={styles.successfulHeading}>Your Ad Posted!</Text>
                        <Text style={styles.content}>Please check the ad list in list tab
                        and chat with people to confirm the booking.
                        </Text>

                        <TouchableOpacity
                            style={styles.loginBtn}
                            activeOpacity={0.9}>
                            <Text>Go To Your Listing</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

export default AdSuccessful;
