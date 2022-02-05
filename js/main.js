
for (let sharp="#"; sharp.length<8; sharp+="#") {
	console.log(sharp);
}

for (let i = 1; i<101; i++) {
	let output = "";
	if (i%3 == 0) {
		output += "Fizz"
	}
	if (i%5 == 0) {
		output += "Buzz"
	}
	console.log(output || i)
}

let output = " "
for (i=0;i <20; i++) {
	for (j=1; j<9; j++) {
		if (j%2 == 0) {
			output += "#"
		} else {output +=" "}
	} console.log(output)
	console.log("\n")
}