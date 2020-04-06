const data = [
 {
	principal: 2500,
	time: 1.8
 },
 {
	principal: 1000,
	time: 5
 },
 {
	principal: 3000,
	time: 1
 },
 {
	principal: 2000,
	time: 3
 }
]

const interestCalculator = (data) => {
	let interestData = data

	for (let i = 0; i < data.length; i++) {
		var rate;
		if (data[i].principal >= 2500 && data[i].time > 1 && data[i].time < 3) {
			interestData[i].rate = 3
		} else if (data[i].principal >= 2500 && data[i].time >= 3) {
			interestData[i].rate = 4
		} else if (data[i].principal < 2500 && data[i].time <= 1) {
			interestData[i].rate = 2
		} else {
			interestData[i].rate = 1
		}
	}
	for (let i = 0; i < data.length; i++) {
		interestData[i].interest = (data[i].principal * data[i].rate * data[i].time) / 100
	}
	console.log(interestData)
	return interestData
}
interestCalculator(data)

