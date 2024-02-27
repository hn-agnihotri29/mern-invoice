import express from "express";
import getUserProfile from "../controllers/user/getUserProfile.js";
import checkAuth from "../middleware/checkAuthMiddleware.js";
import updateUserProfile from "../controllers/user/updateUserProfile.js";
import deleteMyAccount from "../controllers/user/deleteMyAccount.js";
import getAllUserAccounts from "../controllers/user/getAllUserAccounts.js";
import role from "../middleware/roleMiddleware.js"; 

const router = express.Router();

router
	.route("/profile")
	.get(checkAuth, getUserProfile)
	.patch(checkAuth, updateUserProfile)
	.delete(checkAuth, deleteMyAccount)

	router
	.route("/all")
	.get(checkAuth, role.checkRole(role.ROLES.Admin), getAllUserAccounts);


export default router