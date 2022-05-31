import { parseCookies } from "@/helpers/index";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import DashboardEvent from "@/components/DashboardEvent";
import { API_URL } from "@/config/index";

export default function DashboardPage({ events, token }) {
	const router = useRouter();

	const deleteEvent = async (id) => {
		if (confirm("Are you sure?")) {
			const res = await fetch(`${API_URL}/events/${id}`, {
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const data = await res.json();

			if (!res.ok) {
				toast.error(data.message);
			} else {
				router.reload();
			}
		}
	};

	return (
		<Layout title="User Dashboard">
			<section className="text-gray-400 body-font bg-gray-900">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap w-full mb-20">
						<div className="lg:w-1/2 w-full mb-6 lg:mb-0">
							<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
								My Dashboard
							</h1>
							<div className="h-1 w-20 bg-indigo-500 rounded"></div>
						</div>
						<h1 className="text-3xl lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
							My Events
						</h1>
					</div>
					<div className="flex flex-wrap -m-4">
						{events.map((evt) => (
							<DashboardEvent
								key={evt.id}
								evt={evt}
								handleDelete={deleteEvent}
							/>
						))}
					</div>
				</div>
			</section>
		</Layout>
	);
}

export async function getServerSideProps({ req }) {
	const { token } = parseCookies(req);

	const res = await fetch(`${API_URL}/events/me`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const events = await res.json();

	return {
		props: {
			events,
			token,
		},
	};
}
