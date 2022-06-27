const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   let weightLostInAMonth = 0;
   // write logic here 
   var TotalburntCalories =((cycling*2+running*2+swimming*2)*4)-extraCalorieInTake*30;
   weightLostInAMonth= (TotalburntCalories/1000);

   return weightLostInAMonth;
   
}

module.exports = calculateWeightLostInAMonth

