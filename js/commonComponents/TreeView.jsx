import React from 'react';
import {connect} from 'react-redux';


@connect()
class TreeView extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		let {treeData, NodeTmp, iconClick, ...rest} = this.props;
		return (
				<div className="container bg-purple">
					<h3>A tree</h3>
					{JSON.stringify(this.props)}
					{
						treeData.map(tr => (
								<div key={tr.id} onClick={ e => {
									e.stopPropagation();
									iconClick(tr);
								}}>
									<div  className="bg-blue">{tr.label}</div>
									<NodeTmp label='ddd' />
									{
										tr.subSteps && tr.expand &&
										<TreeView {...this.props} treeData={tr.subSteps}/>
									}
								</div>
							))
					}
				</div>
			);
		}
}

export default TreeView;
