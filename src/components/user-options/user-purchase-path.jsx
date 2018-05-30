import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PurchasePathContainer, PurchasePathButton } from './styled';

class PurchasePath extends Component {
    render() {
        let purchasePathController = this.props.purchasingChannelCode;
        const AvailableOnline = (props) => {
            if (purchasePathController === '0' || purchasePathController === '1') {
                return <PurchasePathButton secondary="true" type="button" >ADD TO CART</PurchasePathButton>;
            }
            return null
        }

        const AvailableInStore = (props) => {
            if (purchasePathController === '0' || purchasePathController === '2') {
                return <PurchasePathButton type="button">PICK UP IN STORE</PurchasePathButton>
            }
            return null
        }
        
        return (
            <PurchasePathContainer >
                <AvailableInStore purchasePathController={this.props.purchasingChannelCode} />
                <AvailableOnline purchasePathController={this.props.purchasingChannelCode} />
            </PurchasePathContainer>
        );
    }
}

PurchasePath.propTypes = {
    purchasingChannelCode: PropTypes.string.isRequired,
};

export default PurchasePath
