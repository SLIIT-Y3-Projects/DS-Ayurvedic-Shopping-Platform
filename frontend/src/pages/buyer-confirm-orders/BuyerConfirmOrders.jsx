import React, { useContext } from "react";
import BuyerContext from "../../contexts/BuyerContext";
import OrderContext from "../../contexts/OrderContext";


const BuyerConfirmOrders = () => {
	const { buyer, getOneBuyer } = useContext(BuyerContext);

	const { orders, refetchOrders } = useContext(OrderContext);

	const id = localStorage.getItem("uId");
	const stripId = localStorage.getItem("stripeUserId");
	getOneBuyer(id);

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Confirm Orders</h1>

			<div>
				<div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
					<table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
						<thead className="bg-gray-50">
							<tr>
								<th scope="col" className="px-6 py-4 font-medium text   gray-900 "></th>
								<th scope="col" className="px-6 py-4 font-bold text-black">
									Seller
								</th>
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
									.filter((elem) => elem.stripeUserId == stripId && elem.status == "confirmed")
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
											<td className="px-2 py-4">
												<div className="inline-flex items-center rounded-full px- py-1 text-xl ">{elem.supplier}</div>
											</td>
											<td className="px-6 py-4">
												<div className="inline-flex items-center rounded-full px- py-1 text-xl ">{elem.price}</div>
											</td>
											<td className="px-6 py-4">
												<div className="inline-flex items-center rounded-full px- py-1 text-xl green-500 ">
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
		</>
	);
};

export default BuyerConfirmOrders;