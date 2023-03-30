import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ExercisesList({ id, name, bodyPart, equipment, target, gifUrl }) {
    return (
        <li key={id}>
            <h3>{name}</h3>
            <p>Body part: {bodyPart}</p>
            <p>Equipment: {equipment}</p>
            <p>Target: {target}</p>
            <img src={gifUrl} alt={name} />
        </li>
    );
}

//This component receives the selected body part as a prop and fetches the list of exercises for that body part from the API
//It then renders the list of exercises as a bulleted list
function Exercises(props) {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        axios.get(`https://exercisedb.p.rapidapi.com/exercises/name/${props.bodypart}`, {
            headers: {
                'X-RapidAPI-Key': '8f999f7937msha25502093813796p1450cejsn27af23693733',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        })
        .then((response) => setExercises(response.data))
        .catch(error => console.error(error));
    }, [props.bodypart]);

    return (
        <div>
        <ul>
        {exercises.map((exercise) => (
            <ExercisesList
                id={exercise.id}
                name={exercise.name}
                bodyPart={exercise.bodyPart}
                equipment={exercise.equipment}
                target={exercise.target}
                gifUrl={exercise.gifUrl}
            />
        ))}
        </ul>
        </div>
    );
}

export default Exercises;
