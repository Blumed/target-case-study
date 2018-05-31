import React from 'react';
import PropTypes from 'prop-types';
import { ReturnsContainer } from './styled';

const Returns = props => {
    return (             
        <ReturnsContainer>
            <h3>returns</h3>
            {/* <p dangerouslySetInnerHTML={{ __html: this.props.markup }} /> */}
            <div>
                <p>This item must be returned within 30 days of the ship date. See <b>return policy</b> for details.</p>
                <p>Prices, promotions, styles and availability may vary by store and online.</p>
            </div>
        </ReturnsContainer>
    )
}

Returns.propTypes = {
  markup: PropTypes.string.isRequired,
};

export default Returns