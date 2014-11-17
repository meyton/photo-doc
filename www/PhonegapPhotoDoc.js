/*
 * Obiekt ktory wywoluje plugin PhotoDoc
 */
var exec = require('cordova/exec');
var PhonegapPhotoDoc = {
	takePhoto: function(success, failure, data) {		
		cordova.exec(
			success,
			failure,
			'PhotoDoc',
			'takePhoto',
			data
		);
	}
};
module.exports = PhonegapPhotoDoc;