import React from "react";
import { Breadcrumb } from 'antd';

export default ({items, activeStep, children}) => {

    const filteredChildren = React.Children.toArray(children).filter((child, index) => {
        return (
            index === activeStep
        )
    })
    
    return (
        <>
            <Breadcrumb
                separator=">"
                items={items}
                linkHoverColor={'#005814'}
                // lastItemColor={'rgba(0, 0, 0, 0.45)'}
            />
            {filteredChildren.map((child, index) => (
                React.cloneElement(child, { key: index, ...items[index] })
            ))}
        </>
    )
}