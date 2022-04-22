import {TabsWrapper} from "./Tabs.style";
import {useTransition} from "react";
import {Tab} from "../Tab/Tab";

export const Tabs = ({tabItems, setSelectedTab, selectedTab}) => {

    return (
        <TabsWrapper>
            {tabItems.map((item, index) =>
                <div key={index}>
                    <Tab isActive={selectedTab === item.text}
                        value={item.text}
                        handleClick={setSelectedTab}/>
                </div>)}
        </TabsWrapper>
    )
}
