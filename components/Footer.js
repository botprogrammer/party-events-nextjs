import React from "react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="p-4 bg-white b-0 sm:p-6 dark:bg-gray-800">
			<div className="sm:flex sm:items-center sm:justify-between">
				<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2022 Designed and created by &nbsp;
					<a
						href="https://pranavgoswami.netlify.app"
						className="hover:underline dark:text-gray-200"
					>
						Pranav Goswami
					</a>
				</span>
				<div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
					<a
						href="https://pranavgoswami.netlify.app/"
						className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-5 h-5"
							fill="currentColor"
							aria-hidden="true"
							viewBox="0 0 512 512"
						>
							<path d="M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM256 480C272.7 480 296.4 465.6 317.9 422.7C327.8 402.9 336.1 378.1 341.1 352H170C175.9 378.1 184.2 402.9 194.1 422.7C215.6 465.6 239.3 480 256 480V480zM164.3 320H347.7C350.5 299.8 352 278.3 352 256C352 233.7 350.5 212.2 347.7 192H164.3C161.5 212.2 160 233.7 160 256C160 278.3 161.5 299.8 164.3 320V320zM341.1 160C336.1 133 327.8 109.1 317.9 89.29C296.4 46.37 272.7 32 256 32C239.3 32 215.6 46.37 194.1 89.29C184.2 109.1 175.9 133 170 160H341.1zM379.1 192C382.6 212.5 384 233.9 384 256C384 278.1 382.6 299.5 379.1 320H470.7C476.8 299.7 480 278.2 480 256C480 233.8 476.8 212.3 470.7 192H379.1zM327.5 43.66C348.5 71.99 365.1 112.4 374.7 160H458.4C432.6 105.5 385.3 63.12 327.5 43.66V43.66zM184.5 43.66C126.7 63.12 79.44 105.5 53.56 160H137.3C146.9 112.4 163.5 71.99 184.5 43.66V43.66zM32 256C32 278.2 35.24 299.7 41.28 320H132C129.4 299.5 128 278.1 128 256C128 233.9 129.4 212.5 132 192H41.28C35.24 212.3 32 233.8 32 256V256zM458.4 352H374.7C365.1 399.6 348.5 440 327.5 468.3C385.3 448.9 432.6 406.5 458.4 352zM137.3 352H53.56C79.44 406.5 126.7 448.9 184.5 468.3C163.5 440 146.9 399.6 137.3 352V352z" />
						</svg>
					</a>
					<a
						href="https://github.com/botprogrammer"
						className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
					>
						<svg
							className="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
					<a
						href="https://www.instagram.com/p03_goswami"
						className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
					>
						<svg
							className="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
					<a
						href="https://www.linkedin.com/in/pranav-goswami-9b501b191/"
						className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-5 h-5"
							fill="currentColor"
							aria-hidden="true"
							viewBox="0 0 448 512"
						>
							<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
						</svg>
					</a>
				</div>
			</div>
		</footer>
	);
}
