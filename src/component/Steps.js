import React from "react";
import { Breadcrumb } from 'antd';

export default ({items, activeStep, children, setActivePanel, activePanel, setActiveStep}) => {

    if(children.length === activeStep) {
        setActivePanel(activePanel+1);
        setActiveStep(0)
    }

    const filteredChildren = React.Children.toArray(children).filter((child, index) => {
        return (
            index == activeStep
        )
    })

    function itemRender(route) {
        return <span 
            // onClick={() => route.id <= activeStep ? setActiveStep(route.id) : null} 
            onClick={() => setActiveStep(route.id)} 
            className={`${route.id <= activeStep ? 'active' : 'inactive'}`}>{route.title}</span>
      }
    
    return (
        <>
            <Breadcrumb
                separator=">"
                items={items}
                // linkHoverColor={'#005814'}
                rootClassName={'bread-crumb'}
                // lastItemColor={'rgba(0, 0, 0, 0.45)'}
                itemRender={itemRender}
            />
            {filteredChildren.map((child, index) => (
                React.cloneElement(child, { key: index, ...items[index] })
            ))}
        </>
    )
}