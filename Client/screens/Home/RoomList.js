import React from 'react'
import Room from '../../components/Room';
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { CustomStyle } from '../../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const DEVICE_WIDTH = Dimensions.get('window').width

const rooms = [
    {
        userImage: require("../../assets/user.jpeg"),
        userName: 'Amaan Salheen',
        age: '22',
        userType: 'Roommate',
        isVerified: true,
        title: 'Nice Double Room with Own Bathroom',
        rent: '20000', isAvailable: true,
        leasePeriod: '5 months',
        roomImages: [
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
    },
    {
        userImage: require("../../assets/user.jpeg"),
        userName: 'Amaan Salheen',
        age: '22',
        userType: 'Roommate',
        isVerified: true,
        title: 'Nice Double Room with Own Bathroom',
        rent: '20000', isAvailable: true,
        leasePeriod: '5 months',
        roomImages: [
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
    },
    {
        userImage: require("../../assets/user.jpeg"),
        userName: 'Amaan Salheen',
        age: '22',
        userType: 'Roommate',
        isVerified: true,
        title: 'Nice Double Room with Own Bathroom',
        rent: '20000', isAvailable: true,
        leasePeriod: '5 months',
        roomImages: [
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
    }
]
const styles = StyleSheet.create({
    filterView: {
        width: 200,
        height: 50,
        borderRadius: 40,
        position: 'absolute',
        bottom: 20,
        left: DEVICE_WIDTH / 4,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 18,
    }
})
class RoomList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {

    }
    render() {
        return (
            <React.Fragment>
                <ScrollView>
                    {
                        rooms.map(room => (
                            <Room userImage={room.userImage}
                                userName={room.userName}
                                age={room.age}
                                userType={room.userType}
                                isVerified={room.userType}
                                title={room.title}
                                rent={room.rent}
                                isAvailable={room.isAvailable}
                                leasePeriod={room.leasePeriod}
                                roomImages={room.roomImages}
                            />
                        ))
                    }
                </ScrollView>
                <View style={[CustomStyle.flex, styles.filterView, { paddingTop: 10, paddingHorizontal: 25 }]}>
                    <TouchableOpacity style={CustomStyle.flex}>
                        <Text style={styles.text}>Map</Text>
                        <Entypo name="map" size={30} color="black" style={{ marginHorizontal: 5 }} />
                    </TouchableOpacity >
                    <Text style={{ fontSize: 20, color: 'rgb(221,221,221)', paddingHorizontal: 5 }}>|</Text>
                    <TouchableOpacity style={CustomStyle.flex}>
                        <Text style={styles.text}>Filter</Text>
                        <AntDesign name="filter" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </React.Fragment>
        )
    }
}

export default RoomList