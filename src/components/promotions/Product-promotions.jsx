import React from 'react'
import {SvgTag,PromoListItem} from './styled';

const Promotions = props => {
    return props.promo.map( (desc, i) => {
        return (
            <PromoListItem key={i} className="promotion__item">
                <SvgTag className="icon icon-tag">
                    <use href="#icon-tag"></use>
                </SvgTag>{ desc.Description[0].shortDescription }
            </PromoListItem>
        )
    })
}

export default Promotions