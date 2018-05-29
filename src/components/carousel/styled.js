import styled from 'styled-components';

export const CarouselActive = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 50px auto 70px auto;
    text-align: center;
`;

export const CarouselActiveImage = styled.img`
    width: 100%;
    max-width: 100%;
    height: auto;
    
`;

export const CarouselInterface = styled.div`
    width: 360px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CarouselControl = styled.button`
    width: 40px;
    height: 40px;
    position: relative;
    border: 0;
    background-color: transparent;
`;

export const CarouselControlImage = styled.svg`
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    color: #666;
    fill: #666;

`;

export const CarouselThumbnailContainer = styled.div`
    margin: 20px auto;
    width: 100%;
    max-width: 500px;
`;

export const CarouselThumbnailActive = styled.img`
    border: 1px solid #999;
    border-radius: 5px;
    width: 60px;
    height: auto;
    margin: 0 2%;
`;

export const CarouselThumbnailImage = styled.img`
    width: 60px;
    height: auto;
`;

