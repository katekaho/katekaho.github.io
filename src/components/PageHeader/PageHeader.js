import React from 'react';
import './PageHeader.css';

function PageHeader(props) {
    return (
        <div>
            <h1 style={{color: props.titleColor}}>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <h2 className="description">{props.description}</h2>
        </div>
    )
}

export default PageHeader;