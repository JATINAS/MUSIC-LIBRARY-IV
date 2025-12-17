import useFetch from "../hooks/useFetch";
import SearchBar from "../SearchBar"
import RenderAlbums from "./Albums";
import { ResultLoading, ResultsDiv, ResultsTitle } from "./styles";

//ESTA ES LA PAGINA PRINCIPAL
                             
const SearchResults = ({artist, setArtist}) => {

  const {albums, isLoading, error} = useFetch(`https://theaudiodb.com/api/v1/json/123/searchalbum.php?s=`, artist);

  if (isLoading) return <ResultLoading>Loading...</ResultLoading>;
  
  if (error) return <p>Error loading files</p>

  return (
    <ResultsDiv>
      <ResultsTitle>Albums</ResultsTitle>
      <section>
        <SearchBar setArtist={setArtist} />
        <RenderAlbums albums={albums} artist={artist} isLoading={isLoading} error={error}/>
      </section>
    </ResultsDiv>
  )
}

//nodemon
export default SearchResults;