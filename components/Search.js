import { useState } from "react";
import { useRouter } from "next/router";

export default function Search() {
	const [term, setTerm] = useState("");

	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		router.push(`/events/search?term=${term}`);
		setTerm("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={term}
					onChange={(e) => setTerm(e.target.value)}
					id="search-navbar"
					className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border sm:text-sm dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-visible:unset"
					placeholder="Search Events"
				/>
			</form>
		</div>
	);
}
