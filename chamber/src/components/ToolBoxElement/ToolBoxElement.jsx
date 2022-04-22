import {Svg} from "../Svg/Svg";
import {Tabs} from "../Tabs/Tabs";
import {useState} from "react";

const tabItems = [{text: "All"}, {text: "Layout"}, {text: "Social media"},]

export const ToolBoxElement = ({toolBoxId, setToolBoxes}) => {

    const [selectedTab, setSelectedTab] = useState("All");

    const renderCategoryItem = (text, icon) => {
        return <div className="flex items-center ml-1.5">
            <div className="rounded-md bg-gray-200 p-2 mr-2 h-8 w-8"><Svg icon={icon}/></div>
            <div className="mr-36 font-medium">{text}</div>
        </div>
    }

    const renderCategoryItems = () => {
        if(selectedTab === "All"){
            return <>
                {renderCategoryItem("Text", "textIcon")}
                {renderCategoryItem("Image", "imageIcon")}
                {renderCategoryItem("Video", "playIcon")}
            </>
        } else if(selectedTab === "Social media"){
            return renderCategoryItem("Video", "playIcon")
        } else {
            return <>
                {renderCategoryItem("Text", "textIcon")}
                {renderCategoryItem("Image", "imageIcon")}
            </>
        }
    }

    return <div className="flex flex-col my-8">
        <div className="flex items-center mb-3">
            <button data-testid="closeButton" onClick={() => setToolBoxes(prev => prev.filter(i => i !== toolBoxId))}><Svg icon={"closeIcon"}/></button>
            <div className="ml-4 text-3xl">ToolBox</div>
        </div>
        <Tabs tabItems={tabItems} setSelectedTab={setSelectedTab} selectedTab={selectedTab}/>
        <div className="flex mt-4">
            {renderCategoryItems()}
        </div>
    </div>
}

