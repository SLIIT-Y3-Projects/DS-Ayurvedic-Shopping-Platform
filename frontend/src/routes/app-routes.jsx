import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import CheckLoginStatus from "./CheckLoginStatus";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Pages
import {
	Sample,
	Home,
	Checkout,
	Payment,
	PaymentSuccess,
	AdminLogin,
	AdminDashboard,
	ProductAdd,
	ProductDisplay,
	BuyerRegister,
	BuyerLogin,
	BuyerDashboard,
	SellerReview,
	ProductReview,
	SellerRegister,
	SellerLogin,
	SellerDashboard,
	BuyerProfileUpdate,
	Cart,
	BuyerOrders,
	BuyerOrderStatus,
	ViewDeliveredOrders,
	BuyerPendingOrders,
	BuyerConfirmOrders,
	BuyerDispatchOrder,
	BuyerDeliveredOrders,
	ViewConfirmedOrders,
	ManageProducts,
} from "../pages";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Header />
				<div className="min-h-screen">
					<Routes>
						{/* Public Routes */}
						<Route path="/" element={<Home />} />
						<Route path="/sample" element={<Sample />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/payment/success/:paymentId" element={<PaymentSuccess />} />
						<Route path="/payment/:orderId" element={<Payment />} />

						{/*Product Routes*/}
						<Route path="/product-add" element={<ProductAdd />} />
						<Route path="/product-display" element={<ProductDisplay />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/manage-products" element={<ManageProducts />} />

						{/* Check Login Status Admin */}
						<Route exact path="/admin/login" element={<CheckLoginStatus />}>
							<Route exact path="/admin/login" element={<AdminLogin />} />
						</Route>

						{/* Admin Private Routes */}
						<Route exact path="/admin" element={<PrivateRoute permissionLevel="ADMIN" />}>
							<Route exact path="/admin" element={<AdminDashboard />} />
							{/* <Route exact path="/admin/edit" element={<AdminEdit />} /> */}
						</Route>

						{/* Seller Private Routes */}
						<Route path="/sellerReview" element={<SellerReview />} />

						{/* Product Private Routes */}
						<Route path="/productReview" element={<ProductReview />} />

						{/* Buyer Routes */}
						<Route path="/buyer/register" element={<BuyerRegister />} />

						{/* Check Login Status Buyer */}
						<Route exact path="/buyer/login" element={<CheckLoginStatus />}>
							<Route exact path="/buyer/login" element={<BuyerLogin />} />
						</Route>

						{/* Buyer Private Routes */}
						<Route exact path="/buyer" element={<PrivateRoute permissionLevel="BUYER" />}>
							<Route exact path="/buyer" element={<BuyerDashboard />} />
							<Route exact path="/buyer/profile/:id" element={<BuyerProfileUpdate />} />
							<Route exact path="/buyer/orders/:id" element={<BuyerOrders />} />
							<Route exact path="/buyer/order-status/:id" element={<BuyerOrderStatus />} />
							<Route exact path="/buyer/pending/orders" element={<BuyerPendingOrders />} />
							<Route exact path="/buyer/confirm/orders" element={<BuyerConfirmOrders />} />
							<Route exact path="/buyer/dispatch/orders" element={<BuyerDispatchOrder />} />
							<Route exact path="/buyer/delivered/orders" element={<BuyerDeliveredOrders />} />
						</Route>

						{/* Seller Routes */}
						<Route path="/seller/register" element={<SellerRegister />} />

						{/* Delivered Routes */}
						<Route path="/deliveredOrders" element={<ViewDeliveredOrders />} />

						{/* Confirmed Routes */}
						<Route path="/confirmedOrders" element={<ViewConfirmedOrders />} />

						{/* Check Login Status Seller */}
						<Route exact path="/seller/login" element={<CheckLoginStatus />}>
							<Route exact path="/seller/login" element={<SellerLogin />} />
						</Route>

						{/* Seller Private Routes */}
						<Route exact path="/seller" element={<PrivateRoute permissionLevel="SELLER" />}>
							<Route exact path="/seller" element={<SellerDashboard />} />
						</Route>
					</Routes>
				</div>
				<Footer />
			</Router>
		</>
	);
};

export default AppRoutes;
