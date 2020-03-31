import React, { Component } from 'react';
import { SuccessView } from '../../components';

class CreateProfileSuccessful extends Component {
    render() {
        return (
            <SuccessView
                title="Profile Created!"
                content="Now we have 5 questions will help you match with like minded roommate."
                buttonText="LET'S START"
                onPressHandler=""
                isIconRequired={true}
                // onPressHandler={() => {
                //     this.props.navigation.navigate('Login');
                // }}
            />
        );
    }
}

export default CreateProfileSuccessful;
