import React from 'react'
import { CustomStyle } from '../utils';

const styles = StyleSheet.create({
    container: {
        width: 56,
        height: 56,
        borderRadius: 28,
    }
})
const CustomIcon = (props) => (
    <View style={[styles.container, props.isActive ? { backgroundColor: CustomStyle.primaryColor } : { borderWidth: 1, borderColor: 'grey' }]}>
        {...props.icon}
    </View>
)

export default CustomIcon