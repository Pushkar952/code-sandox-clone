import { useState, useEffect } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler';
import Resizable from './resizable';

const CodeCell = () => {
    const [code, setCode] = useState('');
    const [err, seErr] = useState('');
    const [input, setInput] = useState('');



    useEffect(() => {
        const timer = setTimeout(async () => {
            const output = await bundle(input);
            setCode(output.code);
            seErr(output.err);
        }, 1000);

        return () => {
            clearTimeout(timer);
        }
    }, [input]);


    return (
        <Resizable direction="vertical">
            <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
                <Resizable direction="horizontal">
                    <CodeEditor
                        initialvalue="const a = 1;"
                        onChange={(value) => setInput(value)}
                    />
                </Resizable>
                <Preview code={code} bundlingStatus={err} />
            </div>
        </Resizable>
    );
};

export default CodeCell;
