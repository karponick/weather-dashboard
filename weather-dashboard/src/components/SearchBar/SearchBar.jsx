import React, { useState } from "react";
import styles from './SearchBar.module.css';

const SearchBar = (props) => {

    const [city, setCity] = useState(""); // city search input
    const [results, setResults] = useState([]);

    // event to handle typing city name
    const handleInput = async (event) => {
        setCity(event.target.value);
    };
    // event to handle clicking on city div
    const handleClick = (event) => {
        const clickedDiv = event.target;
        // console.log("Clicked div:", clickedDiv);
        var selectedIndex = clickedDiv.attributes["name"].value;
        // console.log(results[selectedIndex]);
        props.onCitySelect(results[selectedIndex]);
    };

    // event to send request through proxy server
    const fetchCities = (event) => {
        if (event) {
            event.preventDefault();
        }
        fetch(
            `${process.env.REACT_APP_API_CITY_URL}?city_name=${city}`
        )
            .then((response) => {
                if (!response.ok) throw new Error("Error fetching data");
                // console.log(city);
                return response.json();
            })
            .then((data) => {
                if (data.cod) {
                    setResults([]);
                    throw new Error("No geodata");
                }
                else {
                    setResults(data);
                    // console.log(data);
                }
            })
            .catch((error) => {
                console.error(error.message);
            });
    };
    return (
        <div className={styles.searchBar}>
            <h1>City Search</h1>
            <form>
                <input className={styles.input} type="text" name="city" id="city" onChange={handleInput} onKeyUp={fetchCities} />
                {results.length === 0 ? <p>No results</p> : null}
            </form>
            {results && (
                <div>
                    {results.map((results, index) => (
                        <div key={index}>
                            <div id={"city" + index} name={index} className={styles.city} onClick={handleClick}>{results.name}, {results.state}, {results.country}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default SearchBar;