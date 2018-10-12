
function tester() {
}

function get(req, res, next) {
  res.status(200).json({ source: 'Tester' });
}

tester.prototype = {
  get: get
};

var tester = new tester();

module.exports = tester;
