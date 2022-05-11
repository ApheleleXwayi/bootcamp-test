
1// greet
function greet(name){
  var results = 'Hello, ' + name
  return results
  }
2// isFromBellville 

function isFromBellville (input){
return input.startsWith('CY')

}
console.log(console.log(isFromBellville('CJ 123')))


3// regCheck
 
function isFromCapeTown(input){
  return input.startsWith("CA")
  }
  console.log(isFromCapeTown("CA 123 908"))

  4//  countRegNumber
   function countRegNumber(regNo){
    var array = regNo.split(',');
     return array.length;
   console.log(array);
   
   }
  
   console.log(countRegNumber('CA 182736,CY 523519,CJ 812328'))
  // 5isWeekday
   function isWeekday(input){
    if(input.startsWith('S')){
       return false
       
       }
    
    else{
       return true
       
       }
    }
    // 6yearsAgo
    function yearsAgo(year){

   
      const yearAgo = new Date(year) 
         
   
      return yearAgo
   }
   console.log((new Date().getFullYear() - 2000), yearsAgo(2000));
   console.log((new Date().getFullYear() - 1976), yearsAgo(1976))
  //  7countAllPaarl
  function allPaarl(values){
var myArray = []
var regList = values.split(", ")

for (var i=o;i<regList.length;i++);
 var eachReg = regList [i]
 if (eachReg.startsWith(CJ));{
myArray.push(eachReg)
 }
 return myArray
}

// 8isFrom

  function isFrom(regNo,regEnd){
    //return regNo.startsWith(regEnd)
    if (regNo.startsWith(regEnd)){
        return true
    }else{
    return false
    }
    
    }
    
    console.log(isFrom('CJ 98912', 'CJ'));
    
    console.log(isFrom('CY 874324', 'CA'))
  // 9countAllFromTown
 
  // transportFee

 function  transportFee(shifts){
 
  if(shifts === "mornning" ){
  
    return "R" + 20
    }
    if (shifts === "afternoon"){
        
      return "R" + 10 
    }
    
    if(shifts === "nightshift"){
       return 'free'
       }
  }
  
  
//9totalPhoneBill
function totalPhoneBill(call,sms){
  var totalPhoneBill = call * 2 +  sms * 3
    return totalPhoneBill
  }
  console.log('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
// 10fromWhere


// findItemsOver20
// findItemsOver
// mostProfitableDepartment