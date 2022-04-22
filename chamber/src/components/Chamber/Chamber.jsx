import {ReactComponent as AddIcon} from "../../assets/addIcon.svg"
import {Svg} from "../Svg/Svg";
import {useState} from "react";
import {ToolBoxElement} from "../ToolBoxElement/ToolBoxElement";
import { v4 as uuidv4 } from 'uuid';

export const Chamber = () => {

    const [isPreview, setIsPreview] = useState(false)
    const [toolBoxes, setToolBoxes] = useState([])

    const renderToolBoxes = () => {
       return  <div className="mt-2">
            <div className="rounded-xl border-2 border-purple-300 border-dotted p-4 mx-12 flex items-center justify-center mb-7">
                <button className="h-4 w-4" onClick={() => setToolBoxes(prev => [uuidv4(),...prev])}><Svg icon={"addIcon"}/></button>
            </div>
            {toolBoxes.map(i => <div key={i} className="ml-12"><ToolBoxElement toolBoxId={i} setToolBoxes={setToolBoxes}/></div>)}
           <div className="rounded-xl border-2 border-purple-300 border-dotted p-4 mx-12 flex items-center justify-center mt-10">
               <button className="h-4 w-4" onClick={() => setToolBoxes(prev => [...prev, uuidv4()])}><Svg icon={"addIcon"}/></button>
           </div>
        </div>
    }


    return (isPreview && toolBoxes.length !== 0) ? renderToolBoxes() : <div className="flex items-center justify-center h-96 bg-purple-100 p-3 m-12 border-4 border-purple-300 border-dotted rounded-xl flex-col">
        <button className="border-0 rounded-md w-8 h-8 bg-fuchsia-300 text-3xl" data-testid="createToolBoxButton" onClick={() => {
            setIsPreview(true)
            setToolBoxes(prev => [...prev, uuidv4()])
        }}><Svg icon={"addIcon"}/></button>
        <div className={"mt-2 text-slate-600 text-base"}>Click to add a Tool here</div>
        <div className={"mt-0 text-slate-500 text-sm "}>Tools help you to build your unique Chamber</div>

    </div>
}