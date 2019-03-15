import { CHANGE_INPUT_VALUE, ADD_ITEM } from './actionTypes'

export function changeInpuValue(value) {
    return {
        type: CHANGE_INPUT_VALUE,
        value,
    }
}

export function addItem() {
    return {
        type: ADD_ITEM
    }
}