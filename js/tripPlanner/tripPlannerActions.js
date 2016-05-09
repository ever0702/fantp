import {actionConstantHelper, asyncActionHelper} from '../utils/actionCreateUtil';

const tripPlannerActions = actionConstantHelper({
	sync: ['TOGGLE_TRIP_UNIT']
});

const {TOGGLE_TRIP_UNIT} = tripPlannerActions;

const toggleTripUnit = unit => ({
	type: TOGGLE_TRIP_UNIT,
	unit
});

export {tripPlannerActions, toggleTripUnit};
