import React from 'react';
import { Helmet } from "react-helmet";

const SiteMetaData = () => {
    const description = "Teboho's personal website sharing his interests and experience.";
    const image = "/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg"
    const title = "Teboho Personal Site";
    
    return ( 
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            
            {/* OpenGraph tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter Card tags  */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="Teboho" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            

        </Helmet>
     );
}
 
export default SiteMetaData;