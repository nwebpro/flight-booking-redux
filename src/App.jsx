import { Provider } from 'react-redux';
import AddBookingForm from './components/AddBookingForm';
import BookingTable from './components/BookingTable';
import Header from './components/Header';
import store from './redux/store';

const App = () => {
	return (
		<Provider store={store}>
			<Header />
			<section>
				<AddBookingForm />
				<BookingTable />
			</section>
		</Provider>
	);
};

export default App;
