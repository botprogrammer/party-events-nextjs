import React from "react";
import Image from "next/image";
import party from "../public/images/party.webp";
import Link from "next/link";

export default function Showcase() {
	return (
		<section className="text-gray-400 bg-gray-900 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
					<Image
						className="object-cover object-center rounded"
						alt="hero"
						src={party}
					/>
				</div>
				<div className="md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
						Welcome to the Party Mania!
					</h1>
					<p className="mb-8 leading-relaxed">
						Find the hottest DJ events in your area!
					</p>
					<div className="flex justify-center">
						{/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
							Button
						</button> */}
						<Link href="/events">
							<button className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
								See Events
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
