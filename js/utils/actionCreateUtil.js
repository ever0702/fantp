import {get, postJSON, put } from './httpHelper';

const actionConstantHelper = config => {
    let actions = {};

    for (let i of config.sync) {
        actions[i] = i;
    }

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

const asyncActionHelper = ({ dispatch, actionName, startActionPayload, requestPayload,successPayload, successParamName, method ='get', url }) => {
    dispatch({
        type: actionName + '_REQUEST',
        ...startActionPayload
    });

    method = method.toLowerCase();

    if (!successParamName) successParamName = 'data';

    let http = get;
    if (method == 'post') http = postJSON;
    if (method == 'put') http = put;

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
