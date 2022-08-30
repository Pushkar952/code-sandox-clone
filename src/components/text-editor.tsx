import MDEditor from '@uiw/react-md-editor';
import { useState, useEffect, useRef } from 'react';
import './text-editor.css';

const TextEditor = () => {

    const ref = useRef<HTMLDivElement | null>(null);
    const [value, setValue] = useState("# Header");
    const [editing, setEditing] = useState(false);

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
                <MDEditor value={value} onChange={(v = '') => setValue(v)} />
            </div>
        );
    }
    return <div className='text-editor card' onClick={() => setEditing(true)}>

        <div className='card-content'>
            <MDEditor.Markdown source={value} />
        </div>
    </div>
};

export default TextEditor;