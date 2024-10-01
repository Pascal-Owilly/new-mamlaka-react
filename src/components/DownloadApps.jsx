import { FaApple, FaGooglePlay } from 'react-icons/fa'; // Import App Store Icons

const DownloadSection = () => (
	<section className="container">
		<div className="mb-16 p-8 md:p-16 rounded-3xl bg-[hsl(var(--primary-hue)_var(--primary-sat)_95%)]">
			<div className="text-center">
				<p className="font-semibold text-4xl text-primary-dark">
					Download our mobile app
				</p>
				<p className="mt-4">
					Enjoy a seamless experience on the go with our mobile app.<br />
					Available on both Android and iOS platforms.
				</p>
			</div>

			<div className="mt-12 flex flex-col sm:flex-row items-center gap-4 justify-center">
				{/* Android App Button */}
				<a
					className="bg-black rounded-lg px-4 py-2 text-white shrink-0"
					href="https://play.google.com/store/apps/details?id=com.impalapay.mamlaka.wuyi/"
					target="_blank"
					rel="noopener noreferrer">
					<div className="flex gap-x-4 items-center">
						<FaGooglePlay size={30} />
						<div>
							<p className="uppercase text-sm leading-tight">Get it on</p>
							<p className="text-xl leading-tight">Google Play</p>
						</div>
					</div>
				</a>

				<a
					className="bg-black rounded-lg text-white px-4 py-2 shrink-0"
					href="https://apps.apple.com/ke/app/impalapay-mobile/id6449749069/"
					target="_blank"
					rel="noopener noreferrer">
					<div className="flex gap-x-4 items-center">
						<FaApple size={30} />
						<div>
							<p className="text-sm leading-tight">Download on the</p>
							<p className="text-xl leading-tight">App Store</p>
						</div>
					</div>
				</a>
			</div>
		</div>
	</section>
);

export default DownloadSection;
