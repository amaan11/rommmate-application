import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
import IonicIcons from 'react-native-vector-icons/Ionicons';
import RangeSlider from 'rn-range-slider';
import { CustomButton, ProgressBar, CustomTextInput, DatePicker } from "../../../components";
import { CustomStyle } from "../../../utils"
import { roomType, DEVICE_WIDTH, furnishedTypes } from '../../../utils/data';

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
    selectedView: {
        backgroundColor: "#40A8FB",
    }
})
class RoomDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedRoomType: '',
            selectedFurnishedType: '',
            minStayPeriod: 3,
            maxStayPeriod: 12
        }
    }
    onChange = (key, value) => {
        this.setState({ [key]: value })
    }
    minStayHandler = (minValue, maxValue) => {
        this.setState({ minStayPeriod: Math.round(minValue / 100), maxStayPeriod: Math.round(maxValue / 100) })
    }
    render() {
        const { selectedFurnishedType, selectedRoomType, minStayPeriod, maxStayPeriod } = this.state
        return (
            <ScrollView vertical={true} style={{ marginBottom: 20 }}>
                <View >
                    <View style={[CustomStyle.flex, CustomStyle.justifyBetween, styles.headerView]}>
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
                        <CustomTextInput placeholder="Rent Per Month(in Rs)" label="Rent Per Month(in Rs)" isNumeric={true} onChangeHandler={(value) => this.onChange('rent', value)} />
                        <CustomTextInput placeholder="Deposit(in Rs)" label="Deposit(in Rs)" isNumeric={true} onChangeHandler={(value) => this.onChange('deposit', value)} />
                        <View style={{ marginVertical: 15 }} >
                            <DatePicker label="Available From" onDateChange={(date) => this.onChange('availableDate', date)} />
                        </View>
                        <View>
                            <Text style={styles.title}>Room Type</Text>
                            <View style={[CustomStyle.flex, { marginTop: 15 }]}>
                                {
                                    roomType.map((type) => (
                                        <TouchableOpacity activeOpacity={0.3} style={[styles.borderedView,
                                        selectedRoomType === type && styles.selectedView,
                                        ]} onPress={() => this.onChange('selectedRoomType', type)}>
                                            <Text style={[selectedRoomType === type ? { color: 'white' } : CustomStyle.primaryColor, { textAlign: 'center' }]}>{type}</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        </View>
                        <View style={styles.margin}>
                            <Text style={styles.title}>Furnished or Unfurnished</Text>
                            <View style={[CustomStyle.flex, { marginTop: 15 }]}>
                                {
                                    furnishedTypes.map((type) => (
                                        <TouchableOpacity activeOpacity={0.3} style={[styles.borderedView, { width: '50%' },
                                        selectedFurnishedType === type && styles.selectedView,
                                        ]} onPress={() => this.onChange('selectedFurnishedType', type)}>
                                            <Text style={[selectedFurnishedType === type ? { color: 'white' } : CustomStyle.primaryColor, { textAlign: 'center' }]}>{type}</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        </View>
                        <View style={styles.margin}>
                            <View style={[CustomStyle.flex, CustomStyle.justifyBetween]}>
                                <Text style={{ fontSize: 18 }}>Minimum Stay</Text>
                                <Text style={{ fontWeight: 'bold' }}>{minStayPeriod}-{maxStayPeriod} Months</Text>
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
                                onValueChanged={(low, high) => {
                                    this.minStayHandler(low, high)
                                }}
                            />
                            <View style={[CustomStyle.flex, CustomStyle.justifyBetween, { marginTop: -30 }]}>
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