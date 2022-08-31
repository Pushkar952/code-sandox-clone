import './add-cell.css';
import { useActions } from '../hooks/use-actions';

interface AddCellProps {
    nextCellId: string;
}

const AddCell = (props: AddCellProps) => {
    const { nextCellId } = props;
    const { insertCellBefore } = useActions();

    return (
        <div>
            <button onClick={() => insertCellBefore(nextCellId, 'code')}>Code</button>
            <button onClick={() => insertCellBefore(nextCellId, 'code')}>Text</button>

        </div>
    )
};
export default AddCell;