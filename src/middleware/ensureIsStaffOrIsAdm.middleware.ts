import jwt, { VerifyErrors } from "jsonwebtoken";
import "dotenv/config";
import AppError from "../errors/AppError";
import { Request, Response, NextFunction } from "express";

interface DecodedToken {
	sub: string;
	isAdm: boolean;
	isStaff: boolean;
}

export const ensureIsStaffOrIsAdmMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	let token = req.headers.authorization;
	if (!token) {
		throw new AppError(401, "Invalid token");
	}

	token = token.split(" ")[1];
	jwt.verify(
		token,
		process.env.SECRET_KEY,
		(error: VerifyErrors | null, decoded: DecodedToken | undefined) => {
			if (error) {
				throw new AppError(401, "Invalid token: " + error.message);
			}

			if (!decoded.isStaff || !decoded.isAdm) {
				throw new AppError(
					403,
					"Forbidden: Only staff or admin can access this resource"
				);
			}

			return next();
		}
	);
};
