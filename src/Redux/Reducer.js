import { DISHES } from './../dishes';
import { COMMENTS } from './../Comments';
import { PROMOTIONS } from './../components/promotions';
import { LEADERS } from './../components/leaders';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};