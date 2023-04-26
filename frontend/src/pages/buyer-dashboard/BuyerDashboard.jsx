import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BuyerContext from "../../contexts/BuyerContext";

const BuyerDashboard = () => {
	const { buyer, getOneBuyer } = useContext(BuyerContext);
	const id = localStorage.getItem("uId");
	getOneBuyer(id);

	//const stripId = localStorage.getItem("stripeUserId");

	return (
		<>
			<div className="absolute ml-[35rem] flex-col sm:flex-wrap sm:flex-row justify-center w-1/2">
				<div className="flex-col px-10 w-auto md:w-50 py-6 bg-gray-200 rounded-2xl mt-10">
					<div className="flex">
						<div>
							<div className="h-28 w-28 rounded-full overflow-hidden bg-gray-200 ml-14">
								<img src="https://source.unsplash.com/300x300/?boy" alt="" className="" />
							</div>

							<div className="text-lg font-medium text-black cursor-pointer ml-6 mt-4">
								<b>{buyer.name}</b>
							</div>
							<div className=" italic text-gray-500 ml-4">{buyer.email} </div>
						</div>
						<div className="flex mt-10">
							<div>
								<button className="flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded-full ml-10">
									<Link to={`/buyer/profile/${id}`}>View Profile</Link>
								</button>
							</div>
							<div>
								<button className="flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded-full ml-10">
									<Link to={`/buyer/orders/${id}`}>My Orders</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="text-gray-600 body-font">
					<div clasNames="container px-2 py-20 mx-auto">
						<div className="flex flex-col text-center w-full mb-10">
							<h1 className="text-2xl font-medium title-font  text-gray-900 tracking-widest mt-6">PENDING ORDERS</h1>
						</div>
						<div className="flex flex-wrap -m-4">
							<div className="p-4 lg:w-1/2">
								<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
									<img
										alt="team"
										className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
										src="https://dummyimage.com/200x200"
									/>
									<div className="flex-grow sm:pl-8">
										<h2 className="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
										<h3 className="text-gray-500 mb-3">UI Developer</h3>
										<p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
										<span className="inline-flex">
											<button className="flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded-full ml-10">
												<Link to={`/buyer/order-status/${id}`}>Status</Link>
											</button>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BuyerDashboard;
