import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import useApi from '../Utilities/service';
import { BASE_IMAGE_URL, BASE_URL } from '../Utilities/constant';

export default ({ setSignalIfValid, label, multiple, showMLabel, pField, payload, setPayload, activeStep, count, tabs }) => {
    const config = {
        method: 'get',
        url: `${BASE_URL}categorylist?type=${pField}&catId=${payload['category']}`,
        // You can include other Axios configuration options here
    }
    const { data, loading, error, setConfig } = useApi();

    const [isLarge, setIsLarge] = useState(false);

    useEffect(() => {
        const largeImageThreshold = 124;

        // Function to check if the image is large
        const isImageLarge = (img) => img.naturalWidth > largeImageThreshold || img.naturalHeight > largeImageThreshold;

        // Fetch images from API
        const images = document.querySelectorAll('.avatar-block img');

        // Check image sizes when images load
        const handleImageLoad = () => {
            const isAnyLargeImage = Array.from(images).some(img => isImageLarge(img));
            setIsLarge(isAnyLargeImage);
        };

        // Attach load event listener to each image
        images.forEach(img => {
            img.addEventListener('load', handleImageLoad);
        });
        return () => {
            // Remove event listeners when component unmounts
            images.forEach(img => {
                img.removeEventListener('load', handleImageLoad);
            });
        };
    }, [loading]);


    useEffect(() => {
        setConfig(config)
    }, [pField])

    const signalParent = (isValid) => {
        setSignalIfValid(isValid)
    }

    useEffect(() => {
        if (payload[pField]) {
            signalParent(true)
        }
        else {
            signalParent(false)
        }
    }, [payload[pField]])

    const handleImageClick = (imageId) => {
        const field = payload[pField] || [];
        if (field.includes(imageId)) {
            // If the image is already selected, deselect it
            setPayload({
                ...payload,
                [pField]: field.filter((id) => id !== imageId)
            })
        } else if (field.length < 3) {
            // If less than three images are selected, select the clicked image
            setPayload({
                ...payload,
                [pField]: [...field, imageId]
            })
        }
        // Otherwise, do nothing (limit reached)
    };

    const updatePayload = (val) => {
        if (multiple) {
            handleImageClick(val)
        }
        else {
            setPayload({
                ...payload,
                [pField]: [val]
            })
        }
    }

    return (
        <div className='columns' style={{ position: 'relative' }}>
            {loading && <Loader />}
            <div className='field-header'>
                <label>{label}</label>
                {showMLabel && <p>You can select maximum 3 options!</p>}
                {count && <div className="div27">
                    <span>(</span>
                    <span className="span26">{activeStep + 1}</span>
                    <span>/{count})</span>
                </div>}
            </div>
            <div className='avatar-block'>
                {data && data.data.map((d, index) => {
                    const isActive = payload[pField] && payload[pField].includes(d.id);
                    const sizeClass = isLarge ? 'large' : 'small';

                    return (
                        <div             
                            className={` ${tabs ? 'tab-pills' : ''} ${isActive ? 'active' : ''}`}
                            key={index}
                            onClick={() => updatePayload(d.id)}
                        >
                            {!tabs && <img key={index} className={isLarge ? 'large' : 'small'} src={BASE_IMAGE_URL + d.image} />}
                            <span>{d.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}