import { Cell } from "../state";
import CodeCell from "../components/code-cell";
import TextEditor from "../components/text-editor";
import ActionBar from "../components/action-bar";
import './cell-list-item.css';

interface CellListItemProps {
    cell: Cell;
}

const CellListItem = (props: CellListItemProps) => {
    const { cell } = props;
    let child: JSX.Element;
    if (cell.type === 'code') {
        child = <>
            <div className="action-bar-wrapper">
                <ActionBar id={cell.id} />
            </div>
            <CodeCell cell={cell} />
        </>
    }
    else {
        child = <>
            <TextEditor cell={cell} />
            <ActionBar id={cell.id} />
        </>

    }
    return <div className="cell-list-item">
        {child}

    </div>
}

export default CellListItem;