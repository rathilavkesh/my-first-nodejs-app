'use strict';

/* eslint-disable no-unused-expressions */
const { expect } = require('chai');

process.env.SECRET_KEY = 'myddTotalySecretKey';

const util = require('../app/util/utility');

describe('Utility Test Cases', () => {
  describe('Test encrypt() method', () => {
    it('should return encrypted value', () => {
      const encryptValue = util.encrypt('Hello World');
      expect(encryptValue).to.not.be.null;
    });

    it('should return null value', () => {
      const encryptValue = util.encrypt(null);
      expect(encryptValue).to.be.null;
    });

    it('should not return null value', () => {
      const encryptValue = util.encrypt('');
      expect(encryptValue).to.not.be.null;
    });
  });
});
