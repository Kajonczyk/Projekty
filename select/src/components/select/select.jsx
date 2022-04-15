import {useState} from "react";
import Select from "react-select";

export const CustomSelect = ({options, styles}) => {

    const [selectedOption, setSelectedOption] = useState(options[0]);

    return <Select
            className={"selectComponent"}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={styles}
        />
}