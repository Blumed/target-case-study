import React from 'react';
import { QuantityContainer, QuantityInterface, QuantityButtons,  QuantityInteger } from './styled';

const Quantity = () => (
        <QuantityContainer>
            <QuantityInterface>
                <label>quantity:</label>
                <QuantityButtons>

                    <button type="button">
                        <svg>
                            <use href="#icon-minus-round"></use>
                        </svg>
                    </button>

                    <QuantityInteger>0</QuantityInteger>

                    <button type="button">
                        <svg>
                            <use href="#icon-plus-round"></use>
                        </svg>
                    </button>

                </QuantityButtons>
            </QuantityInterface>
        </QuantityContainer>
)

export default Quantity