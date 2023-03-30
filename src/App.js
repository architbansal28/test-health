import './App.css';
import { useState } from 'react';
import Bodyparts from './Bodyparts';
import Exercises from './Exercises';

//this is the top-level component that renders the Bodyparts and Exercises components
function App() {
    const [data, setData] = useState(null);

    return (
        <div>
            <Bodyparts onBodypartChange={(bodypart) => setData(bodypart)} />
            {data && <Exercises bodypart={data} />}
        </div>
    );
}

export default App;
