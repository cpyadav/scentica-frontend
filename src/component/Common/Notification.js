import React, { useEffect, useState } from 'react';

export default ({ status, message }) => {
    const [showHide, setShowHide] = useState('show');

    useEffect(() => {
        setTimeout(() => {
            setShowHide('hide')
        },3000)
    },[])
    return <div className={`notification ${status} ${showHide}`}>{message}</div>
}