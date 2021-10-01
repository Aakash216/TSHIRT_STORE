const express = require("express");
const router = express.Router();
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

const { makepayment } = require("../controllers/StripePayment");

router.post("/stripepayment", makepayment);

module.exports = router;