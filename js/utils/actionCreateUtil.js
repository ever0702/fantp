import {get, post, put, deletex } from './httpHelper';

const actionConstantHelper = config => {
    let actions = {};

    if (config.sync)
        for (let i of config.sync) {
            actions[i] = i;
        }

    if (config.async)
        for (let k of config.async) {
            actions[k] = {
                REQUEST: k + '_REQUEST',
                SUCCESS: k + '_SUCCESS',
                ERROR: k + '_ERROR'
            };
        }

    console.log('created actions', actions)

    return actions;

}

const asyncActionHelper = ({ dispatch, actionName, payload = {}, startActionPayload, requestPayload, successPayload, successParamName = 'data', method = 'get', url }) => {

    startActionPayload = startActionPayload || payload;
    successPayload = successPayload || payload;
    requestPayload = requestPayload || payload;


    dispatch({
        type: actionName + '_REQUEST',
        ...startActionPayload
    });

    method = method.toLowerCase();


    let http = get;
    if (method == 'post') http = post;
    else if (method == 'put') http = put;
    else if (method == 'delete') http = deletex;

    return http(url, requestPayload).then(

        result => dispatch({
            type: actionName + '_SUCCESS',
            [successParamName]: result,
            ...successPayload
        }),
        err => dispatch({
            type: actionName + '_ERROR',
            err
        })
    )


}

export { actionConstantHelper, asyncActionHelper };
