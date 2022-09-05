import { useState, useEffect } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler';
import Resizable from './resizable';
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';

interface CodeCellProps {
    cell: Cell;
}

const CodeCell = (props: CodeCellProps) => {
    const cell = props.cell;
    const [code, setCode] = useState('');
    const [err, seErr] = useState('');
    const { updateCell } = useActions();
    useEffect(() => {
        const timer = setTimeout(async () => {
            const output = await bundle(cell.content);
            setCode(output.code);
            seErr(output.err);
        }, 1000);

        return () => {
            clearTimeout(timer);
        }
    }, [cell.content]);


    return (
        <Resizable direction="vertical">
            <div style={{ height: 'calc(100%-10px)', display: 'flex', flexDirection: 'row' }}>
                <Resizable direction="horizontal">
                    <CodeEditor
                        initialvalue={cell.content}
                        onChange={(value) => updateCell(cell.id, value)}
                    />
                </Resizable>
                <Preview code={code} bundlingStatus={err} />
            </div>
        </Resizable>
    );
};

export default CodeCell;
