import styled from 'styled-components';

export const OverAllContainer = styled.div`
    display: flex;
    padding: 10px;
    justify-content: space-between;
`;

export const OverallRating = styled.div`
    width: 200px;
    display: flex;
`;

export const IconRedStarLarge = styled.svg`
    color: #cc0000;
    width: 30px;
    height: 30px;
    fill: #cc0000;
`;

export const IconGrayStarLarge = styled.svg`
    fill: #ccc;
    color: #ccc;
    width: 30px;
    height: 30px;
`;

export const OverallRatingText = styled.p`
   color: #000;
   font-family: 'Arial', sans-serif;
    font-size: 14px;
    font-weight: bold;
    margin: 10px 0 0 0;
`;

export const ViewAllLink = styled.a`
    display: block;
    color: #000;
    font-size: 14px;
    font-weight: bold;
    margin: 10px 0 0 0;
    text-decoration: none;
    white-space: nowrap;
`;

export const ReviewsContainer = styled.div`
    background-color: #f6f5f5;
`;

export const ReviewTitles = styled.header`
    display: flex;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin: 0 20px 10px;
`;

export const ReviewTitle = styled.h3`
    color: #333;
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
    padding: 10px 0px;
    width: 50%;
`;

export const ReviewGroup = styled.div`
     display: flex;
    margin: 10px 20px;
`;

export const Review = styled.div`
    width: 50%;
    padding-right: 20px;
`;

export const ReviewRating = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const IconRedStarSmall = styled.svg`
    color: #cc0000;
    fill: #cc0000;
    width: 20px;
    height: 20px;
`;

export const IconGrayStarSmall = styled.svg`
    fill: #ccc;
    color: #ccc;
    width: 20px;
    height: 20px;
`;

export const ReviewerTitle = styled.h4`
    color: #000;
    font-family: 'Arial', sans-serif;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const ReviewerBody = styled.p`
    color: #000;
    font-family: 'Arial', sans-serif;
    font-size: 12px;
    font-weight: normal;
`;

export const ReviewerInfo = styled.p`
    color: #333;
    font-family: 'Arial', sans-serif;
    font-size: 12px;
    font-weight: normal;
`;

export const ReviewerInfoLink = styled.a`
    color: #0066cc;
    font-family: 'Arial', sans-serif;
    text-decoration: none;
`;
