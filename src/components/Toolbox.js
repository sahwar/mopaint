import React, {Component} from 'react';
import ToolPreview from "./ToolPreview.js";
import './Toolbox.css';

class Toolbox extends Component {
	render() {
		const {tools, selectedTool, selectTool} = this.props;
		return (
			<div className="Toolbox" role="radiogroup">
				{tools.map((tool)=> {
					const selected = selectedTool === tool;
					return (
						<button
							key={tool.name}
							className="Toolbox-tool"
							// TODO: disabled when selected?
							role="radio"
							aria-checked={selected ? "aria-checked" : null}
							onClick={()=> { selectTool(tool); }}
							title={tool.name}
						>
							<ToolPreview
								tool={tool}
								width={48}
								height={48}
							/>
						</button>
					);
				})}
			</div>
		);
	}
}

export default Toolbox;
