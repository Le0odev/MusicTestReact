import React, { useState } from "react";
import useDebounce from '../useDebounce'

const SearchInput = ({ value, onChange }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const debouncedChange = useDebounce(onChange, 50 );

    function handleChange(event) {
        setDisplayValue(event.target.value);
        debouncedChange(event.target.value);
        console.log(debouncedChange)
        console.log(setDisplayValue)
    }
    return (
        <input className="search" type="search" value= {value} onChange={handleChange} placeholder="Procure músicas/artistas!"/>
    )
    


}

export default SearchInput 