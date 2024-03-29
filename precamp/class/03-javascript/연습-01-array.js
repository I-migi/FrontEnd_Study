let classmates = ["철수","영희","훈이"]
// VM154:1 Uncaught SyntaxError: Unexpected string

classmates[0]
// '철수'
classmates[1]
// '영희'
classmates[2]
// '훈이'
classmates.includes("훈이")
// true
classmates.includes("맹구")
// false
classmates.length
// 3
classmates.push("맹구")
// 4
classmates
// (4) ['철수', '영희', '훈이', '맹구']
classmates.pop("맹구")
// '맹구'
classmates
// (3) ['철수', '영희', '훈이']
classmates.pop()
// '훈이'
classmates
// (2) ['철수', '영희']