import React from 'react';

// function Greet(){
//     return <h1>Hello Suraj</h1>;
// }

const Greet=(props)=>{
    const {name,heroName}=props;
    return (
    <div>
        <h1>
            Hello {name} a.k.a. {heroName}
        </h1>
        {/* {props.children} */}
    </div>)
}

export default Greet;


// tut 11
// destructuring is a feature that makes it possible to unpack values
// from arrays and objects to distinct features