import React from 'react';
import {connect} from 'react-redux';
import Card from '../../commonComponents/Card';

const iconArr = ['car', 'road', 'shopping-cart', 'home', 'futbol-o', 'plane', 'heart'];

@connect(
	state => ({
		flatSteps: state.stepMap.flatSteps
	})
)
class SummaryItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		let {rootId, index, flatSteps, activeNodes} = this.props;
		return (
			<Card className="summary-item">
				<div className="row">
					<div className="col-sm-3 title-col">
						<div className="">{'0'+(index+1)}</div>
						<div className="">{flatSteps[rootId].label}</div>
					</div>
					<div className="col-sm-9 content-col">
						<div className="icon col-sm-2">
							<i className={'fa fa-'+ iconArr[index]}></i>
						</div>
						<div className="content-text col-sm-10">
							
						{
							flatSteps[rootId].descendents
								.filter(dc => activeNodes.indexOf(dc) >= 0)
								.map(id => (<div>{flatSteps[id].label}
										{
											flatSteps[id].subTitle&&
											<span style={{fontFamily:'cursive'}}> ({flatSteps[id].subTitle})</span>
										}
										{flatSteps[id].price!=null
										&&
										<span className="pull-right" style={{marginLeft:20, color:'orange', fontWeight:'bold'}}> ${flatSteps[id].price} </span>
										}
									</div>))
						}
						</div>
						
					</div>
				</div>
			</Card>	
		);
	}

}

export default SummaryItem;
