import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function BodypartsList({ bodypart }) {
    return (
        <option value={bodypart}>{bodypart}</option>
    );
}

//This component fetches the list of body parts from the API and renders a dropdown menu for selecting a body part
//When the user selects a body part, the onBodypartChange function is called with the selected value
function Bodyparts(props) {
    const [bodyparts, setBodyparts] = useState([]);

    useEffect(() => {
        axios.get('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', {
            headers: {
                'X-RapidAPI-Key': '8f999f7937msha25502093813796p1450cejsn27af23693733',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        })
        .then((response) => setBodyparts(response.data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>Select body part: 
            <select onChange={(event) => props.onBodypartChange(event.target.value)}>
            <option value=""> </option>
            {bodyparts.map((bodypart) => (
                <BodypartsList
                    bodypart={bodypart}
                />
            ))}
            </select>
        </div>
    );
}

export default Bodyparts;
