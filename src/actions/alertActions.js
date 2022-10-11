import {
    SHOW_ALERT,
    COVER_ALERT
} from '../types'

export function showAlertAction(alert) {
    return (dispatch) => {
        dispatch( createAlert(alert) )
    }
}

const createAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
})

export function coverAlertAction()  {
    return (dispatch) => {
        dispatch( coverAlert() )
    }
}

const coverAlert = () => ({
    type: COVER_ALERT,
})