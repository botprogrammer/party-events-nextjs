import Link from "next/link";
import { PER_PAGE } from "@/config/index";

export default function Pagination({ page, total }) {
	const lastPage = Math.ceil(total / PER_PAGE);
	return (
		<>
			<div className="flex justify-center">
				{page > 1 && (
					<Link href={`/events?page=${page - 1}`}>
						<button class="flex mx-auto my-20 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
							Previous Page
						</button>
					</Link>
				)}

				{page < lastPage && (
					<Link href={`/events?page=${page + 1}`}>
						<button class="flex mx-auto my-20 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
							Next Page
						</button>
					</Link>
				)}
			</div>
		</>
	);
}
