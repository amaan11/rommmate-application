import React, { Component } from 'react';
import Proptypes from 'prop-types'
import { View, Image, Dimensions } from 'react-native'
import { get, map } from 'lodash'
import GestureRecognizer from 'react-native-swipe-gestures';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import { GestureHandlerConfig } from '../utils/data';
import { CustomStyle } from "../utils"
import { TouchableOpacity } from 'react-native-gesture-handler';

const DEVICE_WIDTH = Dimensions.get('window').width

const styles = {
    container: {
        // flex: 1,
    },
    roomImage: {
        width: '100%',
        height: 240,
        borderRadius: 10,
    },
    innerView: {
        width: 10,
        height: 10,
        borderRadius: 5,
        margin: 5,
    },
    positionStep: {
        position: 'absolute',
        bottom: 10,
        left: (DEVICE_WIDTH - 40) / 2
    },
    savedItem: {
        position: 'absolute',
        top: 20,
        right: 20
    }
}
class SlidingImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentImageIndex: 1,
            isFavourite: false
        }
    }
    toggleFavouriteHandler = () => {
        this.setState({ isFavourite: !this.state.isFavourite })
    }
    onImageSwipeHandler = (gestureName) => {
        const images = get(this.props, "roomImages", [])
        const length = images.length
        const { currentImageIndex } = this.state
        switch (gestureName) {
            case "SWIPE_LEFT":
                if (length >= currentImageIndex + 1) {
                    this.setState({ currentImageIndex: currentImageIndex + 1 })
                }
                break;
            case "SWIPE_RIGHT":
                if (currentImageIndex !== 1) {
                    this.setState({ currentImageIndex: currentImageIndex - 1 })
                }
                break;
        }
    }
    render() {
        const { currentImageIndex, isFavourite } = this.state
        const images = get(this.props, "roomImages", [])
        return (
            <View>
                {images.length > 0 && map(images, (image, index) => (
                    <GestureRecognizer
                        config={GestureHandlerConfig}
                        style={styles.container}
                        onSwipe={this.onImageSwipeHandler}
                    >
                        <View>
                            {currentImageIndex == index + 1 && <Image source={image.url} style={styles.roomImage} />}

                        </View>
                    </GestureRecognizer>
                ))}
                <View style={[CustomStyle.flex, styles.positionStep]} >
                    {
                        images.length > 0 &&
                        map(images, (image, index) => (
                            <View
                                style={[
                                    index === currentImageIndex - 1 ? { backgroundColor: 'white' } : { backgroundColor: '#979797' },
                                    styles.innerView,
                                ]}></View>
                        ))
                    }
                </View >
                <View style={styles.savedItem}>
                    <TouchableOpacity onPress={this.toggleFavouriteHandler}>
                        <IonicIcons name="ios-heart" size={30} color={isFavourite ? "#FC2F39" : "white"} />
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

SlidingImage.propTypes = {
    roomImages: Proptypes.array.isRequired,
}
export default SlidingImage;