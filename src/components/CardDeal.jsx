// import 'bootstrap/dist/css/bootstrap.min.css';

const CardDeal = () => (
	<div className="container py-16">
		<div className="flex gap-8">
			{/* Description Section */}
			<div
				className="w-full bg-[hsl(var(--primary-hue)_var(--primary-sat)_4%)] text-white shadow-2xl shadow-primary/10 border border-primary/10 p-8 rounded-xl"
			>
				<h1 className="text-5xl">
					Tap into our embedded trade <br />
					payment options
				</h1>

				<div className="space-y-4 mt-12">
					<p
						className="mt-2 font-bold text-lg font-bitter text-white p-2 rounded shadow-md"
						style={{ backgroundColor: "#852890" }}
					>
						MoMo & Cards Channel
					</p>
				</div>
			</div>

			{/* Compass Image Section */}
			<div className="col-12 col-md-4 d-flex justify-content-left align-items-left">
				<div className="position-relative" style={{ width: "450px", height: "450px" }}>
					{/* Circular Path SVG */}
					<div className="position-absolute w-100 h-100">
						<svg viewBox="0 0 100 100" className="w-100 h-100 stroke-primary">
							{/* Circular Path */}
							<defs>
								<marker
									id="arrow"
									markerWidth="4"
									markerHeight="4"
									refX="2"
									refY="2"
									orient="auto"
									markerUnits="strokeWidth"
								>
									<path d="M0,0 L4,2 L0,4 L1,2 Z" fill="#222b5b" />
								</marker>
							</defs>
							<path
								d="M 50, 10 
                   a 40,40 0 1,1 0,80
                   a 40,40 0 1,1 0,-80"
								fill="transparent"
								strokeWidth="0.5"
								markerEnd="url(#arrow)"
								markerMid="url(#arrow)"
							/>
						</svg>
					</div>

					{/* Top Image */}
					<div
						className="graph__img top-[10%] left-[45%] -translate-y-1/2 -translate-x-1/2 overflow-hidden"
					>
						<img src="https://via.placeholder.com/90" alt="Top Image" className="w-100 h-100" />
					</div>

					{/* Center Text */}
					<div
						className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-primary/10 rounded-full grid place-items-center border !border-primary/20"
						style={{
							width: "120px",
							height: "120px",
						}}
					>
						<p className="text-center text-lg">Merchant Services</p>
					</div>

					{/* Top-Right Image */}
					<div
						className="position-absolute bg-white border border-dark rounded-circle d-flex align-items-center justify-content-center"
						style={{
							width: "90px",
							height: "90px",
							top: "30%",
							left: "85%",
							transform: "translate(-50%, -50%)",
						}}
					>
						<img src="https://via.placeholder.com/90" alt="Top Right Image" className="w-100 h-100 rounded-circle" />
					</div>

					{/* Bottom-Right Image */}
					<div
						className="position-absolute bg-white border border-dark rounded-circle d-flex align-items-center justify-content-center"
						style={{
							width: "90px",
							height: "90px",
							bottom: "30%",
							right: "15%",
							transform: "translate(50%, 50%)",
						}}
					>
						<img src="https://via.placeholder.com/90" alt="Bottom Right Image" className="w-100 h-100 rounded-circle" />
					</div>

					{/* Bottom-Left Image */}
					<div
						className="position-absolute bg-white border border-dark rounded-circle d-flex align-items-center justify-content-center"
						style={{
							width: "90px",
							height: "90px",
							bottom: "20%",
							left: "25%",
							transform: "translate(-50%, 50%)",
						}}
					>
						<img src="https://via.placeholder.com/90" alt="Bottom Left Image" className="w-100 h-100 rounded-circle" />
					</div>

					{/* Top-Left Image */}
					<div
						className="position-absolute bg-white border border-dark rounded-circle d-flex align-items-center justify-content-center"
						style={{
							width: "90px",
							height: "90px",
							top: "40%",
							left: "13%",
							transform: "translate(-50%, -50%)",
						}}
					>
						<img src="https://via.placeholder.com/90" alt="Top Left Image" className="w-100 h-100 rounded-circle" />
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default CardDeal;
