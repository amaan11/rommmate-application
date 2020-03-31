import React from 'react';
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RadialGradientView } from '../components';
import { CustomStyle } from '../utils';

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
        marginTop: 50
    },
    successfulHeading: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 10,
    },
    content: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        paddingHorizontal: 40,
    },
    loginBtn: {
        width: 200,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 30,
    },
});

const SuccessView = ({ title, content, buttonText, onPressHandler, isIconRequired }) => (
    <View style={styles.container}>
        <LinearGradient
            colors={['#40A8FB', '#6C5BF5', '#8156F7', '#B947FB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}>
            <View style={[CustomStyle.alignCenter, styles.radialView]}>
                <RadialGradientView isIconRequired={isIconRequired} />
            </View>
            <View style={styles.contentView}>
                <Text style={styles.successfulHeading}>{title}</Text>
                <Text style={styles.content}>
                    {content}
                </Text>
                <TouchableOpacity
                    style={[CustomStyle.alignCenter, CustomStyle.justifyCenter, styles.loginBtn]}
                    onPress={onPressHandler}
                    activeOpacity={1}>
                    <Text style={{ fontSize: 16 }}>{buttonText}</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    </View>
)

SuccessView.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    onPressHandler: PropTypes.func.isRequired
}
SuccessView.defaultProps = {
    isIconRequired: false
}

export default SuccessView