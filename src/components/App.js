import React from 'react';
import Header from './Header';
import Button from './Button';

const App = () => {
    return (
        <div>
            <Header />
            <Button text="Let's begin" bgColor='#A27B5C'/>
            <Button text="Login" bgColor='#3F4E4F'/>
        </div>
    );
}

export default App;