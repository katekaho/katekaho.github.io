import React from 'react';
import './Art.css';
import PageHeader from '../PageHeader/PageHeader';
import BottomNav from '../BottomNav/BottomNav';

function Art(props) {
    return (
        <div className="text-container">
            <PageHeader 
                titleColor={props.titleColor}
                title="Art"
                subtitle="Painting and more"
                description="In my free time I like to dabble in creating art. Here are some of my past works."
            />
            <BottomNav currentPage="art"/>
        </div>
    )
}

export default Art;