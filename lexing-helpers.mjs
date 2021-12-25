export class LexToken {
	constructor(start, end, text) {
		this.start = start; this.end = end; this.text = text
	}
}

export function addX(regex) {
	return function(src, i, dest) {
		regex.lastIndex = i
		let m = src.match(regex)
		if (m) {
			let j = regex.lastIndex
			dest.push(
				new LexToken(i, j, m[0]))
			return j
		} else return false
	}
}
