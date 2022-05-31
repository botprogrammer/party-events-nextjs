import { useState } from "react";
import { API_URL } from "@/config/index";
// import styles from '@/styles/Form.module.css'

export default function ImageUpload({ evtId, imageUploaded, token }) {
	const [image, setImage] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("files", image);
		formData.append("ref", "events");
		formData.append("refId", evtId);
		formData.append("field", "image");

		const res = await fetch(`${API_URL}/upload`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		});

		if (res.ok) {
			imageUploaded();
		}
	};

	const handleFileChange = (e) => {
		setImage(e.target.files[0]);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="hover:cursor-pointer mb-10 flex flex-col justify-center">
					<input
						type="file"
						id="files"
						onChange={handleFileChange}
						style={{ display: "none" }}
					/>
					<label
						className="text-gray-300 p-6 hover:cursor-pointer border-2 text-center m-auto"
						for="files"
					>
						Select Your File
					</label>
				</div>
				<div class="flex items-center justify-center w-full p-6 pb-0 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
					<button
						data-modal-toggle="small-modal"
						type="submit"
						value="Upload"
						class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Upload
					</button>
				</div>
			</form>
		</div>
	);
}
