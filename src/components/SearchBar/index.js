import { useState } from "react"
import { NavDiv, NavLabelInput, NavSection, NavTextInput } from "./styles"

const SearchBar = ({setArtist, artist,isLoading, error}) => {
    
    const [searchArtist, setSearchArtist] = useState({search:'', isLoading: true, error: null});

    const handleChange = (e) => {
        const {value} = e.target;
        setSearchArtist(value);    
    }

    const handleSubmit = (e) => {
        if (searchArtist.isLoading) return <p className="loading">Loading...</p>;
  
        if (searchArtist.error) return <p>Error loading files</p>
        e.preventDefault();
        setArtist(searchArtist);    
    }

    

    return (
        <NavSection className="searchBar-section">

                <form onSubmit={handleSubmit}>
                    <NavDiv>
                        <NavLabelInput>Artist:</NavLabelInput>
                        <NavTextInput
                            type="text"
                            name="artist"
                            value={searchArtist.artist}
                            onChange={(e) => handleChange(e)}
                        />
                    </NavDiv>
                    <button type="submit">Search</button>
                </form>

        </NavSection>
    )
}


export default SearchBar;