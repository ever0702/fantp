import HttpCodes from '../../isomorphic/constants/httpCodes';

const {
	BAD_REQUEST,
	UNAUTHORIZED,
	SERVER_ERROR
} = HttpCodes;

const badRequest = (res, body) => res.status(BAD_REQUEST).send(body);

const unauthorized= (res, body) => res.status(UNAUTHORIZED).send(body);

const serviceError = (res, body) => res.status(SERVER_ERROR).send(body);

export {badRequest, unauthorized, serviceError};
