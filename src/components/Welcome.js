import React, {useEffect, useState} from "react";
//import galleryImagesData from "./data/gallery_images.json"

const Welcome = () => {
    const [galleryImagesData, setGalleryImagesData] = useState([]);

    const loadGalleryImagesData = async () => {
        // Query API Gateway
        const response = await fetch("https://kee1b9u4r0.execute-api.us-east-1.amazonaws.com/Production/gallery");
        let json = await response.json();

        // Assign response data to our state variable
        setGalleryImagesData(json.Items);
    };

    useEffect(() => {
        // Load menu links from the API Gateway
        loadGalleryImagesData();
    }, [galleryImagesData.src]);

    return (
        <div className="scene" id="welcome">
            <article className="content">
                <div className="gallery">
                    {
                        galleryImagesData.map((imageInfo, index) => <img key={`gallery-img-${index}`} className={imageInfo.class} src={imageInfo.src} alt={imageInfo.alt} /> )
                    }
                </div>
                <h1>Welcome to the Landon&nbsp;Hotel</h1>
                <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
            </article>
        </div>
    );
}

export default Welcome;