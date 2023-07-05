import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import cover from "../../photos/devotional.jpg";
import classes from "./bookSale.module.css";

// This values are the props in the UI
const amount = "12";
const currency = "USD";
const style = { layout: "vertical" };
const BookSale = () => {
	return (
		<div className={classes.sale}>
			<div className={classes.image}>
				<img src={cover} alt='Deveotional Journal' />
			</div>
			<h3>$12.00</h3>
			<div className={classes.paypal}>
				<PayPalScriptProvider
					options={{
						"client-id":
							"Af22cGOftzA3l-BRbceK5stG-dhBWkDaLLBCh5cTWudjI3MQe9fOVrRS_-ciAyhRJ_a7kBYmgTcgpaqP",
					}}
				>
					<PayPalButtons
						style={style}
						disabled={false}
						forceReRender={[amount, currency, style]}
						fundingSource={undefined}
						createOrder={(data, actions) => {
							return actions.order
								.create({
									purchase_units: [
										{
											amount: {
												currency_code: currency,
												value: amount,
											},
										},
									],
								})
								.then((orderId) => {
									// Your code here after create the order
									return orderId;
								});
						}}
						onApprove={function (data, actions) {
							return actions.order.capture().then(function () {
								// Your code here after capture the order
								console.log(data);
								alert("Order Completed");
							});
						}}
					/>
				</PayPalScriptProvider>
			</div>
		</div>
	);
};

export default BookSale;
