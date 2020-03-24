import React from 'react'
import Proptypes from 'prop-types'
import { View, Text, Image, StyleSheet } from 'react-native'
import IonicIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import ModalDropdown from 'react-native-modal-dropdown';
import { CustomStyle } from "../utils"
import { TouchableOpacity } from 'react-native-gesture-handler';
import SlidingImage from './SlidingImage';

const user = require("../assets/user.jpeg")

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    userName: {
        fontSize: 18,
        fontFamily: 'bold'
    },
    userDetails: {
        marginLeft: 15
    },
    text: {
        color: "#404B69",
        marginRight: 20
    },
    textGreen: {
        color: "#08C299"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    dropdownView: {
        height: 105
    }
})

const Room = ({ userImage, userName, age, userType, isVerified, title, rent, isAvailable, leasePeriod, roomImages }) => {
    return (
        <View style={styles.container}>
            <View style={[CustomStyle.flex, { justifyContent: 'space-between', marginVertical: 10 }]}>
                <View style={CustomStyle.flex}>
                    <Image source={userImage} style={styles.profileImage} />
                    <View style={[CustomStyle.flex, CustomStyle.justifyBetween]}>
                        <View style={styles.userDetails}>
                            <Text style={styles.userName}>{userName}</Text>
                            <View style={[CustomStyle.flex, CustomStyle.justifyBetween]}>
                                <Text style={styles.text}>{age}</Text>
                                <Text style={styles.text}>{userType}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <ModalDropdown options={['View Details', 'Check Photos', 'View LandLord Profile']} dropdownStyle={styles.dropdownView} >
                        <IonicIcons name="ios-more" color="black" size={30} />
                    </ModalDropdown>

                </View>
            </View>
            <View>
                <SlidingImage roomImages={roomImages} />
            </View>
            <View style={{ marginTop: 20 }}>
                <View style={[CustomStyle.flex, { marginBottom: 10 }]}>
                    <MaterialIcons name="verified-user" color="#08C299" size={20} />
                    <Text style={[styles.textGreen, { marginHorizontal: 5 }]}>{isVerified ? 'VERFIED' : 'NOT VERIFIED'}</Text>
                </View>
                <Text style={styles.title}>{title}</Text>
                <Text style={{ marginVertical: 3 }}>{rent} per month</Text>
                <View style={[CustomStyle.flex, { marginBottom: 20 }]}>
                    <Text style={{ color: '#707070' }}>{isAvailable ? 'Available Now' : 'Available By'}</Text>
                    <Entypo name="dot-single" size={20} color="#707070" />
                    <Text style={{ color: '#707070' }} >{leasePeriod} Lease</Text>
                </View>
            </View>
        </View >
    )
}

Room.propTypes = {
    userImage: Proptypes.string.isRequired,
    userName: Proptypes.string.isRequired,
    age: Proptypes.number.isRequired,
    userType: Proptypes.string.isRequired,
    isVerified: Proptypes.bool.isRequired,
    title: Proptypes.string.isRequired,
    rent: Proptypes.number.isRequired,
    isAvailable: Proptypes.bool.isRequired,
    leasePeriod: Proptypes.string,
}

export default Room