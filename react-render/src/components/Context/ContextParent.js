import React, {useState} from 'react'
import { ChildA, MemoizedChildA} from './ContextChildren';
export const CountContext=React.createContext();
const CountProvider=CountContext.Provider;
export const ContextParent = () => {
    const [count, setcount] = useState(0);
    console.log("Context Parent Render");
    return <>
    <button onClick={()=>setcount(count+1)}>Count is {count}Click</button>
    <CountProvider value={count}>
        <MemoizedChildA/>
    </CountProvider>
    </>
}