import React from 'react';
import { QuantityContainer, QuantityInterface, QuantityLabel, QuantityInteger, QuantityButtons, QuantityButton, QuantityIcon } from './styled';

const Quantity = () => (
        <QuantityContainer>
            <QuantityInterface>
                <QuantityLabel>quantity:</QuantityLabel>
                <QuantityButtons>

                    <QuantityButton type="button">
                        <QuantityIcon>
                            <use href="#icon-minus-round"></use>
                        </QuantityIcon>
                    </QuantityButton>

                    <QuantityInteger>0</QuantityInteger>

                    <QuantityButton type="button">
                        <QuantityIcon>
                            <use href="#icon-plus-round"></use>
                        </QuantityIcon>
                    </QuantityButton>

                </QuantityButtons>
            </QuantityInterface>
        </QuantityContainer>
)

export default Quantity