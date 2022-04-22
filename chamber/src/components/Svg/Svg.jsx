import {ReactComponent as AddIcon} from "../../assets/addIcon.svg"
import {ReactComponent as CloseIcon} from "../../assets/closeIcon.svg"
import {ReactComponent as ImageIcon} from "../../assets/imageIcon.svg"
import {ReactComponent as PlayIcon} from "../../assets/playIcon.svg"
import {ReactComponent as TextIcon} from "../../assets/textIcon.svg"

export const Svg = ({icon}) => {

    switch(icon){
        case "addIcon": {
            return <AddIcon/>
        }
        case "closeIcon": {
            return <CloseIcon/>
        }
        case "playIcon": {
            return <PlayIcon/>
        }
        case "imageIcon": {
            return <ImageIcon/>
        }
        case "textIcon": {
            return <TextIcon/>
        }
    }
}