const payment = async (req, res) => {
  try {

    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({
        message: "Amount is required",
      });
    }

    // Simulated Payment
    return res.status(200).json({
      message: "Payment Successful",
      paymentStatus: "Success",
      amount,
      transactionId: "TXN" + Date.now(),
    });

  } catch (error) {

    return res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  payment,
};