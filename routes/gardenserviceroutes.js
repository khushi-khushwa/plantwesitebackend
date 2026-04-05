import express from "express";
import { getService, cancelService, applyService } from "../controllers/gardenserviceController.js";

const router = express.Router();

router.post('/applyService', applyService);   
router.get('/showService', getService);
router.delete('/cancelService/:id', cancelService);

export default router;