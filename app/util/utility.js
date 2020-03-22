const config = require('config');
const Cryptr = require('cryptr');

function Utility() {
  const secretKey = process.env.SECRET_KEY || config.get('app.secretKey');
  const cryptr = new Cryptr(secretKey);

  this.decrypt = (value) => {
    if (value !== null) {
      return cryptr.decrypt(value);
    }
    return null;
  };

  this.encrypt = (value) => {
    if (value !== null) {
      return cryptr.encrypt(value);
    }
    return null;
  };
}

module.exports = new Utility();
