import React, { Component } from 'react'
import { CarouselActiveImage, CarouselActive, CarouselInterface, CarouselControl, CarouselControlImage, CarouselThumbnailContainer,CarouselThumbnailActive, CarouselThumbnailImage } from'./styled';

class ProductCarousel extends Component {

    state = {
        activeIndex: 0,
        maxIndex: this.props.alternateImages.length,
        nextIndex: 1,
        prevIndex: this.props.alternateImages.length -1,
    }

    movePrev() {
      if (this.state.prevIndex === 0) {
          this.setState({ prevIndex: this.state.maxIndex - 1})
      } else {
          this.setState({ prevIndex: this.state.prevIndex -1});
      }
      if (this.state.activeIndex === 0) {
          this.setState({ activeIndex: this.state.maxIndex - 1})
      } else {
          this.setState({ activeIndex: this.state.activeIndex -1});
      }
      if (this.state.nextIndex === 0) {
          this.setState({ nextIndex: this.state.maxIndex - 1})
      } else {
          this.setState({ nextIndex: this.state.nextIndex -1});
      }
    }

    moveNext() {
      if (this.state.activeIndex === this.state.maxIndex - 1){
        this.setState({ activeIndex: 0 })
      } else {
        this.setState({ activeIndex: this.state.activeIndex + 1 })
        this.setState({ prevIndex: this.state.activeIndex })
        this.setState({ nextIndex: this.state.activeIndex + 2 })
      }

      if (this.state.activeIndex === this.state.maxIndex) {
        this.setState({ activeIndex: this.state.activeIndex + 1 })
        this.setState({ nextIndex: this.state.activeIndex + 1 })
      }
      if (this.state.nextIndex === this.state.maxIndex - 1){
        this.setState({ nextIndex: 0 })
      }
      if (this.state.nextIndex === 0) {
        this.setState({ nextIndex: 0 + 1 })
        this.setState({ prevIndex: this.state.activeIndex })
      }
    }

    render() {

        let activeIndex = this.state.activeIndex;
        let prevIndex = this.state.prevIndex;
        let nextIndex = this.state.nextIndex;
        let prevImageSrc = this.props.alternateImages[prevIndex].image;
        let activeImageSrc = this.props.alternateImages[activeIndex].image;
        let nextImageSrc = this.props.alternateImages[nextIndex].image;

        return (
            <div>
                <CarouselActive>
                    <CarouselActiveImage src={ activeImageSrc } alt="alt text" />
                </CarouselActive>
                <CarouselInterface>
                    <CarouselControl onClick={ this.movePrev.bind(this) }>
                        <CarouselControlImage>
                            <use href="#icon-chevron-left"></use>
                        </CarouselControlImage>
                    </CarouselControl>
                    <CarouselThumbnailContainer>
                        <CarouselThumbnailImage src={ prevImageSrc } alt="alt text" />
                        <CarouselThumbnailActive src={ activeImageSrc } alt="alt text" />
                        <CarouselThumbnailImage src={ nextImageSrc } alt="alt text"/>
                    </CarouselThumbnailContainer>
                    <CarouselControl onClick={ this.moveNext.bind(this) }>
                        <CarouselControlImage>
                            <use href="#icon-chevron-right"></use>
                        </CarouselControlImage>
                    </CarouselControl>
                </CarouselInterface>
            </div>
        )
    }
}

export default ProductCarousel