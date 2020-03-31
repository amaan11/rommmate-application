import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Question } from '../../components';


const PetQuestion = () => (
    <Question questionNumber="3" icon={<MaterialIcons name="pets" color="white" size={120} />}
        questionText="How do you feel about pets?"
        options={[
            'No pets please', 'Depend on the pet', `No pets myself,but I don't mind living with them`, 'I live with pet of my own!'
        ]}
    />
)
export default PetQuestion;