/*var braintree = require("braintree");

var gateway = new braintree.BraintreeGateway({
 
environment: braintree.Environment.Sandbox,
merchantId: "6g9mdmgchvv9v2fx",
publicKey: "mvcd878yq6q74zhn",
privateKey: "b63d0aec0ad52d4dadd7ee3df7560816"
});

exports.getToken = (req, res) => {
  gateway.clientToken.generate({}, function(err, response) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.send(response);
    }
  });
};

exports.processPayment = (req, res) => {
  let nonceFromTheClient = req.body.paymentMethodNonce;

  let amountFromTheClient = req.body.amount;
  gateway.transaction.sale(
    {
      amount: amountFromTheClient,
      paymentMethodNonce: nonceFromTheClient,

      options: {
        submitForSettlement: true
      }
    },
    function(err, result) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(result);
      }
    }
  );
};*/
