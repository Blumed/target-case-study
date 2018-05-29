import React from 'react';
import PropTypes from 'prop-types';
import { ReturnsContainer, ReturnsTitle, ReturnPolicy } from './styled';

const Returns = props => {
    return (             
        <ReturnsContainer>
            <ReturnsTitle>returns</ReturnsTitle>
            {/* <p dangerouslySetInnerHTML={{ __html: this.props.markup }} /> */}
            <div>
                <ReturnPolicy>This item must be returned within 30 days of the ship date. See <b>return policy</b> for details.</ReturnPolicy>
                <ReturnPolicy>Prices, promotions, styles and availability may vary by store and online.</ReturnPolicy>
            </div>
        </ReturnsContainer>
    )
}

Returns.propTypes = {
  markup: PropTypes.string.isRequired,
};

export default Returns