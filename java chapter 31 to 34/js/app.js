        // ============chapter 31-34===========
       
       // ==============question 1=============

    //    function tellTime() {
    //         var now = new Date();
    //         var theHr = now.getHours();
    //         var theMin = now.getMinutes();
    //         var thesec =now.getSeconds();
    //         alert(now);
    //          }
    //    tellTime() ;
   
       // ==============question 2=============

      //   var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      //   var now = new Date();
      //   var theMonth = now.getMonth();
      //   var nameOfToday = monthNames[theMonth];
      //   alert("Current month: " + nameOfToday);

       // ==============question 3=============

       
      //   var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      //   var now = new Date();
      //   var theDay = now.getDay();
      //   var nameOfToday = dayNames[theDay];
      //   alert("Today is " + nameOfToday);


// ==============question 4=============

// var getDate = new Date();
// var getDay = getDate.getDay();
// if (getDay === 0 || getDay === 6) {
//     alert("It's Fun Day");
// }
// else {
//     alert("It's working Day")
// }


// ==============question 5=============

// var date = new Date().getDate();
// if (date < 16) {
//    alert("First fifteen days of the month");
// }
// else {
//    alert("Last fifteen days of month");
// }


// ==============question 6=============

      //  var currentDate = new Date();
      //   var milliseconds = currentDate.getTime() / 1000;
      //   var minutes = currentDate.getTime() / (1000 * 60);

      //   alert(currentDate);
      //   alert("Elapsed milliseconds since January 1, 1970: " + milliseconds);  
      //   alert("Elapsed minutes since January 1, 1970: " + minutes);


// ==============question 7=============

// var date = new Date().getHours();

// if (date >= 0 && date < 12) {
//    alert("It's AM");
// }
// else{
//    alert("It's PM");
// }

// ==============question 8=============

// var laterDate = new Date("December 31, 2020");
// alert(laterDate);

// ==============question 9=============

// var now = new Date("june 18, 2015");
// now = now.getTime() / (1000 * 60 * 60 * 24);
// now = Math.floor(now);
// alert(now + " days have passed since 1st Ramadan, 2015");


// ==============question 10=============

// let takingTodaysTime = new Date();
//  let takingTimeSince5Dec = new Date(2015, 11, 5);

//  let takingDifference = takingTodaysTime.getTime() - takingTimeSince5Dec.getTime();

//  let secsDifference = Math.floor(takingDifference / 1000);

//  alert("On reference date " + takingTimeSince5Dec + ", " + secsDifference + " seconds have passed since beginning of 2015.");
//  document.write("On reference date " + takingTimeSince5Dec + ", " + secsDifference + " seconds have passed since beginning of 2015.");

 
// ==============question 11=============


// var now = new Date();
// var hours = now.getHours();
// now.setHours(hours - 1);
// alert("current date: " + new Date() + " 1 hours ago, it was " + now);


// ==============question 12=============

// var now = new Date();
// var years = now.getFullYear();
// now.setFullYear(years - 100);
// alert("current date: " + new Date() + " 100 year back, it was " + now);


// ==============question 13=============


// var age = +prompt("What is your age?","20");

// var year = new Date().getFullYear() - age;

// alert("Your birth year is " + year);

// ==============question 14=============

// document.write("<h1>K-electric Bill</h1><br><br>");

//  let userName = prompt("Enter your name:");
//  document.write("Customer Name: " +"<b>" + userName + "</b><br>");

//  let theCurrentDate = new Date();
//  let extractTheMonth = theCurrentDate.getMonth();
//  let nameOfAllMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//  let extractedMonth = nameOfAllMonths[extractTheMonth];
//  document.write("Month: " +"<b>" + extractedMonth + "</b><br>");

//  let numOfUnits = +prompt("Enter the amount of units consumed:");
//  document.write("Number of Units: " +"<b>" + numOfUnits + "</b><br>");

//  let chargePerUnit = 16;
//  document.write("Charges per unit: " +"<b>" + chargePerUnit + "</b><br><br>");

//  let netAmountInDueDate = numOfUnits * chargePerUnit;
//  document.write("Net Amount Payable (within Due Date): " +"<b>" + netAmountInDueDate + "</b><br>");

//  let latePaymentTax = 350;
//  document.write("Late Payment Surcharge: " +"<b>" + latePaymentTax + "</b><br>");

//  let netAmountAfterDueDate = netAmountInDueDate + latePaymentTax;
//  document.write("Gross Amount Payable (after Due Date): " +"<b>" + netAmountAfterDueDate + "</b>");