import React, { Component } from "react";
import { View, Alert, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { EvilIcons } from "react-native-vector-icons";
import Geolocation from '@react-native-community/geolocation';

class SetLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: {},
            loading: true
        };
    }
    componentDidMount() {
        Geolocation.getCurrentPosition(position => {
            this.setState({ currentLocation: position.coords, loading: false });
        }, error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
    }

    render() {
        const { currentLocation, loading } = this.state
        console.log("currentLocation", currentLocation)
        return (
            <View style={{ flex: 1 }}>
                {!loading && (
                    <View>
                        <MapView
                            initialRegion={{
                                latitude: 23.20703785,
                                longitude: 72.63654836,
                                latitudeDelta: 0.002,
                                longitudeDelta: 0.021
                            }}
                            style={{
                                height: 500,
                            }}
                        >
                            {/* <MapView.Marker
                                coordinate={{
                                    latitude: currentLocation.latitude,
                                    longitude: currentLocation.longitude
                                }}
                            /> */}
                        </MapView>
                    </View>
                )}
            </View>
        );
    }
}

export default SetLocation;
