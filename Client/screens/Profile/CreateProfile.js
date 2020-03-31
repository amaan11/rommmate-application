import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Platform,
  TouchableOpacity,
  Picker,
  Image,
} from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal, { ModalTitle, ModalContent } from "react-native-modals";
import ImagePicker from 'react-native-image-crop-picker';
import { ProgressBar, CustomTextInput, CustomButton, DatePicker } from '../../components';
import { genders, DEVICE_WIDTH } from '../../utils/data';
import CustomStyle from '../../utils/styles'

const cities = ["Ahmedabad", "Bangalore", "Ahmedabad", "Bangalore", "Ahmedabad", "Bangalore", "Ahmedabad", "Bangalore", "Ahmedabad", "Bangalore", "Ahmedabad", "Bangalore", "Ahmedabad", "Bangalore", "Ahmedabad", "Bangalore", "AHmedabad", "Bangalore", "AHmedabad", "Bangalore"]
const countryImage = require("../../assets/country-image.png")
const styles = StyleSheet.create({
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
  mainView: {
    marginHorizontal: 15,
    flex: 1,
  },
  genderView: {
    borderWidth: 1,
    borderColor: '#40A8FB',
    borderRadius: 5,
    marginTop: 20,
  },
  phoneNumberView: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: 'rgb(221,221,221)',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingTop: 5,
    marginBottom: 10
  },
  genderBtn: {
    width: 120,
    height: 40,
    borderRightWidth: 1,
    borderRightColor: '#40A8FB',
  },
  genderText: {
    color: '#40A8FB',
    fontSize: 13,
    textAlign: 'center',
    paddingTop: 10
  },
  selectedGender: {
    color: 'white',
    backgroundColor: '#40A8FB',
  },
  borderedView: {
    borderWidth: 1,
    borderColor: 'rgb(221,221,221)',
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  pickerView: {
    borderWidth: 1,
    borderColor: 'rgb(221,221,221)',
    borderRadius: 10,
  },
  picker: {
    height: 40,
  },
  flagImage: {
    width: 20,
    height: 20
  },
  locationText: {
    paddingBottom: 20,
    paddingTop: 10,
  },
  addImageView: {
    width: (DEVICE_WIDTH - 60) / 2,
    height: 120,
    borderWidth: 1,
    borderColor: '#50A8FB',
    borderStyle: 'dashed',
    borderRadius: 10,
    marginRight: 15,
    marginBottom: 10
  },
  addbtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadedImage: {
    width: (DEVICE_WIDTH - 60) / 2,
    height: 120,
    borderRadius: 10,
    marginRight: 15,
    marginBottom: 10
  },
  selectPhotoOption: {
    textAlign: "center",
    color: "blue",
    padding: 15
  },
  closeImageIcon: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: "#E94862",
    position: 'absolute',
    top: 10,
    right: 20,
  },
});
class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      selectedGender: '',
      birthDate: '',
      phoneNumber: '',
      location: '',
      profession: '',
      userInfo: '',
      uploadedImages: [],
      isModalVisible: false,
      isSubmitted: false
    };
  }
  handleValueChange = (key, value) => {
    console.log("key>>>", key + ".." + value)
    this.setState({ [key]: value })
  }
  toggleModalHandler = () => {
    const { isModalVisible } = this.state
    this.setState({ isModalVisible: !isModalVisible })
  }
  createProfileHandler = () => {
    const { fullName, selectedGender, birthDate, phoneNumber, profession, location, userInfo, uploadedImages } = this.state
    this.setState({ isSubmitted: true })

    // API CALL Here
  }
  uploadImageHandler = (type) => {
    if (type === 'camera') {
      ImagePicker.openCamera({
        width: 400,
        height: 400,
        cropping: true,
        includeBase64: true
      }).then(response => {
        const images = [...this.state.uploadedImages]
        images.push({
          data: response.data,
          fileType: response.mime,
          filePath: response.path,
          sourceUri: 'data:image/jpeg;base64,' + response.data
        })
        this.setState({
          uploadedImages: images, isModalVisible: false
        })
      });
    }
    else {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        multiple: true,
        includeBase64: true,
        useFrontCamera: true,
      }).then(response => {
        if (response && response.length > 0) {
          let images = [...this.state.uploadedImages]
          response.map(image => {
            images.push({
              data: image.data,
              fileType: image.mime,
              filePath: image.path,
              sourceUri: 'data:image/jpeg;base64,' + image.data
            })
          })
          this.setState({ uploadedImages: images, isModalVisible: false })
        }
      })
    }
  };
  onRemoveImageHandler = (key) => {
    const { uploadedImages } = this.state
    let images = [...uploadedImages]
    const filteredImages = images.filter((image, index) => key !== index)
    this.setState({ uploadedImages: filteredImages })
  }

  render() {
    const {
      fullName,
      selectedGender,
      birthDate,
      phoneNumber,
      profession,
      location,
      uploadedImages,
      isModalVisible,
      isSubmitted,
    } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <View style={CustomStyle.flex}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon
              name="md-arrow-back"
              size={30}
              color="black"
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.stepText}>Step 3-4</Text>
        </View>
        <ProgressBar percentage="80" />
        <View style={styles.mainView}>
          <Text style={[CustomStyle.heading, { marginTop: 30 }]}>Create</Text>
          <Text style={CustomStyle.heading}>Your Profile</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 30 }}>
            <CustomTextInput
              label="Full Name"
              placeholder="Full Name"
              onChangeHandler={value => {
                this.handleValueChange('fullName', value);
              }}
              value={fullName}
            />
            {isSubmitted && !fullName && <Text style={CustomStyle.errorMessage}>Please enter your name</Text>}
            <View style={{ marginTop: 10 }}>
              <Text>Gender</Text>
              <View style={[CustomStyle.flex, styles.genderView]}>
                {genders.map((gender, index) => (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => this.handleValueChange('selectedGender', gender)}
                    style={[
                      styles.genderBtn,
                      gender === selectedGender && styles.selectedGender,
                      index === 2 && { borderRightWidth: 0 },
                    ]}>
                    <Text
                      style={[
                        styles.genderText,
                        gender === selectedGender && { color: 'white' },
                      ]}>
                      {gender}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              {isSubmitted && !selectedGender && <Text style={[CustomStyle.errorMessage, { paddingTop: 10 }]}>Please select gender</Text>}
            </View>
            <View style={{ marginVertical: 20 }}>
              <DatePicker
                label="Your Birthday"
                onDateChange={(value) => this.handleValueChange('birthDate', value)}
              />
              {isSubmitted && !birthDate && <Text style={[CustomStyle.errorMessage, { paddingTop: 10 }]}>Please select your birth date</Text>}
            </View>
            <View style={styles.phoneNumberView}>
              <Text>Phone Number</Text>
              <View style={[CustomStyle.flex, { marginTop: 5 }]}>
                <Image source={countryImage} style={styles.flagImage} />
                <Text>+91</Text>
                <TextInput style={{ marginTop: -15 }}
                  onChangeText={(text) => { this.handleValueChange('phoneNumber', text) }}
                  keyboardType="numeric"
                />
              </View>
            </View>
            {isSubmitted && phoneNumber.length < 10 && <Text style={CustomStyle.errorMessage}>Please enter a valid phone number</Text>}
            <CustomTextInput
              label="Email"
              placeholder="Email"
              value="asalheen1997@gmail.com"
              isEditable={false}
            />
            <CustomTextInput
              label="What do you do?"
              placeholder="What do you do?"
              onChangeHandler={value => {
                this.handleValueChange('profession', value);
              }}
              value={profession}
            />
            <View>
              <Text style={styles.locationText}>Current Location</Text>
              <View style={styles.pickerView}>
                <Picker
                  selectedValue={location}
                  showSearch
                  onValueChange={itemValue =>
                    this.handleValueChange('location', itemValue)
                  }
                  style={{ width: '100%' }}>
                  {cities.map(location => (
                    <Picker.Item label={location} value={location} />
                  ))}
                </Picker>
              </View>
              {isSubmitted && !location && <Text style={[CustomStyle.errorMessage, { paddingTop: 10 }]}>Please select your location</Text>}
            </View>
            <View style={styles.borderedView}>
              <Text style={{ color: '#707070' }}>About Me</Text>
              <TextInput
                multiline={true}
                numberOfLines={Platform.OS === 'ios' ? null : 4}
                style={{ textAlignVertical: 'top' }}
                onChangeText={text => this.handleValueChange('userInfo', text)}
              />
            </View>
            <View style={[styles.flexView, { marginVertical: 20 }]}>
              <Text>Your Photos</Text>
              <Text style={{ color: 'red', fontSize: 12, padding: 3 }}>
                (Max 5 photos)
              </Text>
            </View>
            <View style={[CustomStyle.flex, { flexWrap: 'wrap' }]}>
              {uploadedImages.length < 5 && <View style={styles.addImageView}>
                <TouchableOpacity
                  style={styles.addbtn}
                  onPress={this.toggleModalHandler} >
                  <MaterialIcons name="add" size={30} color="#40A8FB" />
                </TouchableOpacity>
              </View>}
              <Modal.BottomModal
                visible={isModalVisible}
                onTouchOutside={this.toggleModalHandler}
                height={0.2}
                width={1}
                onSwipeOut={this.toggleModalHandler}
                modalTitle={<ModalTitle title="Select A Photo" hasTitleBar />}
              >
                <ModalContent
                  style={{
                    flex: 1,
                    backgroundColor: "fff"
                  }}
                >
                  <TouchableOpacity onPress={() => this.uploadImageHandler('camera')}>
                    <Text style={styles.selectPhotoOption}>Take Photo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.uploadImageHandler('external-storage')}>
                    <Text style={styles.selectPhotoOption}>Choose from Library</Text>
                  </TouchableOpacity>
                </ModalContent>
              </Modal.BottomModal>
              {uploadedImages.length > 0 && (
                uploadedImages.map((image, index) => (
                  <View>
                    <Image
                      source={{
                        uri:
                          image.sourceUri
                      }}
                      style={styles.uploadedImage}
                    />
                    <TouchableOpacity style={styles.closeImageIcon} onPress={() => { this.onRemoveImageHandler(index) }}>
                      <AntDesignIcon name="close" size={25} color="white" />
                    </TouchableOpacity>
                  </View>
                ))
              )}
            </View>
            <CustomButton buttonText="NEXT" onPressHandler={this.createProfileHandler} />
          </ScrollView>
        </View>
      </View >
    );
  }
}
const mapStateToProps = state => {
  return {
    // user: state.auth.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);
