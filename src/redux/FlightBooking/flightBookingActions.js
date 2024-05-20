import { ADD_BOOKING, REMOVE_BOOKING } from './actionTypes';

export const flightBooking = (booking) => {
	return {
		type: ADD_BOOKING,
		payload: booking,
	};
};

export const removeBooking = (booking) => {
	return {
		type: REMOVE_BOOKING,
		payload: booking,
	};
};
