import React, { Component } from 'react';
import { FeatureContainer, FeatureTitle, FeatureList, FeatureListItem } from './styled';

class Features extends Component {
    
    render() {
        let featuredListItems = this.props.features.map( (features, i) => {
            return <FeatureListItem key={i} dangerouslySetInnerHTML={{__html: features}} />
        })

        return (
            <FeatureContainer>
                <FeatureTitle>product highlights</FeatureTitle>
                <FeatureList>
                    { featuredListItems }
                </FeatureList>
            </FeatureContainer>
        )
    }
}
    
export default Features