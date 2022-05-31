import Link from "next/link";
import Image from "next/image";
// import { FaPencilAlt, FaTimes } from 'react-icons/fa'
// import styles from '@/styles/DashboardEvent.module.css'

export default function DashboardEvent({ evt, handleDelete }) {
	return (
		<div class="xl:w-1/2 md:w-1/2 p-4 w-full">
			<div class="bg-gray-800 p-6 rounded-lg">
				<h3 class="tracking-widest text-indigo-400 text-xs font-medium mb-4 title-font">
					{new Date(evt.date).toLocaleDateString("en-US")} at {evt.time}
				</h3>
				<h2 class="text-lg text-white font-medium title-font mb-4">
					{evt.name}
				</h2>
				<p class="leading-relaxed text-gray-300 text-base">{evt.description}</p>
				<div className="flex justify-center">
					<Link href={`/events/edit/${evt.id}`}>
						<a class="text-indigo-500 inline-flex items-center mt-4">
							<div class="p-2 pl-0 w-full">
								<button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
									Edit
								</button>
							</div>
						</a>
					</Link>
					<a
						class="text-indigo-500 inline-flex items-center mt-4"
						onClick={() => handleDelete(evt.id)}
					>
						<div class="p-2 w-full">
							<button class="flex mx-auto text-white bg-red-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
								Delete
							</button>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}
