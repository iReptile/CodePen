import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import CodeMirror from 'codemirror';
import emmet from '@emmetio/codemirror-plugin';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';
emmet(CodeMirror);


export default function Editor(props) {
    const { language, displayName, value, onChange } = props;
    const [open, setOpen] = useState(true);

    function handleChange(editor, data, value) {
        onChange(value);
    }

    return (
            <div className={`editor-container ${open ? '' : 'collapsed'}`}>
                <div className="editor-title">
                    { displayName }
                    <button
                        type="button"
                        className="expand-collapse-btn"
                        onClick={() => setOpen(prevOpen => !prevOpen)}
                    >
                        <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                    </button>
                </div>
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: "monokai",
                    lineNumbers: true,
                    indentUnit: 4,
                    extraKeys: {
                        Tab: 'emmetExpandAbbreviation',
                        Esc: 'emmetResetAbbreviation',
                        Enter: 'emmetInsertLineBreak'
                    },
                    emmet: {
                        preview: false
                    }
                }}
            />
        </div>
    )
};