import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Question } from '../../components';


const SmokeQuestion = () => (
    <Question questionNumber="2" icon={<MaterialIcons name="smoke-free" color="white" size={120} />}
        questionText="Do you smoke?"
        options={['Yes', 'No']}
    />
)
export default SmokeQuestion;