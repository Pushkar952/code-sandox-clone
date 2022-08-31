import MDEditor from '@uiw/react-md-editor';
import { useState, useEffect, useRef } from 'react';
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';
import './text-editor.css';
interface TextEditorProps {
    cell: Cell;
}
const TextEditor = (props: TextEditorProps) => {
    const cell = props.cell;

    const ref = useRef<HTMLDivElement | null>(null);
    const [editing, setEditing] = useState(false);
    const { updateCell } = useActions();

    useEffect(() => {
        const listener = (event: MouseEvent) => {
            console.log(event.target);
            if (ref.current && event.target && ref.current.contains(event.target as Node)) {
                console.log('element click is inside editor')
                return;
            }
            console.log('element click is outside editor')
            setEditing(false);
        };
        document.addEventListener('click', listener, { capture: true });
        return () => {
            document.removeEventListener('click', listener, { capture: true });
        }
    }, [])
    if (editing) {
        return (
            <div className='text-editor' ref={ref}>
                <MDEditor value={cell.content} onChange={(v = '') => updateCell(cell.id, v || '')} />
            </div>
        );
    }
    return <div className='text-editor card' onClick={() => setEditing(true)}>

        <div className='card-content'>
            <MDEditor.Markdown source={cell.content || "Click to edit"} />
        </div>
    </div>
};

export default TextEditor;