import { Link } from "react-router-dom";
import { AlbumArticle, AlbumImg, AlbumSection, AlbumTitle, ResultLoading } from "./styles";

const RenderAlbums = ({albums, isLoading, error}) => {
  if (isLoading) return <ResultLoading>Loading...</ResultLoading>;
  
  if (error) return <p>Error loading files</p>

  return (
    <AlbumSection role="grid" aria-label="Albums of the artist">
      {
        albums && albums.map((album) => {
          const {strAlbum, strArtist, idAlbum, strAlbumThumb} = album;

          return (
            <AlbumArticle>
              <Link to={`/SongDetail/${idAlbum}`}>
                <AlbumImg
                  alt={`${strAlbum}-Album-Cover`}
                  src={`${strAlbumThumb}`}
                  width="200"
                  role="img"
                />
              </Link>
              <AlbumTitle aria-label="Title of the album">{strAlbum}</AlbumTitle>
              <p aria-label="Artist name" role="dialog">{strArtist}</p>
            </AlbumArticle>
          );
        })
      }
    </AlbumSection>
  )
};

export default RenderAlbums;