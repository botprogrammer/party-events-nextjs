import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function NotFound() {
	return (
		<Layout title="Home | Party Events">
			<section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
				<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
					<div className="max-w-md text-center">
						<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
							<span className="sr-only">Error</span>404
						</h2>
						<p className="text-2xl font-semibold md:text-3xl">
							Sorry, we couldn't find this page.
						</p>
						<p className="mt-4 mb-8 dark:text-gray-400">
							But dont worry, you can search anytime on our homepage.
						</p>
						<Link
							rel="noopener noreferrer"
							href="/"
							className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
						>
							<button
								className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 
                        focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 
                        dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
							>
								Back to homepage
							</button>
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	);
}
