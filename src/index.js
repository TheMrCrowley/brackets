module.exports = function check(str, bracketsConfig) {
	const bracketsArr = str.split('');

	for (let i = 0; i < bracketsArr.length; i++) {
		for (let j = 0; j < bracketsConfig.length; j++) {
			if (bracketsArr[i] === bracketsConfig[j][0] && bracketsArr[i + 1] === bracketsConfig[j][1]
				) {
					bracketsArr.splice(i, 2);
					i = i - 2;
				}
		}
	}
	return bracketsArr.length == 0 ? true : false;
}