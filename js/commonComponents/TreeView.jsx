import React from 'react';
import {connect} from 'react-redux';


@connect()
class TreeView extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		let {treeData, NodeTmp, iconClick, ...rest} = this.props;
		console.log(NodeTmp)
		console.log(iconClick);

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
									<div  className="bg-blue">{tr.id}</div>
									<NodeTmp label='ddd' />
									{
										tr.children && tr.expand &&
										<TreeView {...this.props} treeData={tr.children}/>
									}
								</div>
							))
					}
				</div>
			);
		}
}

export default TreeView;
