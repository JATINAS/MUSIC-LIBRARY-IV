import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { SongArticle, SongDetails, SongLoading, SongSubtitle, SongTitle } from "./styles";

const SongDetail = ({artist}) => {
    const {id} = useParams();
    const [songState, setSongState] = useState ([{song: '', isLoading: true, error: null}]);

    useEffect(() => {
        const fetchArtist = async () => {
            try {
                const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/album.php?m=${id}`);
                setSongState({song: response.data.album, isLoading: false, error: null});
            } catch (error) {
                console.log(`error al cargar el songdetail`);
                setSongState({song: "", isLoading: false, error: "Failed to fetch song details"});
            }
        };

        fetchArtist();
    }, []);

    if (songState.isLoading) return <SongLoading>Loading...</SongLoading>
  
    if (songState.error) return <p>Error loading files</p>


    return (
        <SongDetails>
            {
                songState.song && songState.song.map((song) => {
                    const {strAlbum, strArtist, intYearReleased, strAlbumThumb} = song;

                    return (
                        <SongArticle>
                            <img
                                alt={`${strAlbum} Album Cover`}
                                src={`${strAlbumThumb}`}
                                width="500"
                            />
                            <SongTitle>{strAlbum.toUpperCase()}</SongTitle>
                            <SongSubtitle>{strArtist}</SongSubtitle>
                            <SongSubtitle>{intYearReleased}</SongSubtitle>
                            <Link to={`/`}><button>Back</button></Link>
                        </SongArticle>

                        
                    )
                })
            }
        </SongDetails>
    )
}

export default SongDetail;