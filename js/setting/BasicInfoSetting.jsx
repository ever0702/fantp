import React from 'react';
import {connect} from 'react-redux';
import {fetchUserBasicInfo} from './settingActionReducer';
import BasicInfoSettingForm from './cmps/BasicInforSettingForm';

@connect()
class BasicInfoSetting extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    	this.props.dispatch(fetchUserBasicInfo());
    }
    render() {
        return (
			<div className="basic-info-page">
				<BasicInfoSettingForm></BasicInfoSettingForm>
			</div>
        );
    }
}

export default BasicInfoSetting;
