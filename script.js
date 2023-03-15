const phoneNumber = document.getElementById("phoneNumber");

phoneNumber.oninput = (e) => {
	e.target.value = autoFormatPhoneNumber(e.target.value);
};

function autoFormatPhoneNumber(phoneNumberString) {
	try {
		var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
		var match = cleaned.match(/^(1|)?(\d{0,2})?(\d{0,5})?(\d{0,4})?$/);
		var intlcode = match[1] ? "+1" : "";
		return [
			intlcode,
			match[2] ? "(" : "",
			match[2],
			match[3] ? ")" : "",
			match[3],
			match[4] ? "-" : "",
			match[4],
		].join("");
	} catch (err) {
		return "";
	}
}
