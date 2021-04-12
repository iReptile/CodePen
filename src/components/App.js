import React, { useState } from 'react';
import Editor from './Editor';

function App() {
	const [html, setHtml] = useState('');
	const [css, setCss] = useState('');
	const [javascript, setJavascript] = useState('');
	return (
		<>
			<div className="pane top-pane">
				<Editor 
					language="xml" 
					displayName="HTML" 
					value={html} 
					onChange={setHtml}/>
				<Editor 
					language="css" 
					displayName="CSS" 
					value={css} 
					onChange={setCss}/>
				<Editor 
					language="javascript" 
					displayName="Javascript" 
					value={javascript} 
					onChange={setJavascript}/>
			</div>
			<div className="pane"></div>
			<iframe
				title="output"
				sandbox="allow-scripts"
				frameBorder="0"
				width="100%"
				height="100%"
			/>
				
			
	 	</>
	);
}

export default App;
