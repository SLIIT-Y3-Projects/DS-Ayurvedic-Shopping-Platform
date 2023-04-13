const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
import jwt from "jsonwebtoken";

const BuyerAuthSchema = new mongoose.Schema(
	{
		// TODO: Add more fields
		name:{
			type: String,
			required: true,
		},

		email: {
			type: String,
			required: true,
		},
		contact: {
			type: String,
			required: true,
		},
		nic:{
			type: String,
			required: true,
		},
		address:{
			type: String,
			required: true,
		},

		password: {
			type: String,
			required: true,
		},
		permissionLevel: {
			type: String,
			default: "BUYER",
			required: true,
		},
		authToken: {
			type: String,
			required: false,
		},
		deletedAt: {
			type: Date,
			required: false,
			default: null,
		},
	},

	{
		timestamps: true,
	}
);

BuyerAuthSchema.pre("save", async function (next) {
	const user = this;
	const password = user.password;

	if (!user.isModified("password")) {
		return next();
	}

	// Number of rounds hash function will execute
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hashSync(password, salt);
	user.password = hash;
	return next();
});

BuyerAuthSchema.methods.generateAuthToken = async function () {
	const user = this;
	const secret = process.env.JWT_SECRET;

	const authToken = jwt.sign(
		{
			id: user._id,
			permissionLevel: user.permissionLevel,
		},
		secret
	);
	user.authToken = authToken;
	await user.save();
	return authToken;
};

BuyerAuthSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("BuyerAuth", BuyerAuthSchema);
