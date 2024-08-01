import React, { useState } from 'react';
import '../App.css';

const Ejercitacion = ({ titulo, consigna, videos, pdfs, powerpoints }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`ejercitacion ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
            <h2>{titulo}</h2>
            {isExpanded && (
                <div className="ejercitacion-content">
                    <p dangerouslySetInnerHTML={{ __html: consigna }}></p>
                    <div className="media-container">
                        {videos.map((video, index) => (
                            <iframe key={index} src={video} title={`video-${index}`} allowFullScreen></iframe>
                        ))}
                        {pdfs.map((pdf, index) => (
                            <iframe key={index} src={pdf} title={`pdf-${index}`} allowFullScreen></iframe>
                        ))}
                        {powerpoints.map((ppt, index) => (
                            <iframe key={index} src={ppt} title={`ppt-${index}`} allowFullScreen></iframe>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Ejercitacion;
