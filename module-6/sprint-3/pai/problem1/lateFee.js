const Rentals = [
    { customer: "Raj", daysLate: 2, carType: "SUV", isFrequentCustomer: true },
    { customer: "Ananya", daysLate: 5, carType: "Sedan", isFrequentCustomer: false },
    { customer: "Kabir", daysLate: 0, carType: "Hatchback", isFrequentCustomer: false }
  ]
  

// Fine Rules:
// - ₹500/day for SUV
// - ₹300/day for Sedan
// - ₹200/day for Hatchback
// - 20% discount for Frequent Customers
// - Fine cap ₹5000


// Original fine: ₹2600
// Final fine after discount: ₹2200

// 2*500 = 1000 -200 = 800
// 5*300 = 1500
// 


function calCulateFine(customers){
    const fineRates = {
        SUV : 500,
        Sedan : 300,
        Hatchback : 200,
    }

    let originalTotalFine = 0
    let finalTotalFine = 0

    for(const customer of customers){
        let rate = fineRates[customer.carType]
        let fine = customer.daysLate*rate;

        if(fine > 5000){
            fine = 5000
        }
        originalTotalFine +=fine;

        if(customer.isFrequentCustomer){
            fine = fine * 0.8;
        }

        finalTotalFine +=fine;
    }

    console.log(`Oginial fine: ${originalTotalFine}`);
    console.log(`Final Fine after discount : ${finalTotalFine}`)
}

calCulateFine(Rentals);