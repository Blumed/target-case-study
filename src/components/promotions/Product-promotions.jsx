import React from 'react'
import {PromoListItem} from './styled';

const Promotions = props => {
    return props.promo.map( (desc, i) => {
        return (
            <PromoListItem key={i} className="promotion__item">
                <svg className="icon icon-tag">
                    <use href="#icon-tag"></use>
                </svg>{ desc.Description[0].shortDescription }
            </PromoListItem>
        )
    })
}

export default Promotions