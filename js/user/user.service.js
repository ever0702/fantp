import {put} from '../utils/httpHelper';

export const updatePassword = form => {
	return put('/users/session-user/password', form);
};

export const updateBasicInfo = form => {
	return put('/users/session-user', form);
}

export default {updatePassword, updateBasicInfo};
