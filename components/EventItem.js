import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function EventItem({ evt }) {
	return (
		<div className="p-4 lg:w-1/2">
			<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
				<Image
					alt="team"
					className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
					src={
						evt.image
							? evt.image.formats.thumbnail.url
							: "/images/event-default.png"
					}
					width={170}
					height={170}
				/>

				<div className="sm:pl-8">
					<h2 className="title-font font-medium text-lg text-white">
						{evt.name}
					</h2>
					<h3 className="text-gray-500 my-3">
						On {new Date(evt.date).toLocaleDateString("en-US")} at {evt.time}
					</h3>
					<p className="mb-4 text-gray-400">Description : {evt.description}</p>
					<Link href={`/events/${evt.slug}`}>
						<span className="inline-flex cursor-pointer">
							<a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
								Details
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-4 h-4 ml-2"
									viewBox="0 0 24 24"
								>
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
