for (var i = 5; i <= 120; i+=10) {
	console.log(i)
}

for (var i = 4096; i >= 1; i= i/2) {
	console.log(i)
}

var AmericanPresidents = ["George Washington", "John Adams", "Thomas Jefferson"]
console.log(AmericanPresidents)

for (i = 0; i < AmericanPresidents.length; i++) {
	console.log(i + AmericanPresidents [i])
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (prop in antSpecies) {
	console.log(prop);
}
