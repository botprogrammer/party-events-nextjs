import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import AuthContext from "@/context/AuthContext";

export default function RegisterPage() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	const { register, error, msg, setMsg } = useContext(AuthContext);

	useEffect(() => {
		msg && toast.error(msg);
		setMsg(null);
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if (password !== passwordConfirm) {
			toast.error("Passwords do not match!");
			return;
		}

		register({ username, email, password });
	};

	return (
		<Layout title="User Registration">
			<section className="h-full gradient-form bg-gray-700 md:h-screen">
				<div className="container py-12 px-6 h-full">
					<div className="justify-center items-center h-full g-6 text-gray-800">
						<div className="sm:w-8/12 md:w-4/12 max-w-100 m-auto">
							<div className="block bg-gray-800 shadow-lg rounded-lg">
								<div className="g-0">
									<div className="px-4 md:px-0">
										<div className="md:p-12 md:mx-6">
											<div className="text-center text-gray-200">
												<h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
													Register your account
												</h4>
											</div>
											<ToastContainer />
											<form onSubmit={handleSubmit}>
												<div className="mb-4">
													<input
														type="text"
														className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-200 bg-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
														id="username"
														value={username}
														onChange={(e) => setUsername(e.target.value)}
														placeholder="Username"
													/>
												</div>
												<div className="mb-4">
													<input
														type="email"
														className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-200 bg-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
														id="email"
														value={email}
														onChange={(e) => setEmail(e.target.value)}
														placeholder="Email"
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
												<div className="mb-4">
													<input
														type="password"
														className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-200 bg-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
														id="passwordConfirm"
														placeholder="Confirm Password"
														value={passwordConfirm}
														onChange={(e) => setPasswordConfirm(e.target.value)}
													/>
												</div>
												<div className="text-center pt-1 mb-12 pb-1">
													<input
														className="inline-block px-6 py-2.5 border-2 border-gray-400 text-gray-400 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
														type="submit"
														data-mdb-ripple="true"
														data-mdb-ripple-color="light"
														value="Register"
													/>
												</div>
												<div className="flex items-center justify-between pb-6">
													<p className="mb-0 text-gray-400 mr-2">
														Already have an account?
													</p>
													<Link href="/account/login">
														<button
															type="button"
															className="inline-block px-6 py-2 border-2 border-gray-400 text-gray-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
															data-mdb-ripple="true"
															data-mdb-ripple-color="light"
														>
															Login
														</button>
													</Link>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
