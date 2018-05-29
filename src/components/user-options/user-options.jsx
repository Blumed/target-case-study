import React from 'react';
import { OptionContainer, OptionButton } from './styled';

const UserOptions = () => (
    <OptionContainer>
        <OptionButton type="button">ADD TO REGISTRY</OptionButton>
        <OptionButton spacing="true" type="button">ADD TO LIST</OptionButton>
        <OptionButton spacing="true" type="button">SHARE</OptionButton>
    </OptionContainer>
)

export default UserOptions