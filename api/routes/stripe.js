const router = require("express").Router();
//const stripe = require("stripe")(process.env.STRIPE_KEY);
const stripe = require("stripe")('sk_test_51HJZxqA8vIae0Mofjp5APYEZ9GQakpX036Lrrg1L0fTuhLVv2105DovCNcJ4ehgrHFrtWZu1ovl05MNbXbSt48Od00r2fk55qh');

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
        console.log(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
