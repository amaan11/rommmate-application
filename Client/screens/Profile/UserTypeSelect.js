import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import IonicIcons from 'react-native-vector-icons/Ionicons';
import { ProgressBar, CategoryType, CustomButton } from '../../components';
import { Categories } from '../../utils/data'
import CustomStyle from '../../utils/styles'

const styles = {
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
    container: {
        marginTop: 30,
        marginLeft: 20
    }
}
class UserTypeSelect extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={CustomStyle.flex}>
                    <TouchableOpacity onPress={this.props.navigation.goBack()}>
                        <IonicIcons
                            name="md-arrow-back"
                            size={30}
                            color="black"
                            style={styles.backIcon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.stepText}>Step 2-4</Text>
                </View>
                <ProgressBar percentage="50" />
                <View style={styles.container}>
                    <Text style={CustomStyle.heading}>Are You A ?</Text>

                </View>
            </View>
        );
    }
}

export default UserTypeSelect;