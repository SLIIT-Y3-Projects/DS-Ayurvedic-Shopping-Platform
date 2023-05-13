import React, { useContext } from "react";
import { Link } from "react-router-dom";
import OrderContext from "../../contexts/OrderContext";

const BuyerDeliverOrder = () => {
	const { orders, refetchOrders } = useContext(OrderContext);
	const stripId = localStorage.getItem("stripeUserId");

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Delivered Orders</h1>

			<div>
				<div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
					<table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
						<thead className="bg-gray-50">
							<tr>
								<th scope="col" className="px-6 py-4 font-medium text   gray-900 "></th>

								<th scope="col" className="px-6 py-4 font-bold text-black">
									Unit Price
								</th>
								<th scope="col" className="px-6 py-4 font-bold text-black">
									Status
								</th>
								<th scope="col" className="px-6 py-4 font-bold text-black">
									Quantity
								</th>
								<th scope="col" className="px-6 py-4 font-bold text-black">
									Total
								</th>
							</tr>
						</thead>

						<tbody className="divide-y divide-gray-100 border-t border-gray-100 h-48">
							{orders &&
								orders
									.filter((elem) => elem.stripeUserId == stripId && elem.status == "delivered")
									.map((elem) => (
										<tr className="hover:bg-gray-50">
											<th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
												<div className="relative">
													<img className="h-36 w-36 rounded-lg object-cover object-center" src={elem.productImage} />
												</div>
												<div className="text-s mt-[50px]">
													<div className="text-gray-700 font-semibold">Name</div>
													<div className="text-gray-400">{elem.product_name}</div>
												</div>
											</th>

											<td className="px-6 py-4">
												<div className="inline-flex items-center rounded-full px- py-1 text-xl ">{elem.price}</div>
											</td>
											<td className="px-6 py-4">
												<div className="inline-flex items-center rounded-full text-blue-500 text-xl font-bold ">
													{elem.status}
												</div>
											</td>
											<td className="px-6 py-4">
												<div className="inline-flex items-center rounded-full px- py-1 text-xl ">{elem.qty}</div>
											</td>
											<td className="px-6 py-4">
												<div className="inline-flex items-center rounded-full px- py-1 text-xl ">{elem.amount}</div>
											</td>
										</tr>
									))}
						</tbody>
					</table>
				</div>
			</div>

			<Link to="/deliveredOrders">
        <div className="m-5 p-5 sm:p-10 md:p-20 bg-white drop-shadow-lg bg-no-repeat bg-left-bottom md:bg-[url('../addPackage.png')] rounded-3xl">
          <h1 className="text-primary-blue md:text-white md:bg-black md:bg-opacity-60 md:p-2 rounded-xl font-bold text-lg md:text-3xl hover:underline">
            Rate Now
          </h1>
        </div>
      </Link>
		</>
	);
};

export default BuyerDeliverOrder;
