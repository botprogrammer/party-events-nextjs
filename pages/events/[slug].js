import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
// import EventMap from "@/components/EventMap";
import { API_URL } from "@/config/index";
// import styles from "@/styles/Event.module.css";
import { useRouter } from "next/router";

export default function EventPage({ evt }) {
	const router = useRouter();
	const deleteEvent = async (e) => {
		if (confirm("Are you sure?")) {
			const res = await fetch(`${API_URL}/events/${evt.id}`, {
				method: "DELETE",
			});
			const data = await res.json();

			if (!res.ok) {
				toast.error(data.message);
			} else {
				router.push("/events");
			}
		}
	};

	return (
		<Layout>
			<section className="text-gray-400 m-auto w-4/5 bg-gray-900 body-font">
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					{evt.image && (
						<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
							<Image
								className="object-cover object-center rounded"
								src={evt.image.formats.medium.url}
								width={1560}
								height={1200}
							/>
						</div>
					)}
					<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-stretch text-between justify-evenly">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
							{evt.name}
						</h1>
						<h1 className="title-font sm:text-2xl text-xl mb-4 font-small text-white">
							Performing Artist : {evt.performers}
						</h1>
						<h3 className="sm:text-sm text-xl mb-4 font-small text-white">
							On {new Date(evt.date).toLocaleDateString("en-US")} at {evt.time}
						</h3>
						<p className="mb-4">{evt.description}</p>
						<h3 className="sm:text-sm text-xl mb-4 font-small text-white">
							Venue: {evt.venue}
						</h3>
						<p className="mb-4">Address : {evt.address}</p>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export async function getStaticPaths() {
	const res = await fetch(`${API_URL}/events`);
	const events = await res.json();

	const paths = events.map((evt) => ({
		params: { slug: evt.slug },
	}));

	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const res = await fetch(`${API_URL}/events?slug=${slug}`);
	// const slug2 = slug;
	const events = await res.json();

	// let ans = 1;
	// let did = events.data.reduce((memo, { id, attributes: { slug } }) => {
	// 	if (slug === slug2) {
	// 		ans = id;
	// 		return id;
	// 	}
	// });
	// return {
	// 	props: {
	// 		evt: events.data[ans - 1].attributes || null,
	// 	},
	// 	revalidate: 1,
	// };
	return {
		props: {
			evt: events[0],
		},
		revalidate: 1,
	};
}

// Working slug

// export async function getStaticPaths() {
// 	const res = await fetch(`${API_URL}/api/events`);
// 	const events = await res.json();

// 	const paths = events.data.map((evt) => ({
// 		params: { slug: evt.attributes.slug },
// 	}));
// 	return {
// 		paths,
// 		fallback: true,
// 	};
// }

// export async function getStaticProps({ params: { slug } }) {
// 	const res = await fetch(`${API_URL}/api/events?filters[slug][$eq]=${slug}`);
// 	// console.log("res is");
// 	// console.log(res);
// 	console.log("response is");
// 	console.log(res);
// 	const events = await res.json();
// 	console.log("events attributes are at slug.js");
// 	console.log(events.data[0].attributes);
// 	console.log("events at slug.js over");

// 	return {
// 		props: {
// 			evt: events.data[0].attributes || null,
// 		},
// 		revalidate: 1,
// 	};
// }

// export async function getServerSideProps({ query: { slug } }) {
// 	const res = await fetch(`${API_URL}/events??populate=*slug=${slug}`);
// 	// const res = await fetch(`${API_URL}/api/events/${slug}`);
// 	const events = await res.json();

// 	return {
// 		props: {
// 			evt: events[0],
// 		},
// 	};
// }
