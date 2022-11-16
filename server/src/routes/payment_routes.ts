import { Router } from "express";
import { createPaymentIntent } from "../controllers/payment_controllers";
import { validateRequestFields } from "../middlewares/validate_request_fields";
import { check } from "express-validator";

const router = Router();

router.post("/new", [
    check("amount", "payment ammount was not provided").not().isEmpty(),
    validateRequestFields
] ,createPaymentIntent);

module.exports = router;
