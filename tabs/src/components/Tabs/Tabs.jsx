import {TabsWrapper, Underline} from "./Tabs.style";
import {useEffect, useRef, useState, useTransition} from "react";
import {Tab} from "../Tab/Tab";

// type Mode = "underline" | "background"

// interface TabsProps {
//     tabItems: TabItemsData
//     mode: Mode,
//     tabAmount: number,
// }

export const Tabs = ({tabItems, mode, tabSize}) => {

    const [selectedTabIndex, setSelectedTabIndex] = useState(0)
    const [underlineSize, setUnderlineSize] = useState(120);

    const tabRef = useRef(null)

    const [, startTransition] = useTransition()

    const handleClick = (tabId /* :number */) => {
        startTransition(() => {
            setSelectedTabIndex(tabId)
        })
    }

    useEffect(() => {
        if (tabRef.current !== null) {
            setUnderlineSize(tabRef.current.clientWidth);
        }
    }, [tabRef.current])

    return (
        <TabsWrapper>
            {tabItems.map((item, index) =>
                <div key={index} ref={tabRef}>
                    <Tab index={index}
                         tabSize={tabSize}
                         isActive={mode === "background" && selectedTabIndex === index}
                         value={item.name}
                         handleClick={handleClick}/>
                </div>)}
            {mode === "underline" &&
                <Underline data-testid={"tabsUnderline"} size={underlineSize - 40}
                           left={underlineSize * selectedTabIndex}/>}
        </TabsWrapper>
    )
}
