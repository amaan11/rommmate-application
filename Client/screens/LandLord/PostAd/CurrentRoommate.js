import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native'
import IonicIcons from 'react-native-vector-icons/Ionicons';
import RangeSlider from 'rn-range-slider';
import { CustomButton, ProgressBar } from "../../../components";
import { userTypes, propertyTypes, genderWithIcon, occupations } from "../../../utils/data"
import { CustomStyle } from "../../../utils"

const numbers = [0, 1, 2, 3, 4, 5, 6, 7]
const DEVICE_WIDTH = Dimensions.get('window').width

const styles = {
    headerView: {
        marginTop: 15,
        marginHorizontal: 20,
        marginBottom: 5
    },
    stepText: {
        fontSize: 18,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    container: {
        marginHorizontal: 20,
        marginTop: 20
    },
    margin: {
        marginTop: 20
    },
    borderedView: {
        width: '33%',
        height: 40,
        borderWidth: 1,
        borderColor: '#40A8FB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: "#020433",
    },
    roundView: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'grey',
        marginRight: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nextBtn: {
        margin: 20
    }
}
class CurrentRoommate extends Component {
    render() {
        return (
            <View>
                <View>
                    <View style={[CustomStyle.flex, CustomStyle.spaceBetween, styles.headerView]}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <IonicIcons
                                name="md-arrow-back"
                                size={30}
                                color="black"
                                style={styles.backIcon}
                            />
                        </TouchableOpacity>
                        <Text style={styles.stepText}>Step 4-6</Text>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Text style={CustomStyle.primaryColor}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    <ProgressBar percentage={100 / 6 * 4} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.heading}>Current</Text>
                    <Text style={styles.heading}>Roommates</Text>
                    <View style={styles.margin}>
                        <Text>Number of roommates already living there</Text>
                        <View style={[CustomStyle.flex, { marginTop: 10 }]}>
                            {
                                numbers.map(value => (
                                    <TouchableOpacity activeOpacity={0.3} style={[styles.borderedView, { width: "12.5 %" }]} onPress={this.se}>
                                        <Text style={CustomStyle.primaryColor}>{value}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                    <View style={styles.margin}>
                        <Text style={styles.title}>Gender</Text>
                        <View style={[CustomStyle.flex, CustomStyle.justifyBetween, styles.margin]}>
                            {genderWithIcon.map(gender => (
                                <TouchableOpacity>
                                    <View style={styles.roundView}>
                                        {gender.icon}
                                    </View>
                                    <Text style={{ padding: 10 }}>{gender.type}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View style={styles.margin}>
                        <View style={[CustomStyle.flex, CustomStyle.spaceBetween]}>
                            <Text style={{ fontSize: 18 }}>Age</Text>
                            <Text style={{ fontWeight: 'bold' }}>24s-32s</Text>
                        </View>
                        <RangeSlider
                            style={{ width: DEVICE_WIDTH - 40, height: 80 }}
                            gravity={'center'}
                            labelStyle="none"
                            min={0}
                            max={1200}
                            initialLowValue={300}
                            step={20}
                            selectionColor="#40A8FB"
                            blankColor="#707070"
                            thumbRadius={15}
                            onValueChanged={(low, high, fromUser) => {
                                console.log("low>>>", low + "..." + high)
                                // this.setState({ rangeLow: low, rangeHigh: high })
                            }}
                        />
                        <View style={[CustomStyle.flex, CustomStyle.spaceBetween, { marginTop: -30 }]}>
                            <Text style={CustomStyle.defaultColor}>16s</Text>
                            <Text style={CustomStyle.defaultColor} >65s</Text>
                        </View>
                    </View>
                    <View style={styles.margin}>
                        <Text style={styles.title}>Occupation</Text>
                        <View style={[CustomStyle.flex, CustomStyle.justifyBetween, styles.margin]}>
                            {occupations.map(occupation => (
                                <TouchableOpacity>
                                    <View style={styles.roundView}>
                                        {occupation.icon}
                                    </View>
                                    <Text style={{ padding: 10 }}>{occupation.type}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <CustomButton buttonText="NEXT" />
                </View>
            </View>
        );
    }
}

export default CurrentRoommate;