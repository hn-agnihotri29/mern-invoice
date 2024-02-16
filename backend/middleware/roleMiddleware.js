import { ADMIN, USER } from "../constants/index.js";

const ROLES = {
	User: USER,
	Admin: ADMIN,
};

/**
* this function going to take in as many role as there exists and check
 whether the user has right role or not
*/

const checkRole = (...allowedRoles) => {
	return (req, res, next) => {
		if (!req?.user && !req?.roles) {
			res.status(401);
			throw new Error("You are not authorized to use our platform");
		}

		const rolesArray = [...allowedRoles];

		const roleFound = req.roles
			.map((role) => rolesArray.includes(role))
			.find((value) => value === true);

		if (!roleFound) {
			res.status(401);
			throw new Error("You are not authorized to perform this request");
		}

		next()
	};
};

const role = { ROLES, checkRole }

export default role
