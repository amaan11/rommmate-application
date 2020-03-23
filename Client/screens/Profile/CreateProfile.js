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
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal, { ModalTitle, ModalContent } from "react-native-modals";
import ImagePicker from 'react-native-image-crop-picker';
import { ProgressBar, CustomTextInput, CustomButton, DatePicker } from '../../components';
import { genders } from '../../utils/data';
import CustomStyle from '../../utils/styles'

const DEVICE_WIDTH = Dimensions.get('window').width
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
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  genderView: {
    borderWidth: 1,
    borderColor: '#40A8FB',
    borderRadius: 5,
    marginTop: 20,
  },
  genderBtn: {
    width: 120,
    height: 40,
    borderRightWidth: 1,
    borderRightColor: '#40A8FB',
    paddingTop: 10,
  },
  genderText: {
    color: '#40A8FB',
    fontSize: 13,
    textAlign: 'center',
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
  }
});
class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: ['Test', 'test1'],
      selectedPlace: [],
      fullName: '',
      selectedGender: '',
      userInfo: '',
      birthDate: '',
      profession: '',
      selectedPlace: '',
      uploadedImages: [],
      isModalVisible: false,
    };
  }
  handleValueChange = (key, value) => {
    this.setState({ [key]: value })
  }
  toggleModalHandler = () => {
    const { isModalVisible } = this.state
    this.setState({ isModalVisible: !isModalVisible })
  }

  createProfileHandler = () => {
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

    const filteredImages = uploadedImages.filter((image, index) => key !== index)

    this.setState({ uploadImages: filteredImages })

  }

  render() {
    const {
      selectedGender,
      locations,
      selectedPlace,
      fullName,
      profession,
      uploadedImages,
      isModalVisible
    } = this.state;

    const email = get(user, 'email', '')

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
          <Text style={styles.stepText}>Step 4-5</Text>
        </View>
        <ProgressBar percentage="80" />
        <View style={styles.mainView}>
          <Text style={[styles.heading, { marginTop: 30 }]}>Create</Text>
          <Text style={styles.heading}>Your Profile</Text>
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
            <View style={{ marginTop: 10 }}>
              <Text>Gender</Text>
              <View style={[styles.flexView, styles.genderView]}>
                {genders.map((gender, index) => (
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => this.handleValueChange('gender', gender)}
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
            </View>
            <DatePicker
              label="Your Birthday"
              onDateChange={() => this.handleValueChange('birthDate', value)}
            />
            <CustomTextInput
              label="Email"
              placeholder="Email"
              value={email}
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
              <Text style={styles.locationText}>Where do you work?</Text>
              <View style={styles.pickerView}>
                <Picker
                  selectedValue={selectedPlace}
                  onValueChange={itemValue =>
                    this.handleValueChange('selectedPlace', itemValue)
                  }
                  style={styles.picker}>
                  {locations.map(location => (
                    <Picker.Item label={location} value={location} />
                  ))}
                </Picker>
              </View>
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
            <View style={[styles.flexView, { flexWrap: 'wrap' }]}>

              <View style={styles.addImageView}>
                <TouchableOpacity
                  style={styles.addbtn}
                  onPress={this.toggleModalHandler} >
                  <MaterialIcons name="add" size={30} color="#40A8FB" />
                </TouchableOpacity>
              </View>
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
                uploadedImages.map(image => (
                  <Image
                    source={{
                      uri:
                        image.sourceUri
                    }}
                    style={styles.uploadedImage}
                  />
                ))

              )}
            </View>
            <CustomButton buttonText="NEXT" onPressHandler={this.handleSubmit} onPressHandler={this.createProfileHandler} />
          </ScrollView>
        </View>
      </View >
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}
const mapDispatchToProps = dispatch => {
  // return {

  // }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);
