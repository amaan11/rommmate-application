import React, { Component } from "react";
import { View, Alert, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { EvilIcons } from "react-native-vector-icons";
// import MapInput from "./MapInput";

class MapViewScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: {},
            loading: true
        };
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ currentLocation: position, loading: false });
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }

    render() {
        const { currentLocation, loading } = this.state;

        return (
            <View style={{ flex: 1 }}>
                {!loading && (
                    <View>
                        <MapView
                            initialRegion={{
                                latitude: currentLocation.coords.latitude,
                                longitude: currentLocation.coords.longitude,
                                latitudeDelta: 0.002,
                                longitudeDelta: 0.021
                            }}
                            style={{
                                height: 500
                            }}
                        >
                            <MapView.Marker
                                coordinate={{
                                    latitude: currentLocation.coords.latitude,
                                    longitude: currentLocation.coords.longitude
                                }}
                            />
                        </MapView>
                    </View>
                )}
                <MapInput />
            </View>
        );
    }
}

export default MapViewScreen;
