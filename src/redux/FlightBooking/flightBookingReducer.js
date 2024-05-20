import { ADD_BOOKING, REMOVE_BOOKING } from './actionTypes';

export const initialState = {
	bookings: [],
};

const flightBookingReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_BOOKING:
			return {
				...state,
				bookings: [...state.bookings, action.payload],
			};
		case REMOVE_BOOKING:
			return {
				...state,
				bookings: state.bookings.filter(
					(booking) => booking.id !== action.payload
				),
			};
		default:
			return state;
	}
};

export default flightBookingReducer;
