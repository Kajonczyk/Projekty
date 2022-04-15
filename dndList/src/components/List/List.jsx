import {ListItem} from "../ListItem/ListItem";


export const List = ({listItems,removeListElement,moveListItem}) => {

    return <div className="flex items-center justify-center flex-col" data-testid={"listWrapper"}>
        {listItems.map((i, index) => <ListItem removeListElement={removeListElement} key={i.id} item={i}
                                               index={index} moveListItem={moveListItem}/>)}
    </div>
}