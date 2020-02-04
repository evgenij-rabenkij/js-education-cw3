"use strict";

let webdriver = (function () {
	let instance;
	return function Construct_singletone () {
		if (instance) {
			return instance;
		}
		if (this && this.constructor === Construct_singletone) {
			instance = this;
		} else {
			return new Construct_singletone();
		}
	}
}());


module.exports = webdriver;