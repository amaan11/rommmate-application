import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    flex: {
        display: 'flex',
        flexDirection: 'row'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    justifyBetween: {
        justifyContent: 'space-between'
    },
    alignCenter: {
        alignItems: 'center'
    },
    primaryColor: {
        color: "#40A8FB"
    },
    dangerColor: {
        color: 'red'
    },
    defaultColor: {
        color: "#95A0B6"
    },
    errorMessage: {
        fontSize: 10,
        color: 'red',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 18,
        color: "#020433",
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    roundedView: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#95A0B6',
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default styles
