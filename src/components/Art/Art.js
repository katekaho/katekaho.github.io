import React from 'react';
import './Art.css';
import PageHeader from '../PageHeader/PageHeader';
import ImageGallery from 'react-image-gallery';

  
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const pictures = importAll(require.context('./artImages', false, /\.(png|jpe?g|svg)$/));


function Art(props) {
    
const images = [
    {
        original: pictures['Shiny Bird.jpg'],
        thumbnail: pictures['Shiny Bird.jpg'],
        originalAlt: 'Shiny Bird',
        thumbnailAlt: 'Shiny Bird',
        originalTitle: 'Shiny Bird',
        description: 'Shiny Bird - CDs, newspaper'
    },
    {
        original: pictures['18- Self-Portrait -2016.jpg'],
        thumbnail: pictures['18- Self-Portrait -2016.jpg'],
        originalAlt: 'Self Portrait',
        thumbnailAlt: 'Self Portrait',
        originalTitle: 'Self Portrait',
        description: 'Self Portrait - Acrylic on canvas'
    },
    {
        original: pictures['17- Peace and Quiet -2016.jpg'],
        thumbnail: pictures['17- Peace and Quiet -2016.jpg'],
        originalAlt: 'Peace and Quiet',
        thumbnailAlt: 'Peace and Quiet',
        originalTitle: 'Peace and Quiet',
        description: 'Peace and Quiet - Acrylic on canvas'
    },
    {
        original: pictures['16- Give Me a Second -2016.jpg'],
        thumbnail: pictures['16- Give Me a Second -2016.jpg'],
        originalAlt: 'Give Me a Second',
        thumbnailAlt: 'Give Me a Second',
        originalTitle: 'Give Me a Second',
        description: 'Give Me a Second - Acrylic on canvas'
    },
    {
        original: pictures['15- Feeling Bitter -2016.jpg'],
        thumbnail: pictures['15- Feeling Bitter -2016.jpg'],
        originalAlt: 'Feeling Bitter',
        thumbnailAlt: 'Feeling Bitter',
        originalTitle: 'Feeling Bitter',
        description: 'Feeling Bitter - Acrylic on canvas'
    },
    {
        original: pictures['13- Orange Road -2015.jpg'],
        thumbnail: pictures['13- Orange Road -2015.jpg'],
        originalAlt: 'Orange Road',
        thumbnailAlt: 'Orange Road',
        originalTitle: 'Orange Road',
        description: 'Orange Road - Acrylic on canvas'
    },
    {
        original: pictures['12- Drifting Spirits -2015.jpg'],
        thumbnail: pictures['12- Drifting Spirits -2015.jpg'],
        originalAlt: 'Drifting Spirits',
        thumbnailAlt: 'Drifting Spirits',
        originalTitle: 'Drifting Spirits',
        description: 'Drifting Spirits - Acrylic on canvas'
    },
    {
        original: pictures['11- Piano Room -2015.jpg'],
        thumbnail: pictures['11- Piano Room -2015.jpg'],
        originalAlt: 'Piano Room',
        thumbnailAlt: 'Piano Room',
        originalTitle: 'Piano Room',
        description: 'Piano Room - Acrylic on canvas'
    },
    {
        original: pictures['10- The Enforcer -2015.jpg'],
        thumbnail: pictures['10- The Enforcer -2015.jpg'],
        originalAlt: 'The Enforcer',
        thumbnailAlt: 'The Enforcer',
        originalTitle: 'The Enforcer',
        description: 'The Enforcer - Acrylic and oil on canvas'
    },
    {
        original: pictures['9- Into the Wilderness -2014.jpg'],
        thumbnail: pictures['9- Into the Wilderness -2014.jpg'],
        originalAlt: 'Into the Wilderness',
        thumbnailAlt: 'Into the Wilderness',
        originalTitle: 'Into the Wilderness',
        description: 'Into the Wilderness - Acrylic on canvas'
    },
    {
        original: pictures['8- The White Stag -2014.jpg'],
        thumbnail: pictures['8- The White Stag -2014.jpg'],
        originalAlt: 'The White Stag',
        thumbnailAlt: 'The White Stag',
        originalTitle: 'The White Stag',
        description: 'The White Stag - Acrylic on canvas'
    },
    {
        original: pictures['7- Invasion -2014.jpg'],
        thumbnail: pictures['7- Invasion -2014.jpg'],
        originalAlt: 'Invasion',
        thumbnailAlt: 'Invasion',
        originalTitle: 'Invasion',
        description: 'Invasion - Acrylic on canvas'
    },
    {
        original: pictures['6- Enclosed -2014.jpg'],
        thumbnail: pictures['6- Enclosed -2014.jpg'],
        originalAlt: 'Enclosed',
        thumbnailAlt: 'Enclosed',
        originalTitle: 'Enclosed',
        description: 'Enclosed - Acrylic on canvas'
    },
    {
        original: pictures['5- Tea Time -2014.jpg'],
        thumbnail: pictures['5- Tea Time -2014.jpg'],
        originalAlt: 'Tea Time',
        thumbnailAlt: 'Tea Time',
        originalTitle: 'Tea Time',
        description: 'Tea Time - Acrylic on canvas'
    },
    {
        original: pictures['4- Artemis -2014.jpg'],
        thumbnail: pictures['4- Artemis -2014.jpg'],
        originalAlt: 'Artemis',
        thumbnailAlt: 'Artemis',
        originalTitle: 'Artemis',
        description: 'Artemis - Acrylic on canvas'
    },
    {
        original: pictures['3- Death Birth -2014.jpg'],
        thumbnail: pictures['3- Death Birth -2014.jpg'],
        originalAlt: 'Death Birth',
        thumbnailAlt: 'Death Birth',
        originalTitle: 'Death Birth',
        description: 'Death Birth - Acrylic on canvas'
    },
    {
        original: pictures['2- The Follower -2013.jpg'],
        thumbnail: pictures['2- The Follower -2013.jpg'],
        originalAlt: 'The Follower',
        thumbnailAlt: 'The Follower',
        originalTitle: 'The Follower',
        description: 'The Follower - Acrylic on canvas'
    },
    {
        original: pictures['1- Don\'t Look Back -2013.jpg'],
        thumbnail: pictures['1- Don\'t Look Back -2013.jpg'],
        originalAlt: 'Don\'t Look Back',
        thumbnailAlt: 'Don\'t Look Back',
        originalTitle: 'Don\'t Look Back',
        description: 'Don\'t Look Back - Acrylic on canvas'
    },
    {
        original: pictures['Peace Out.jpg'],
        thumbnail: pictures['Peace Out.jpg'],
        originalAlt: 'Peace Out',
        thumbnailAlt: 'Peace Out',
        originalTitle: 'Peace Out',
        description: 'Peace Out - Scratch paper'
    },
    {
        original: pictures['Self Cubism.jpg'],
        thumbnail: pictures['Self Cubism.jpg'],
        originalAlt: 'Self Cubism',
        thumbnailAlt: 'Self Cubism',
        originalTitle: 'Self Cubism',
        description: 'Self Cubism - Crayon on paper'
    },
    {
        original: pictures['Mak.jpg'],
        thumbnail: pictures['Mak.jpg'],
        originalAlt: 'Mak',
        thumbnailAlt: 'Mak',
        originalTitle: 'Mak',
        description: 'Mak - Acrylic on paper'
    },
    {
        original: pictures['Let Me Sit.jpg'],
        thumbnail: pictures['Let Me Sit.jpg'],
        originalAlt: 'Let Me Sit',
        thumbnailAlt: 'Let Me Sit',
        originalTitle: 'Let Me Sit',
        description: 'Let Me Sit - Graphite on paper'
    },
    ];
    return (
        <div className="text-container">
            {/* <img src={CDBird}/> */}
            <PageHeader 
                titleColor={props.titleColor}
                title="Art"
                subtitle="Painting and more"
                description="In my free time I like to dabble in creating art. Here are some of my past works."
            />
            <ImageGallery items={images} className="image-gallery" showPlayButton={false}/>
        </div>
    )
}

export default Art;