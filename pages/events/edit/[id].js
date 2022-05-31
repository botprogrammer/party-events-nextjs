import moment from "moment";
// import { FaImage } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { parseCookies } from "@/helpers/index";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import ImageUpload from "@/components/ImageUpload";
import { API_URL } from "@/config/index";
// import styles from "@/styles/Form.module.css";

export default function EditEventPage({ evt, token }) {
	const [values, setValues] = useState({
		name: evt.name,
		performers: evt.performers,
		venue: evt.venue,
		address: evt.address,
		date: evt.date,
		time: evt.time,
		description: evt.description,
	});
	const [imagePreview, setImagePreview] = useState(
		evt.image ? evt.image.formats.thumbnail.url : null
	);
	const [showModal, setShowModal] = useState(false);

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validation
		const hasEmptyFields = Object.values(values).some(
			(element) => element === ""
		);

		if (hasEmptyFields) {
			toast.error("Please fill in all fields");
		}

		const res = await fetch(`${API_URL}/events/${evt.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(values),
		});

		if (!res.ok) {
			if (res.status === 403 || res.status === 401) {
				toast.error("Unauthorized");
				return;
			}
			toast.error("Something Went Wrong");
		} else {
			const evt = await res.json();
			router.push(`/events/${evt.slug}`);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const imageUploaded = async (e) => {
		const res = await fetch(`${API_URL}/events/${evt.id}`);
		const data = await res.json();
		setImagePreview(data.image.formats.thumbnail.url);
		setShowModal(false);
	};

	return (
		<Layout title="Add New Event">
			<div className="w-2/5 mx-auto my-20">
				<h1 className="text-3xl font-medium title-font my-20 text-white text-center tracking-wide">
					Edit Event
				</h1>
				<ToastContainer />
				<form onSubmit={handleSubmit}>
					<div className="grid xl:grid-cols-2 xl:gap-6">
						<div className="relative z-0 w-full mb-6 group">
							<input
								type="text"
								name="name"
								id="name"
								autoComplete="off"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								value={values.name}
								onChange={handleInputChange}
							/>
							<label
								htmlFor="name"
								className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Event Name
							</label>
						</div>
						<div className="relative z-0 w-full mb-6 group">
							<input
								type="text"
								name="performers"
								id="performers"
								autoComplete="off"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer autofill:bg-yellow-200"
								value={values.performers}
								onChange={handleInputChange}
							/>
							<label
								htmlFor="performers"
								className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Performers
							</label>
						</div>
					</div>
					<div className="grid xl:grid-cols-2 xl:gap-6">
						<div className="relative z-0 w-full mb-6 group">
							<input
								type="date"
								name="date"
								id="date"
								autoComplete="off"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								value={moment(values.date).format("yyyy-MM-DD")}
								onChange={handleInputChange}
							/>
							<label
								htmlFor="date"
								className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Date
							</label>
						</div>
						<div className="relative z-0 w-full mb-6 group">
							<input
								type="text"
								name="time"
								id="time"
								autoComplete="off"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								value={values.time}
								onChange={handleInputChange}
							/>
							<label
								htmlFor="time"
								className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Time
							</label>
						</div>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="text"
							name="venue"
							id="venue"
							autoComplete="off"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							value={values.venue}
							onChange={handleInputChange}
						/>
						<label
							htmlFor="venue"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Venue
						</label>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="text"
							name="address"
							id="address"
							autoComplete="off"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							value={values.address}
							onChange={handleInputChange}
						/>
						<label
							htmlFor="address"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Address
						</label>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="text"
							name="description"
							id="description"
							autoComplete="off"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							value={values.description}
							onChange={handleInputChange}
						/>
						<label
							htmlFor="description"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Event Description
						</label>
					</div>

					<input
						type="submit"
						value="Update Event"
						className="text-white w-full mx-auto my-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-gray-800 transition duration-200 dark:focus:ring-blue-800"
					/>
				</form>
				<div className="flex">
					{imagePreview ? (
						<Image src={imagePreview} height={100} width={170} />
					) : (
						<div className="text-gray-300">
							<p>No image Uploaded</p>
						</div>
					)}
					<div className="ml-10">
						<button
							onClick={() => setShowModal(true)}
							className="text-white w-full mx-auto my-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-gray-800 transition duration-200 dark:focus:ring-blue-800"
						>
							Set image
						</button>
					</div>
					<Modal show={showModal} onClose={() => setShowModal(false)}>
						<ImageUpload
							evtId={evt.id}
							imageUploaded={imageUploaded}
							token={token}
						/>
					</Modal>
				</div>
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ params: { id }, req }) {
	const { token } = parseCookies(req);

	const res = await fetch(`${API_URL}/events/${id}`);
	const evt = await res.json();

	return {
		props: {
			evt,
			token,
		},
	};
}
