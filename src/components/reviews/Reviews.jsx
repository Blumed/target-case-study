import React, { Component } from 'react';
import { OverAllContainer, OverallRating, IconRedStarLarge, IconGrayStarLarge, OverallRatingText, ViewAllLink, ReviewsContainer, ReviewTitles, ReviewTitle, ReviewGroup, Review, ReviewRating, IconRedStarSmall, IconGrayStarSmall, ReviewerTitle, ReviewerBody, ReviewerInfo, ReviewerInfoLink } from'./styled';

class Reviews extends Component {
    render() {
        return (
            <div>
                <OverAllContainer>
                    <OverallRating>
                        <IconRedStarLarge><use href="#icon-star"></use></IconRedStarLarge>
                        <IconRedStarLarge><use href="#icon-star"></use></IconRedStarLarge>
                        <IconRedStarLarge><use href="#icon-star"></use></IconRedStarLarge>
                        <IconRedStarLarge><use href="#icon-star"></use></IconRedStarLarge>
                        <IconGrayStarLarge><use href="#icon-star"></use></IconGrayStarLarge>
                        <OverallRatingText>overall</OverallRatingText>
                    </OverallRating>
                    <ViewAllLink href="#0">view all {this.props.totalReviews} reviews</ViewAllLink>
                </OverAllContainer>
                <ReviewsContainer>
                    <ReviewTitles>
                        <ReviewTitle>PRO <br /><span>most helpful 4-5 star review</span></ReviewTitle>
                        <ReviewTitle>CON <br /><span>most helpful 1-2 star review</span></ReviewTitle>
                    </ReviewTitles>
                    <ReviewGroup>
                        <Review>
                            <ReviewRating>
                                <IconRedStarSmall><use href="#icon-star"></use></IconRedStarSmall>
                                <IconRedStarSmall><use href="#icon-star"></use></IconRedStarSmall>
                                <IconRedStarSmall><use href="#icon-star"></use></IconRedStarSmall>
                                <IconRedStarSmall><use href="#icon-star"></use></IconRedStarSmall>
                                <IconRedStarSmall><use href="#icon-star"></use></IconRedStarSmall>
                            </ReviewRating>
                            <ReviewerTitle>Fantastic Blender</ReviewerTitle>
                            <ReviewerBody>This blender works amazingly, and blends within seconds. The single serve cups also work really well for smoothies or protein shakes!</ReviewerBody>
                            <ReviewerInfo>
                                <ReviewerInfoLink href="#0">Eric </ReviewerInfoLink>
                                <span>April 18, 2013</span>
                            </ReviewerInfo>
                        </Review>
                        <Review>
                            <ReviewRating>
                                <IconGrayStarSmall><use href="#icon-star"></use></IconGrayStarSmall>
                                <IconGrayStarSmall><use href="#icon-star"></use></IconGrayStarSmall>
                                <IconGrayStarSmall><use href="#icon-star"></use></IconGrayStarSmall>
                                <IconGrayStarSmall><use href="#icon-star"></use></IconGrayStarSmall>
                                <IconGrayStarSmall><use href="#icon-star"></use></IconGrayStarSmall>
                            </ReviewRating>
                            <ReviewerTitle>Very unhappy</ReviewerTitle>
                            <ReviewerBody>Less than 2 months after purchase it completely stopped working. First it wouldn't detect the pitcher when trying to blend a significant amount, a couple weeks later it wouldn't detect the single serve cup.</ReviewerBody>
                            <ReviewerInfo>
                                <ReviewerInfoLink href="#0">New York </ReviewerInfoLink>
                                <span>March 11, 2013 </span>
                            </ReviewerInfo>
                        </Review>
                    </ReviewGroup>
                </ReviewsContainer>
            </div>
        )
    }

}

export default Reviews