import React from 'react';

// Styles
import './styles/base';
import {MainContainer, Column} from './styles/layout';
import  {PromotionsContainer} from './styled';

// Data
import data from './static/services/item-data.json';

// Components
import Header from './components/header/Header';
import ProductCarousel from './components/carousel/Product-carousel';
import Reviews from './components/reviews/Reviews';
import Pricing from './components/pricing/Product-pricing';
import Promotions from './components/promotions/Product-promotions';
import Quantity from './components/user-options/user-quantity';
import PurchasePath from './components/user-options/user-purchase-path';
import Returns from './components/user-agreement/Returns';
import UserOptions from './components/user-options/user-options';
import Features from './components/features/Features';

// Svg Sprite
import IconSprite from './static/icons/Icons';

const App = () => {

  return (
    <MainContainer id="root" className="clear">
      <Column>
        <Header text={data.CatalogEntryView[0].title} />
        <ProductCarousel alternateImages={ data.CatalogEntryView[0].Images[0].AlternateImages } />
      </Column>
      <Column rightSide="true">
        <Pricing text={data.CatalogEntryView[0].Offers[0].OfferPrice[0].formattedPriceValue} />
        <PromotionsContainer>
          <Promotions promo={data.CatalogEntryView[0].Promotions} />
        </PromotionsContainer>
        <Quantity />
        <PurchasePath purchasingChannelCode={data.CatalogEntryView[0].purchasingChannelCode} />
        <Returns markup={data.CatalogEntryView[0].ReturnPolicy[0].legalCopy} />
        <UserOptions />
        <Features features={data.CatalogEntryView[0].ItemDescription[0].features} />
      </Column>
      <Column>
        <Reviews
          overallReview={ data.CatalogEntryView[0].CustomerReview[0].consolidatedOverallRating }
          totalReviews={ data.CatalogEntryView[0].CustomerReview[0].totalReviews }
          proReview={ data.CatalogEntryView[0].CustomerReview[0].Pro }
          conReview={ data.CatalogEntryView[0].CustomerReview[0].Con } />
      </Column>
      <IconSprite />
    </MainContainer>
  );
};

export default App;