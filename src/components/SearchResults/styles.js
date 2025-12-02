import styled from "styled-components";

const ResultLoading = styled.p`
    color: #fffa00;
    font-size: 50px;
`;

const ResultsDiv = styled.div`
    width: 100%;
    margin: 10px;
`;

const ResultsTitle = styled.h2`
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 300;
`;

const AlbumSection = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, auto);
`;

const AlbumArticle = styled.article`
    justify-self: center;
    text-decoration: none;
`;

const AlbumImg = styled.img`
    border-radius: 30px;

    &:hover {
        transition: 0.3s;
        scale: 1.5;
        
        h2, p {
            display: none;
        }
    }
`;

const AlbumTitle = styled.h2`
    margin: 5px 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
`

export {
    ResultLoading,
    ResultsDiv,
    ResultsTitle,
    AlbumSection,
    AlbumArticle,
    AlbumImg,
    AlbumTitle,
}