import { func } from "prop-types";
import { useState } from "react";
import { useState, useCallback } from "react";


const [count1, setCount1] = useState(0);
const [count2, setCount2] = useState(0);

const incrementByOne = () =>{
    setCount1((prevCount) => prevCount+1);
};

const incrementByFive = () =>{
    setCount2((prevCount) => prevCount+5);
};

return (
    <div className="app">
        <title />
        <ShowCount count={count1} title='Counter 1'/>
        <Button handleClick={incrementByOne}>Increment by one</Button>
        <hr />
        <ShowCount count={count2} title='Counter 2'/>
        <Button handleClick={incrementByFive}>Increment by five</Button>

        

    </div>
);


export default App;



/*

button js:-

import React from "react";


function Button({handleClick, children}){
    console.log(`rendering button ${children}`);


    return(
        <p>
            <button type="button" onClick={handleClick}>
                {children}

            </button>
        </p>
    );
}

export default React.memo(Button);

*/