import React, { useState } from "react";
import styles from './SearchBar.module.css';

const SearchBar = () => {

    const [city, setCity] = useState("");
    const [results, setResults] = useState([]);

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
                console.log(city);
                return response.json();
            })
            .then((data) => {
                if (data.cod) throw new Error("No geodata");
                else {
                    setResults(data);
                    console.log(data);
                }
            })
            .catch((error) => {
                console.error(error.message);
            });
    };
    return (
        <div>
            <h1>Cities</h1>
            <form>
                <input className={styles.searchBar} type="text" name="city" id="city" onChange={handleInput} onKeyUp={fetchCities} />

            </form>
            {results && (
                <div>
                    {results.map((results, index) => (
                        <div key={index}>
                            <div id={"city" + index} className={styles.city} onClick={checkDetails(index)}>{results.name}, {results.state}, {results.country}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
function checkDetails(id) {
    // console.log(id);
}
export default SearchBar;