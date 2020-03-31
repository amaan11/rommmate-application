import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'
import IonicIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CustomButton, ProgressBar } from "../../../components";
import { userTypes, propertyTypes, bedRoomTypes, DEVICE_WIDTH } from "../../../utils/data"
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
    container: {
        marginHorizontal: 20,
        marginTop: 20
    },
    margin: {
        marginTop: 20
    },
    title: {
        fontSize: 18,
        color: "#020433",
    },
    innerView: {
        borderWidth: 1,
        borderColor: '#40A8FB',
        borderRadius: 5,
        marginTop: 20,
    },
    borderedBtn: {
        height: 40,
        width: (DEVICE_WIDTH - 40) / 3
    },
    borderedRightView: {
        borderRightWidth: 1,
        borderRightColor: '#40A8FB'
    },
    roundView: {
        width: 72,
        height: 72,
        borderRadius: 36,
        borderWidth: 1,
        borderColor: '#40A8FB',
        padding: 18,
    },
    nextBtn: {
        margin: 20
    }
}
class PropertyDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedUserType: '',
            selectedPropertyType: '',
            noOfBedrooms: '',
            noOfBathrooms: '',
            noOfRoomsToRent: '',
            selectedAmenties: [],
            selectedRules: []
        }
    }
    onChangeHandler = (key, value) => {
        if (key === 'selectedAmenties') {
            if (this.state.selectedAmenties.includes(value)) {
                this.setState({
                    selectedAmenties: this.state.selectedAmenties.filter(amenties => amenties !== value)
                })
            }
            else {
                this.setState({ selectedAmenties: [...this.state.selectedAmenties, value] })
            }
        }
        else if (key === 'selectedRules') {
            if (key === 'selectedRules') {
                if (this.state.selectedRules.includes(value)) {
                    this.setState({ selectedRules: this.state.selectedRules.filter(rules => rules !== value) })
                }
                else {
                    this.setState({ selectedRules: [...this.state.selectedRules, value] })
                }
            }
        }
        else {
            this.setState({ [key]: value })
        }
    }
    render() {
        const { selectedUserType, selectedPropertyType, noOfBedrooms, noOfBathrooms, noOfRoomsToRent, selectedBedroomType, selectedAmenties, selectedRules } = this.state
        return (
            <ScrollView vertical={true} style={{ marginBottom: 20 }}>
                <View>
                    <View style={[CustomStyle.flex, CustomStyle.justifyBetween, styles.headerView]}>
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
                    <Text style={CustomStyle.heading}>About</Text>
                    <Text style={CustomStyle.heading}>The Property</Text>
                    <View style={styles.margin}>
                        <Text style={styles.title}>I'm Advertising As</Text>
                        <View style={[CustomStyle.flex, styles.innerView]}>
                            {
                                userTypes.map((type, index) => (
                                    <TouchableOpacity activeOpacity={0.3} style={[CustomStyle.justifyCenter, CustomStyle.alignCenter, styles.borderedBtn,
                                    index + 1 < userTypes.length && styles.borderedRightView,
                                    selectedUserType === type && {
                                        backgroundColor: '#40A8FB'
                                    }
                                    ]}
                                        onPress={() => this.onChangeHandler('selectedUserType', type)}
                                    >
                                        <Text style={selectedUserType === type ? {
                                            color: 'white'
                                        } : CustomStyle.primaryColor}>{type}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                    <View style={styles.margin}>
                        <Text style={styles.title}>Property Type</Text>
                        <View style={[CustomStyle.flex, styles.innerView]}>
                            {
                                propertyTypes.map((type, index) => (
                                    <TouchableOpacity activeOpacity={0.3} style={[CustomStyle.justifyCenter, CustomStyle.alignCenter, styles.borderedBtn,
                                    index + 1 < propertyTypes.length && styles.borderedRightView,
                                    selectedPropertyType === type && {
                                        backgroundColor: '#40A8FB'
                                    }
                                    ]}
                                        onPress={() => this.onChangeHandler('selectedPropertyType', type)}
                                    >
                                        <Text style={selectedPropertyType === type ? {
                                            color: 'white'
                                        } : CustomStyle.primaryColor}>{type}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                    <View style={styles.margin}>
                        <Text style={styles.title}>Summary</Text>
                        <View style={styles.margin}>
                            <Text>Total Number Of Bedrooms</Text>
                            <View style={[CustomStyle.flex, { marginTop: 10 }, styles.innerView]}>
                                {
                                    numbers.map(value => (
                                        <TouchableOpacity activeOpacity={0.3} style={[CustomStyle.justifyCenter, CustomStyle.alignCenter, styles.borderedBtn,
                                        value < 7 && styles.borderedRightView,
                                        noOfBedrooms === value && {
                                            backgroundColor: '#40A8FB'
                                        },
                                        { width: '12.5%' }
                                        ]}
                                            onPress={() => this.onChangeHandler('noOfBedrooms', value)}
                                        >
                                            <Text style={noOfBedrooms === value ? {
                                                color: 'white'
                                            } : CustomStyle.primaryColor}>{value}</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        </View>
                        <View style={styles.margin}>
                            <Text>Total Number Of Bathrooms</Text>
                            <View style={[CustomStyle.flex, { marginTop: 10 }, styles.innerView]}>
                                {
                                    numbers.map(value => (
                                        <TouchableOpacity activeOpacity={0.3} style={[CustomStyle.justifyCenter, CustomStyle.alignCenter, styles.borderedBtn,
                                        value < 7 && styles.borderedRightView,
                                        noOfBathrooms === value && {
                                            backgroundColor: '#40A8FB'
                                        },
                                        { width: '12.5%' }
                                        ]}
                                            onPress={() => this.onChangeHandler('noOfBathrooms', value)}
                                        >
                                            <Text style={noOfBathrooms === value ? {
                                                color: 'white'
                                            } : CustomStyle.primaryColor}>{value}</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        </View>
                        <View style={styles.margin}>
                            <Text>Available Rooms To Rent</Text>
                            <View style={[CustomStyle.flex, { marginTop: 10 }, styles.innerView]}>
                                {
                                    numbers.map(value => (
                                        <TouchableOpacity activeOpacity={0.3} style={[CustomStyle.justifyCenter, CustomStyle.alignCenter, styles.borderedBtn,
                                        value < 7 && styles.borderedRightView,
                                        noOfRoomsToRent === value && {
                                            backgroundColor: '#40A8FB'
                                        },
                                        { width: '12.5%' }
                                        ]}
                                            onPress={() => this.onChangeHandler('noOfRoomsToRent', value)}
                                        >
                                            <Text style={noOfRoomsToRent === value ? {
                                                color: 'white'
                                            } : CustomStyle.primaryColor}>{value}</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        </View>
                        <View style={styles.margin}>
                            <Text style={styles.title}>Bedroom Type</Text>
                            <View style={[CustomStyle.flex, CustomStyle.justifyCenter, styles.margin]}>
                                {bedRoomTypes.map(type => (
                                    <TouchableOpacity style={{ marginHorizontal: 25 }}
                                        onPress={() => this.onChangeHandler('selectedBedroomType', type.value)}
                                    >
                                        <View style={[styles.roundView, type.value === selectedBedroomType && { backgroundColor: '#40A8FB' }]}
                                        >
                                            {
                                                type.value === 'singleBed' ?
                                                    <FontAwesome name="bed" size={30} color={type.value === selectedBedroomType ? 'white' : '#40A8FB'} /> :
                                                    <IonicIcons name="ios-bed" size={30} color={type.value === selectedBedroomType ? 'white' : '#40A8FB'} />
                                            }
                                        </View>
                                        <Text style={[{ padding: 10 }, type.value === selectedBedroomType && CustomStyle.primaryColor]}>{type.text}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                        <View style={styles.margin}>
                            <Text style={styles.title}>Property Amenties</Text>
                            <View style={[CustomStyle.flex, CustomStyle.justifyBetween, styles.margin, { flexWrap: 'wrap' }]}>
                                {amenties.map(item => (
                                    <TouchableOpacity
                                        onPress={() => this.onChangeHandler('selectedAmenties', item)}
                                        style={[styles.roundView, { marginBottom: 20 }, selectedAmenties.includes(item) && { backgroundColor: '#40A8FB' }]}
                                    >
                                        <Text style={[selectedAmenties.includes(item) ? { color: 'white' } : CustomStyle.primaryColor, { fontSize: 12 }]}>{item}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                        <View style={styles.margin}>
                            <Text style={styles.title}>Rules</Text>
                            <View style={[CustomStyle.flex, CustomStyle.justifyBetween, styles.margin, { flexWrap: 'wrap' }]}>
                                {rules.map(item => (
                                    <TouchableOpacity activeOpacity={0.5}
                                        onPress={() => this.onChangeHandler('selectedRules', item)}
                                        style={[styles.roundView, { marginBottom: 20 }, selectedRules.includes(item) && { backgroundColor: '#40A8FB' }]}
                                    >
                                        <Text style={[selectedRules.includes(item) ? { color: 'white' } : CustomStyle.primaryColor, { fontSize: 12 }]}>{item}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </View>
                    <CustomButton buttonText="NEXT" onPressHandler=""
                        disabled={
                            !selectedUserType ||
                            !selectedPropertyType ||
                            !noOfBedrooms ||
                            !noOfBathrooms ||
                            !noOfRoomsToRent ||
                            !selectedBedroomType ||
                            selectedAmenties.length === 0 ||
                            selectedRules.length === 0
                        }
                    />

                </View>
            </ScrollView >
        );
    }
}

export default PropertyDetails;