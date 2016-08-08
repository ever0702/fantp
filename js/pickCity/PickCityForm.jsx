import React from 'react';
import {connect} from 'react-redux';
import Card from '../commonComponents/Card'
import colors from '../styleRoot'


@connect(state => ({

}))
export default class PickCityForm extends React.Component {
	constructor(props){
		super(props)
		this.state = {cities: [{
			id: 'la',
			active: false,
			name: 'Los Angeles'
		}, {
			id: 'sf',
			active: false,
			name: 'San Francisco'
		}]}
		this.toggleCity = this.toggleCity.bind(this)
	}

	toggleCity(city) {

		console.log(city, 'is toggled')
		var cp = {...this.state}
		var found = cp.cities.find(c => c.id == city.id)
		found.active = !!!found.active
		console.log(cp)
		this.setState(cp)

	}

	render() {
		console.log(this.state)
		const cls = city => 'btn btn-xs city-btn ' + city.active? 'btn-success': 'btn-default'
		return (
			<Card title="">
				城市：{this.state.cities.map(city => <button onClick={e => this.toggleCity(city)} style={{background: city.active?colors.green: colors.lightdark}} className="btn btn-xs btn-default city-btn">{city.name}</button>)}
			</Card>
			)
		
	}
}
