import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    flex: {
        display: 'flex',
        flexDirection: 'row'
    },
    justifyBetween: {
        justifyContent: 'center'
    },
    alignBetween: {
        alignItems: 'center'
    },
    errorMessage: {
        fontSize: 10,
        color: 'red',
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    primaryColor: {
        color: "#40A8FB"
    },
    dangerColor: {
        color: 'red'
    },
})

export default styles
