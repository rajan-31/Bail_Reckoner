import React, { useState } from 'react';
import axios from 'axios';

function BailForm() {
    const [offense, setOffense] = useState({});

    const fetchOffense = async () => {
        const response = await axios.get('http://localhost:5000/api/bail/your-offense-id');
        setOffense(response.data);
    };

    return (
        <div>
            <button onClick={fetchOffense}>Fetch Offense Data</button>
            <div>
                {offense && (
                    <div>
                        <p>Name: {offense.name}</p>
                        <p>Penal Code: {offense.penalCode}</p>
                        <p>Bail Eligibility: {offense.bailEligibility ? 'Yes' : 'No'}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BailForm;
