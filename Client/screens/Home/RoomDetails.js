import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IonicIcons from 'react-native-vector-icons/IonicIcons';
import SlidingImage from '../../components/SlidingImage';
import { CustomStyle } from "../../utils"

const images = [
    {
        url: require("../../assets/room1.jpg")
    },
    {
        url: require("../../assets/room2.jpg")
    },
    {
        url: require("../../assets/room3.jpg")
    },
    {
        url: require("../../assets/room4.jpg")
    }
]
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

})
class RoomDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const isVerified = true
        const title = "1 Double Room for Rent in Caroll Garden"
        const rent = "200"
        return (
            <View>
                <SlidingImage roomImages={images} />
                <View style={[CustomStyle.flex, { marginBottom: 10 }]}>
                    <MaterialIcons name="verified-user" color="#08C299" size={20} />
                    <Text style={[styles.textGreen, { marginHorizontal: 5 }]}>{isVerified ? 'VERFIED' : 'NOT VERIFIED'}</Text>
                </View>
                <Text style={styles.title}>{title}</Text>
                <View style={CustomStyle.flex}>
                    <Text style={{ marginVertical: 3, fontWeight: 'bold', paddingRight: 5 }}>{rent}</Text>
                    <Text style={{ paddingTop: 2 }}>per month</Text>
                    <Text style={{ padding: 2, color: '#020433' }}>($700 deposit)</Text>
                </View>
                <View style={[CustomStyle.flex, { justifyContent: 'space-between', marginVertical: 10, backgroundColor: "#F7F9FF" }]}>
                    <View style={CustomStyle.flex}>
                        <Image source={images[0]} style={styles.profileImage} />
                        <View style={[CustomStyle.flex, CustomStyle.justifyBetween]}>
                            <View style={styles.userDetails}>
                                <Text style={styles.userName}>Amaan</Text>
                                <View style={[CustomStyle.flex, CustomStyle.justifyBetween]}>
                                    <Text style={styles.text}>21</Text>
                                    <Text style={styles.text}>LandLord</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <IonicIcons name="ios-more" color="black" size={30} />
                    </View>
                </View>
                <View>
                </View>
            </View>
        );
    }
}

export default RoomDetails;