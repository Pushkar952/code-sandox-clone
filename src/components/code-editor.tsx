import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { useRef } from "react";
import MonacoEditor from "@monaco-editor/react";
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import './code-editor.css';


interface CodeEditorProps {
    initialvalue: string;
    onChange(value: string): void;
}

const CodeEditor = (props: CodeEditorProps) => {
    const editorRef = useRef<any>();


    // triggered on mount of the editor
    const handleEditorDidMount = (editor: any) => {
        editorRef.current = editor;
        props.onChange(editor.getValue());
    }
    // handles on change event in editor
    const handleEditorChange = (value: any) => {

        props.onChange(value);
    }
    // Format the code using prettier
    const onFormatClick = () => {
        const unformatted = editorRef.current.getValue();

        const formatted = prettier.format(unformatted, { parser: 'babel', plugins: [parser], semi: true, singleQuote: true }).replace(/\n$/, '');
        editorRef.current.setValue(formatted);
    }

    return (
        <div className="editor-wrapper">
            <button className='button button-format is-primary is-small' onClick={onFormatClick}>Format</button>
            <MonacoEditor
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                value={props.initialvalue}
                theme="vs-dark"
                language="javascript"
                height='100%'
                options={{
                    wordWrap: "on",
                    minimap: { enabled: false },
                    showUnused: false,
                    folding: false,
                    lineNumbersMinChars: 3,
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                }}
            />
        </div >
    );
};

export default CodeEditor;