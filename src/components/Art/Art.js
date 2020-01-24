import React from 'react';
import './Art.css';
import PageHeader from '../PageHeader/PageHeader';

function Art(props) {
    return (
        <div className="text-container">
            <PageHeader 
                titleColor={props.titleColor}
                title="Art"
                subtitle="Painting and more"
                description="In my free time I like to dabble in creating art. Here are some of my past works."
            />
        </div>
    )
}

export default Art;