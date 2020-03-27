import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'
import IonicIcons from 'react-native-vector-icons/Ionicons';
import { CustomButton, ProgressBar } from "../../../components";
import { userTypes, propertyTypes, bedRoomTypes } from "../../../utils/data"
import { CustomStyle } from "../../../utils"

const numbers = [0, 1, 2, 3, 4, 5, 6, 7]

const amenties = ["In_unit Washer", "Wifi Included", "Furnished", "Elevator", "Doorman", "Air Conditioning"]
const rules = ["No Smoking", "No Drinks", "No Pets", "No Drugs", "Dogs Ok", "Cats Ok", "Couple Ok"]
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
        width: 72,
        height: 72,
        borderRadius: 36,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 18,
        marginRight: 40,
    },
    nextBtn: {
        margin: 20
    }
}
class PropertyDetails extends Component {
    render() {
        return (
            <ScrollView vertical={true} style={{ marginBottom: 20 }}>
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
                        <Text style={styles.stepText}>Step 2-6</Text>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Text style={CustomStyle.primaryColor}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    <ProgressBar percentage={100 / 6 * 2} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.heading}>About</Text>
                    <Text style={styles.heading}>The Property</Text>
                    <View style={styles.margin}>
                        <Text style={styles.title}>I'm Advertising As</Text>
                        <View style={[CustomStyle.flex, { marginTop: 15 }]}>
                            {
                                userTypes.map(type => (
                                    <TouchableOpacity activeOpacity={0.3} style={styles.borderedView} >
                                        <Text style={[CustomStyle.primaryColor, { textAlign: 'center' }]}>{type}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                    <View style={styles.margin}>
                        <Text style={styles.title}>Property Type</Text>
                        <View style={[CustomStyle.flex, { marginTop: 15 }]}>
                            {
                                propertyTypes.map(type => (
                                    <TouchableOpacity activeOpacity={0.3} style={styles.borderedView}>
                                        <Text style={CustomStyle.primaryColor}>{type}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                    <View style={styles.margin}>
                        <Text style={styles.title}>Summary</Text>
                        <View style={styles.margin}>
                            <Text>Total Number Of Bedrooms</Text>
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
                            <Text>Total Number Of Bathrooms</Text>
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
                            <Text>Available Rooms To Rent</Text>
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
                            <Text style={styles.title}>Bedroom Type</Text>
                            <View style={[CustomStyle.flex, CustomStyle.justifyBetween, styles.margin]}>
                                {bedRoomTypes.map(type => (
                                    <TouchableOpacity>
                                        <View style={styles.roundView}>
                                            {type.icon}
                                        </View>
                                        <Text style={{ padding: 10 }}>{type.text}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                        <View style={styles.margin}>
                            <Text style={styles.title}>Property Amenties</Text>
                            <View style={[CustomStyle.flex, CustomStyle.justifyBetween, styles.margin, { flexWrap: 'wrap' }]}>
                                {amenties.map(item => (
                                    <TouchableOpacity>
                                        <View style={[styles.roundView, { marginBottom: 20 }]}>
                                            <Text style={{ fontSize: 12 }}>{item}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                        <View style={styles.margin}>
                            <Text style={styles.title}>Rules</Text>
                            <View style={[CustomStyle.flex, CustomStyle.justifyBetween, styles.margin, { flexWrap: 'wrap' }]}>
                                {rules.map(item => (
                                    <TouchableOpacity activeOpacity={0.5}>
                                        <View style={[styles.roundView, { marginBottom: 20 }]}>
                                            <Text style={{ fontSize: 12 }}>{item}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </View>
                    <CustomButton buttonText="NEXT" onPressHandler="" />
                </View>
            </ScrollView >
        );
    }
}

export default PropertyDetails;