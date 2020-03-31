import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { Question } from '../../components';


const GuestQuestion = () => (
    <Question questionNumber="4" icon={<FontAwesome5 name="users" color="white" size={120} />}
        questionText="How about guests?"
        options={[
            'No guests,please!', 'Only during the day', 'No problem!'
        ]}
    />
)
export default GuestQuestion;