import React from 'react'
import Proptypes from 'prop-types'
import { ActivityIndicator } from 'react-native'
import Modal from "react-native-modals";

const Loader = ({ isVisible }) => (
    <Modal
        visible={isVisible}
        onTouchOutside={() => {
            this.setState({ visible: false });
        }}
        width="0.65"
        height="0.1"
    >
        <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1 }} />

    </Modal >
)
Loader.propTypes = {
    isVisible: Proptypes.bool.isRequired
}
Loader.defaultProps = {
    isVisible: false
}
export default Loader