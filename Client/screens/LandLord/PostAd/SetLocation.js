import React, { Component } from "react";
import { View, Alert, Dimensions, TouchableOpacity, Text, TextInput } from "react-native";
import MapView from "react-native-maps";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Geocoder from 'react-native-geocoding';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import Geolocation from '@react-native-community/geolocation';
import { CustomButton, ProgressBar } from "../../../components";
import { CustomStyle } from "../../../utils"

const DEVICE_HEIGHT = Dimensions.get('window').height


const styles = {
    button: {
        position: 'absolute',
        bottom: 20,
        width: '90%',
        marginHorizontal: 20
    },
    inputAdressView: {
        position: 'absolute',
        top: 70,
        width: '90%',
        marginHorizontal: 20
    },
    backIcon: {
        marginTop: 15,
        marginLeft: 20,
        marginBottom: 5,
    },
    stepText: {
        fontSize: 18,
        marginLeft: 100,
        marginTop: 15,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 20,
        fontSize: 15,
        paddingLeft: 50
    },
    searchIcon: {
        position: 'absolute',
        left: 20,
        top: 15,
    }
}
class SetLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: {},
            loading: true
        };
        Geocoder.init("AIzaSyCs9b2sEV7ezLyhHDc9eePOzyjxPcubEcI")
    }
    componentDidMount() {
        Geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords
            this.setState({ currentLocation: { ...this.state.currentLocation, latitude: latitude, longitude: longitude }, loading: false });
        }, error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
    }
    onDragMarkerHandler = (coordinates) => {
        Geocoder.from(41.89, 12.49)
            .then(json => {
                var addressComponent = json.results[0].address_components[0];
                console.log(addressComponent);
            })
            .catch(error => console.log(error));
        // this.setState({ currentLocation: { ...this.state.currentLocation, latitude: coordinates.latitude, longitude: coordinates.longitude } });
    }
    onConfirmAdressHandler = () => {
        Alert.alert(
            'Confirm Address',
            'Are you sure want to confirm this address as your property address?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'OK', onPress: () => {
                        // API CALL HERE
                    }
                },
            ],
            { cancelable: false }
        )
    }

    render() {
        const { currentLocation, loading } = this.state

        return (
            !loading && <View style={{ flex: 1 }}>
                <View>
                    <View style={CustomStyle.flex}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <IonicIcon
                                name="md-arrow-back"
                                size={30}
                                color="black"
                                style={styles.backIcon}
                            />
                        </TouchableOpacity>
                        <Text style={styles.stepText}>Step 1-6</Text>
                    </View>
                    <ProgressBar percentage={100 / 6} />
                </View>
                <MapView
                    initialRegion={{
                        latitude: currentLocation.latitude,
                        longitude: currentLocation.longitude,
                        latitudeDelta: 0.002,
                        longitudeDelta: 0.021
                    }}
                    style={{
                        height: DEVICE_HEIGHT,
                    }}
                >
                    <MapView.Marker
                        draggable
                        coordinate={{
                            latitude: currentLocation.latitude,
                            longitude: currentLocation.longitude
                        }}
                        onDragEnd={(e) => this.onDragMarkerHandler(e.nativeEvent.coordinate)}
                    >
                        <MaterialCommunityIcons name="map-marker" size={40} color="red" />
                    </MapView.Marker>
                </MapView>
                <View style={styles.inputAdressView}>
                    <TextInput style={styles.input} placeholder="Search Place" />
                    <IonicIcons name="ios-search" size={20} style={styles.searchIcon} />
                </View>
                <View style={styles.button}>
                    <CustomButton buttonText="CONFIRM ADRDRESS" onPressHandler={this.onConfirmAdressHandler} />
                </View>
            </View>
        )
    }
}

export default SetLocation;
