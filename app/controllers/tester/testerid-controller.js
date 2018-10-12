
function tester() {
}

function get(req, res) {
  res.status(200).json({ id: req.params.test_id });
}

tester.prototype = {
  get: get
};

var tester = new tester();

module.exports = tester;
