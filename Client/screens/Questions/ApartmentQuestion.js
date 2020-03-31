import React, { useState } from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { Question } from '../../components';
import Room from "../../components/Room"

const ApartmentQuestion = () => {
    const [apartmentAnswer, setAnswer] = useState(null)
    const handleChange = (index, value) => {
        if (value) {
            setAnswer(index)
        }
        else {
            setAnswer(null)
        }
    }
    console.log("apartmentAnswer>>", apartmentAnswer)
    return (
        <Question questionNumber="1" icon={<MaterialCommunityIcons name="home-city-outline" color="white" size={120} />}
            questionText="How often do you clean your apartment?"
            options={[
                `I don't things clean`, 'Once a month', 'Once a week', 'Every few days'
            ]}
            checkboxHandler={handleChange}
            answer={apartmentAnswer}
        />
    )
}

export default ApartmentQuestion;