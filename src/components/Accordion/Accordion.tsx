import React from 'react';

type AccordionType = {
    titleValue: string
    collapsed: boolean
}
export const Accordion = (props: AccordionType) => {
    return (
        props.collapsed
            ? <div>
                <AccordionTitle title={props.titleValue}/>
        </div>
            :
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
    )
};

type AccordionTitlePropsType = {
    title: string
}
export const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3>{props.title}</h3>
    )
}

export const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


