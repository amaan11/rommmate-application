import React from 'react'
import Proptypes from 'prop-types'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import IonicIcons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { RadialGradientView, Checkbox } from "./index"

const styles = StyleSheet.create({
    flexView: {
        display: 'flex',
        flexDirection: 'row',
    },
    backIcon: {
        marginTop: 15,
        marginLeft: 20,
        marginBottom: 5,
    },
    headerText: {
        fontSize: 18,
        marginLeft: 100,
        marginTop: 15,
        color: 'white'
    },
    gradientView: {
        display: 'flex',
        alignItems: 'center',
        marginTop: -5
    },
    iconView: {
        zIndex: -1,
        margin: 30,
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
        color: 'white',
        paddingBottom: 10
    },
    optionView: {
        width: '90%',
        height: 50,
        borderRadius: 5,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10
    },
    optionText: {
        paddingLeft: 15,
        paddingTop: 5
    }

})
const Question = ({ questionNumber, icon, questionText, options, checkboxHandler, answer }) => {
    return (
        <LinearGradient
            colors={['#40A8FB', '#296CF0', '#8156F7', '#B947FB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }} opacity={0.9}>
            <View style={styles.flexView}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <IonicIcons
                        name="md-arrow-back"
                        size={30}
                        color="white"
                        style={styles.backIcon}
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>Question {questionNumber}-5</Text>
            </View>
            <View style={styles.gradientView}>
                <RadialGradientView isImageRequired={true} image={<View style={styles.iconView}>{icon}</View>} />
            </View>
            <View >
                <Text style={styles.questionText}>{questionText}</Text>
                <View>
                    {options && options.length > 0 && options.map((option, index) => (
                        <View style={styles.optionView}>
                            <Checkbox index={index} handleChange={(value) => checkboxHandler(index + 1, value)} checked={answer - 1 === index ? true : false} />
                            <Text style={styles.optionText}>{option}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </LinearGradient >
    )
}

Question.proptypes = {
    Number: Proptypes.number.isRequired,
    icon: Proptypes.element.isRequired,
    Text: Proptypes.string.isRequired,
    options: Proptypes.array.isRequired,
    checkboxHandler: Proptypes.func
}


export default Question