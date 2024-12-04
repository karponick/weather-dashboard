import React, { useState } from "react";

const SearchBar = () => {

    const [city, setCity] = useState("");
    const [results, setResults] = useState(null);

    const handleInput = async (event) => {
        setCity(event.target.value);
    };


    const fetchCities = (event) => {
        if (event) {
            event.preventDefault();
        }
        fetch(
            `${process.env.REACT_APP_API_URL}?city_name=${city}`
        )
            .then((response) => {
                if (!response.ok) throw new Error("Error fetching data");
                return response.json();
            })
            .then((data) => {
                setResults(data.response.docs);
                console.log(data);
                console.log(data.response);
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    return (
        <div>
            <h2>Cities</h2>
            <form className="searchCities">
                <input type="text" name="city" id="city" onChange={handleInput} />
                <button onClick={fetchCities}>Search</button>
            </form>
            {results && (
                <div>
                    {results.map((results, index) => (
                        <div key={index}>
                            <h2>{results.name}</h2>
                            <p>{results.country}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;