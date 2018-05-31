import React, { Component } from 'react';
import { FeatureContainer, FeatureListItem } from './styled';

class Features extends Component {
    
    render() {
        let featuredListItems = this.props.features.map( (features, i) => {
            return <FeatureListItem key={i} dangerouslySetInnerHTML={{__html: features}} />
        })

        return (
            <FeatureContainer>
                <h2>product highlights</h2>
                <ul>
                    { featuredListItems }
                </ul>
            </FeatureContainer>
        )
    }
}
    
export default Features