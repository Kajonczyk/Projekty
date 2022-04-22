import {v4 as uuidv4} from 'uuid';

import {TabItem} from "./Tab.style";

export const Tab = ({value, handleClick, isActive}) => {

    const inputId = uuidv4();

    return <TabItem htmlFor={inputId} isActive={isActive} className={isActive ? "bg-purple-200 text-purple-800 font-medium" : "bg-gray-100 font-medium text-gray-500"}>
        {value}
        <input type="radio" id={inputId} name="input" onClick={() => handleClick(value)} value={value}/>
    </TabItem>

}