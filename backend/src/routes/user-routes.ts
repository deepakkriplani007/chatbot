import { Router } from "express";
import {
  getAllusers,
  userSignup,
  userLogin,
  verifyUser,
  userLogout,
} from "../controllers/user-controllers.js";
import {
  signupValidator,
  validate,
  validation,
  loginValidator,
} from "../utils/validators.js";
import { verifyToken } from "../utils/token-manager.js";
const userRoutes = Router();
userRoutes.get("/", getAllusers);
userRoutes.post("/signup", ...signupValidator, validation, userSignup);
userRoutes.post("/login", ...loginValidator, validation, userLogin);
userRoutes.get("/auth-status", verifyToken, verifyUser);
userRoutes.get("/logout", verifyToken, userLogout);

export default userRoutes;
