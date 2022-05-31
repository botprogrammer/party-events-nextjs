import Link from "next/link";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";

export default function HomePage({ events }) {
	return (
		<Layout>
			<div className="bg-gray-900">
				<section className="text-gray-400 bg-gray-900 body-font">
					<div className="container px-5 py-10 mx-auto">
						<div className="flex flex-col text-center w-full mb-20">
							<h1 className="text-3xl font-medium title-font mb-4 text-white tracking-wide">
								Upcoming Events
							</h1>
						</div>
						{events.length === 0 && <h3>No events to show</h3>}

						<div className="flex flex-wrap justify-center mx-auto -m-4 w-4/5">
							{events.map((evt) => (
								<EventItem key={evt.id} evt={evt} />
							))}
						</div>

						{events.length > 0 && (
							<Link href="/events">
								<button class="flex mx-auto my-20 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
									View all Events
								</button>
							</Link>
						)}
					</div>
				</section>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=4`);
	const events = await res.json();

	return {
		props: { events },
		revalidate: 1,
	};
}
