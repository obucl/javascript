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
	 let interestData = [
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
 
	 for (let i = 0; i < data.length; i++) {
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
	 for (let i = 0; i < interestData.length; i++) {
		 interestData[i].interest = (interestData[i].principal * interestData[i].rate * interestData[i].time) / 100
	 }
	 console.log(interestData)
	 return interestData
 }
 interestCalculator(data)

