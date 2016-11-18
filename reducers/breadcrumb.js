import {INIT_BREADCRUMB, APPEND_BREADCRUMB, INVOKE_BREADCRUMB} from "../actions/breadcrumb";

export default function counter(state = {}, action) {
    switch (action.type) {
        case INIT_BREADCRUMB:

            return state + 1;
        case APPEND_BREADCRUMB:
            return state - 1;
        case INVOKE_BREADCRUMB:
            return state - 1;
        default:
            return state;
    }
}
