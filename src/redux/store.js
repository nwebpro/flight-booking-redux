import { legacy_createStore as createStore } from 'redux';
import flightBookingReducer from './FlightBooking/flightBookingReducer';

const store = createStore(flightBookingReducer);

export default store;
