const About = () => {
	return (
		<section className="h-full gradient-form bg-gray-200">
			<div className="h-32 md:h-64 py-20 mb-14 bg-about-banner bg-auto md:bg-contain bg-no-repeat bg-center">
				<div className="container mx-auto px-6">
					<div className="sm:flex">
						<div className="my-0 md:my-8 sm:w-full sm:px-8 flex flex-col md:flex-row justify-center">
							<h3 className="text-center text-black font-sans font-semibold">About Us</h3>
						</div>
					</div>
				</div>
			</div>
			<div className="container mx-auto px-6 md:px-24 ">
				<div className="sm:flex mb-10">
					<div className="sm:w-full sm:px-8">
						<div className="grid gap-4 md:gap-2.5 grid-cols-1 justify-items-center">
							<div className="">
								<h4 className="text-left text-body1 text-gray-light font-sans font-semibold mb-6">Lorem ipsum</h4>
								<p className="text-left text-body2 text-gray-light mb-8 font-serif">
									In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About


