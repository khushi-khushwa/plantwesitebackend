import express from "express";
// import { getService,applyService,cancelService } from "../controllers/serviceApplyController.js";
import { getService,applyService,cancelService } from "../controllers/serviceApplyController.js"

const router = express.Router();

router.post('/applyService', applyService);   
router.get('/showService', getService);
router.delete('/cancelService/:id', cancelService);

export default router;