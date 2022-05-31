import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import AuthContext from "@/context/AuthContext";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	let { login, error, msg, setMsg } = useContext(AuthContext);

	useEffect(() => {
		msg && toast.error(msg);
		setMsg(null);
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		login({ email, password });
	};

	return (
		<Layout title="User Login">
			<section className="h-full gradient-form bg-gray-700 md:h-screen">
				<div className="container py-12 px-6 h-full">
					<div className="justify-center items-center h-full g-6 text-gray-800">
						<div className="sm:w-8/12 md:w-4/12 m-auto">
							<div className="block bg-gray-800 shadow-lg rounded-lg">
								<div className="g-0">
									<div className="px-4 md:px-0">
										<div className="md:p-12 md:mx-6">
											<div className="text-center text-gray-200">
												{error ? (
													<>
														<h1>Wrong credentials</h1>
													</>
												) : (
													<>
														<h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
															Welcome Back!
														</h4>
													</>
												)}
											</div>
											<ToastContainer />

											<form onSubmit={handleSubmit}>
												<div className="mb-4">
													<input
														type="email"
														className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-200 bg-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
														id="email"
														value={email}
														onChange={(e) => setEmail(e.target.value)}
														placeholder="Username"
													/>
												</div>
												<div className="mb-4">
													<input
														type="password"
														className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-200 bg-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
														id="password"
														placeholder="Password"
														value={password}
														onChange={(e) => setPassword(e.target.value)}
													/>
												</div>
												<div className="text-center pt-1 mb-12 pb-1">
													<input
														className="inline-block px-6 py-2.5 border-2 border-gray-400 text-gray-400 font-medium text-xs leading-tight bg-transparent uppercase rounded shadow-md hover:cursor-pointer hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-full mb-3"
														type="submit"
														value="Login"
													/>
												</div>
											</form>
											<div className="flex items-center justify-between pb-6">
												<p className="mb-0 text-gray-400 mr-2">
													Don't have an account?
												</p>
												<Link href="/account/register">
													<button
														type="button"
														className="inline-block px-6 py-2 border-2 border-gray-400 text-gray-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
														data-mdb-ripple="true"
														data-mdb-ripple-color="light"
													>
														Register
													</button>
												</Link>
											</div>
										</div>
									</div>
									{/* <div
										className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
										style={{ background: "red" }}
									>
										<div className="text-white px-4 py-6 md:p-12 md:mx-6">
											<h4 className="text-xl font-semibold mb-6">
												We are more than just a company
											</h4>
											<p className="text-sm">
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua. Ut enim ad minim veniam, quis
												nostrud exercitation ullamco laboris nisi ut aliquip ex
												ea commodo consequat.
											</p>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
