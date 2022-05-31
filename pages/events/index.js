import Link from "next/link";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import Pagination from "@/components/Pagination";
import { API_URL, PER_PAGE } from "@/config/index";

export default function EventsPage({ events, page, total }) {
	const lastPage = Math.ceil(total / PER_PAGE);
	return (
		<Layout>
			<div>
				<section className="text-gray-400 bg-gray-900 body-font">
					<div className="container px-5 py-10 mx-auto">
						<div className="flex flex-col text-center w-full mb-20">
							<h1 className="text-3xl font-medium title-font mb-4 text-white tracking-wide">
								Events
							</h1>
						</div>
						{events.length === 0 && <h3>No events to show</h3>}
						<div className="flex flex-wrap justify-center mx-auto -m-4 w-4/5">
							{events.map((evt) => (
								<EventItem key={evt.id} evt={evt} />
								// <h3 key={evt.id}>{evt.name}</h3>
							))}
						</div>

						<Pagination page={page} total={total} />
					</div>
				</section>
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ query: { page = 1 } }) {
	// Calculate start page
	const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

	const totalRes = await fetch(`${API_URL}/events/count`);
	const total = await totalRes.json();

	// FEtch events
	const eventRes = await fetch(
		`${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
	);
	const events = await eventRes.json();

	return {
		props: { events, page: +page, total },
	};
}
