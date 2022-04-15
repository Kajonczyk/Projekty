import {v4 as uuidv4} from 'uuid';

// interface TabProps {
//     value: string,
//     handleClick: () => void,
//     isActive: boolean,
//     index: number,
//     tabSize: TabSize,
// }

import {TabItem} from "./Tab.style";

export const Tab = ({value, handleClick, isActive, index, tabSize}) => {

    const inputId = uuidv4();

    return <TabItem htmlFor={inputId} isActive={isActive} tabSize={tabSize}>
        {value}
        <input type="radio" id={inputId} onClick={() => handleClick(index)} value={value}/>
    </TabItem>

}