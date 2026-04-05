
import express from 'express';
const router = express.Router();
import { register , login,logout} from '../controllers/userAccountController.js';

router.post("/register",register);
router.post("/login",login);
router.get("/logout",logout);
// router.post("/profileupdate",isAuthenticated,singleUpload,updateProfile);
export default router;
