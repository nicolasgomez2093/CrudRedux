import {
    SHOW_ALERT,
    COVER_ALERT
} from '../types'

const initialState = {
    alert: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                alert: action.payload
            }
        case COVER_ALERT:
            return {
                ...state,
                alert: null
            }
        default:
            return state
    }
}