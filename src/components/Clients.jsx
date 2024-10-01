import { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import { clients } from "../constants";

function SlideButton() {
	const swiper = useSwiper()

	useEffect(() => {
		setInterval(() => swiper.slideNext(5000), 5000)
	}, [swiper])

	return <></>
}

const Clients = () => (
	<section className="pb-16 min-h-[300px] grid-centered">
		<div className="flex flex-col justify-between">
			<h1 className="container font-semibold mb-8">
				Plugins we intergrate with
			</h1>
			<div className="overflow-hidden">
				<Swiper
					slidesPerView={4}
					spaceBetween={24}
					loop={true}
					className="w-[calc(100vw-24px)] max-w-full relative"
				>
					<SlideButton slot="container-start" />
					{clients.map((client) => (
						<SwiperSlide key={client.id} className="flex h-[40px] justify-center items-center">
							<img
								src={client.logo}
								alt="client_logo"
								className="h-full object-contain"
							/>
						</SwiperSlide>
					))}

				</Swiper>
			</div>
		</div>
	</section>
);

export default Clients;
