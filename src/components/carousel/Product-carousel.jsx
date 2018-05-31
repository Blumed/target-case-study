import React, { Component } from 'react'
import { CarouselActive, CarouselInterface, CarouselThumbnailContainer } from'./styled';

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
                    <img src={ activeImageSrc } alt="alt text" />
                </CarouselActive>
                <CarouselInterface>
                    <button onClick={ this.movePrev.bind(this) }>
                        <svg>
                            <use href="#icon-chevron-left"></use>
                        </svg>
                    </button>
                    <CarouselThumbnailContainer>
                        <img src={ prevImageSrc } alt="alt text" />
                        <img classname="carousel-active-thumb" src={ activeImageSrc } alt="alt text" />
                        <img src={ nextImageSrc } alt="alt text"/>
                    </CarouselThumbnailContainer>
                    <button onClick={ this.moveNext.bind(this) }>
                        <svg>
                            <use href="#icon-chevron-right"></use>
                        </svg>
                    </button>
                </CarouselInterface>
            </div>
        )
    }
}

export default ProductCarousel