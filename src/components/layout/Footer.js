import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Footer = () => {
    return (
		<footer className="footer bg-gray-200 relative pt-1">
			<div className="max-w-screen-2xl mx-auto md:px-14 px-4">
				<div className="w-auto sm:w-auto text-center justify-center items-center py-2">
					<p className="mt-2 text-small3 text-black font-normal mb-2 text-opacity-50 font-serif">
						© 2022 iReadify, LLC. All rights reserved.
				    </p>
				    <p className="text-small1 text-black font-normal mb-2 text-opacity-70 font-serif">
			            <a href="/terms-and-conditions">Terms & Conditions</a> | <a href="/privacy-policy">Privacy Policy</a>
			        </p>
			    </div>
			</div>
		</footer>
	)
}

export default Footer
