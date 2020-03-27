import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
import IonicIcons from 'react-native-vector-icons/Ionicons';
import RangeSlider from 'rn-range-slider';
import { CustomButton, ProgressBar, CustomTextInput, DatePicker } from "../../../components";
import { CustomStyle } from "../../../utils"
import { roomType } from '../../../utils/data';

const DEVICE_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
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
        marginTop: 40,
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
        fontSize: 14,
        color: "#020433",
    },
})
class RoomDetails extends Component {
    render() {
        return (
            <ScrollView vertical={true} style={{ marginBottom: 20 }}>
                <View >
                    <View style={[CustomStyle.flex, CustomStyle.spaceBetween, styles.headerView]}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <IonicIcons
                                name="md-arrow-back"
                                size={30}
                                color="black"
                                style={styles.backIcon}
                            />
                        </TouchableOpacity>
                        <Text style={styles.stepText}>Step 3-6</Text>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Text style={CustomStyle.primaryColor}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    <ProgressBar percentage={100 / 6 * 3} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.heading}>Room</Text>
                    <Text style={styles.heading}>Preferences</Text>
                    <View style={{ marginTop: 35 }}>
                        <CustomTextInput placeholder="Rent Per Month(in Rs)" label="Rent Per Month(in Rs)" />
                        <CustomTextInput placeholder="Deposit(in Rs)" label="Deposit(in Rs)" />
                        <DatePicker label="Available From" />
                        <View>
                            <Text style={styles.title}>Room Type</Text>
                            <View style={[CustomStyle.flex, { marginTop: 15 }]}>
                                {
                                    roomType.map(type => (
                                        <TouchableOpacity activeOpacity={0.3} style={styles.borderedView} >
                                            <Text style={[CustomStyle.primaryColor, { textAlign: 'center' }]}>{type}</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        </View>
                        <View style={styles.margin}>
                            <Text style={styles.title}>Furnished or Unfurnished</Text>
                            <View style={[CustomStyle.flex, { marginTop: 15 }]}>
                                {
                                    ['Furnished', 'Unfurnished'].map(type => (
                                        <TouchableOpacity activeOpacity={0.3} style={[styles.borderedView, { width: '50%' }]} >
                                            <Text style={[CustomStyle.primaryColor, { textAlign: 'center' }]}>{type}</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        </View>
                        <View style={styles.margin}>
                            <View style={[CustomStyle.flex, CustomStyle.spaceBetween]}>
                                <Text style={{ fontSize: 18 }}>Minimum Stay</Text>
                                <Text style={{ fontWeight: 'bold' }}>3-6 Months</Text>
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
                                <Text style={CustomStyle.defaultColor}>No Minimum</Text>
                                <Text style={CustomStyle.defaultColor} > Over 12 Months</Text>
                            </View>
                        </View>
                    </View>
                    <CustomButton buttonText="NEXT" />
                </View>
            </ScrollView >
        );
    }
}

export default RoomDetails;