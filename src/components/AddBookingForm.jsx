import user from '../assets/icons/user.svg';
import location from '../assets/icons/location.svg';
import beg from '../assets/icons/beg.svg';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { flightBooking } from '../redux/FlightBooking/flightBookingActions';

const AddBookingForm = () => {
	const { register, handleSubmit, reset } = useForm();
	const bookings = useSelector((state) => state.bookings);

	const dispatch = useDispatch();
	const addBooking = (data) => {
		const id = nanoid();
		const bookingData = {
			id,
			form: data['lws-from'],
			to: data['lws-to'],
			date: data['lws-date'],
			guests: data['lws-guests'],
			class: data['lws-ticketClass'],
		};
		dispatch(flightBooking(bookingData));
		reset();
	};
	return (
		<div className="mt-[160px] mx-4 md:mt-[160px] relative">
			<div className="bg-white rounded-md max-w-6xl w-full mx-auto">
				<form
					className="first-hero lws-inputform"
					onSubmit={handleSubmit(addBooking)}
				>
					<div className="des-from">
						<p>Destination From</p>
						<div className="flex flex-row">
							<img src={location} alt="" />
							<select
								className="outline-none px-2 py-2 w-full"
								name="from"
								id="lws-from"
								required
								{...register('lws-from')}
							>
								<option value="" hidden>
									Please Select
								</option>
								<option>Dhaka</option>
								<option>Sylhet</option>
								<option>Saidpur</option>
								<option>Cox&apos;s Bazar</option>
							</select>
						</div>
					</div>

					<div className="des-from">
						<p>Destination To</p>
						<div className="flex flex-row">
							<img src={location} alt="" />
							<select
								className="outline-none px-2 py-2 w-full"
								name="to"
								id="lws-to"
								required
								{...register('lws-to')}
							>
								<option value="" hidden>
									Please Select
								</option>
								<option>Dhaka</option>
								<option>Sylhet</option>
								<option>Saidpur</option>
								<option>Cox&apos;s Bazar</option>
							</select>
						</div>
					</div>

					<div className="des-from">
						<p>Journey Date</p>
						<input
							type="date"
							className="outline-none px-2 py-2 w-full date"
							name="date"
							id="lws-date"
							required
							{...register('lws-date')}
						/>
					</div>

					<div className="des-from">
						<p>Guests</p>
						<div className="flex flex-row">
							<img src={user} alt="" />
							<select
								className="outline-none px-2 py-2 w-full"
								name="guests"
								id="lws-guests"
								{...register('lws-guests')}
								required
							>
								<option value="" hidden>
									Please Select
								</option>
								<option value="1">1 Person</option>
								<option value="2">2 Persons</option>
								<option value="3">3 Persons</option>
								<option value="4">4 Persons</option>
							</select>
						</div>
					</div>

					<div className="des-from !border-r-0">
						<p>Class</p>
						<div className="flex flex-row">
							<img src={beg} alt="" />
							<select
								className="outline-none px-2 py-2 w-full"
								name="ticketClass"
								id="lws-ticketClass"
								required
								{...register('lws-ticketClass')}
							>
								<option value="" hidden>
									Please Select
								</option>
								<option>Business</option>
								<option>Economy</option>
							</select>
						</div>
					</div>

					<button
						className="addCity"
						disabled={bookings.length >= 3}
						type="submit"
						id="lws-addCity"
					>
						<svg
							width="15px"
							height="15px"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 4.5v15m7.5-7.5h-15"
							/>
						</svg>
						<span className="text-sm">Book</span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddBookingForm;
