import './cell-list.css';
import { Fragment } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";
import AddCell from '../components/add-cell';


const CellList = () => {

    const cellsList = useTypedSelector(({ cells: { order, data } }) => {
        return order.map(id => data[id]);
    });

    const renderedCells = cellsList.map((cell) =>
        <Fragment key={cell.id}>
            <CellListItem key={cell.id} cell={cell} />
            <AddCell previousCellId={cell.id} />
        </Fragment>
    );

    return (<div className='cell-list'>
        <AddCell forceVisible={cellsList.length === 0}
            previousCellId={null} />
        {renderedCells}
    </div>
    );
}
export default CellList;