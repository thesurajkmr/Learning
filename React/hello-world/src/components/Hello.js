import React from "react";



const Hello = () => {
// This is with jsx
// it is automatically using the react.createelement property 
// thats why we include react here
    // return (
    //     <div id='hello' className="hello">
    //         <h1>This is the hello component 101</h1>
    //     </div>
    // )


// This is the code without jsx
    return React.createElement(
        'div',
        {id:'hello',className:'hello'},
        React.createElement(
            'h1',
            null,
            'This is the hello component 102'
        )
    )
};

export default Hello;
