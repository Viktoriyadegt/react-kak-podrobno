import React from 'react';
import './App.css';
import {Ratting} from "./components/Ratting/Ratting";
import {Accordion} from "./components/Accordion/Accordion";


function App() {
    return (
        <div>
            <PageTitle title={'This is App component'}/>
            <PageTitle title={'Music'}/>
            <Ratting value={0}/>
            <Ratting value={1}/>
            <Ratting value={2}/>
            <Ratting value={3}/>
            <Ratting value={4}/>
            <Ratting value={5}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <Ratting value={3}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
export const PageTitle = (props: PageTitlePropsType) => {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
