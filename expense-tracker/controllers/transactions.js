// @desc  Get all transactions
//@route  Get /api/v1/transactions
//@access Public

exports.getTransactions = (req, res, next) => {
  res.send('GET transactions');
};

// @desc  Add transactions
//@route  Post /api/v1/transactions
//@access Public

exports.addTransactions = (req, res, next) => {
  res.send('POST transaction');
};

// @desc  Delete transactions
//@route  DELETE /api/v1/transactions/:id
//@access Public

exports.deleteTransactions = (req, res, next) => {
  res.send('DELETE transactions');
};
