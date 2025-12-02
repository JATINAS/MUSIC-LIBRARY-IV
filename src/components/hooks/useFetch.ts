import { useEffect, useState } from "react";
import axios from "axios";

                                                        //FETCH PARA BUSCAR ALBUMES 
type Album = {
    idAlbum: number;
    idArtist: number;
    strAlbum: string;
    strArtist: string;
}

type Fetch = {
    albums: Album[];
    isLoading: Boolean;
    error: string | null;
}

type SearchState = {
    artist: string | null;
}

//const artist_name = "ava max";

const useFetch = (URL: string, artist_name: SearchState) => {
    
    const [albumState, setAlbumstate] = useState<Fetch>({albums: [], isLoading: true, error: null});

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                //console.log('useFetch',{artist_name});
                const response = await axios.get(`${URL}${artist_name}`);
//console.log(response.data.album);
                setAlbumstate({albums: response.data.album, isLoading: false, error: null});
            } catch (error) {
                setAlbumstate({albums: [], isLoading: false, error: "Failed to fetch Albums"});
                //console.log("Fallido");
            }
        };

        fetchAlbum();
    }, [artist_name]);

    return albumState;
};

export default useFetch;