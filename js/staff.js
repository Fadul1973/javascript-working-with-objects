// IIFE
(function() {
// Start
var staff =
 [
 {
 name : "Bob Smith",
 email : "b.smith@busy.com"
 },
 {
 name : "Jane Johnson",
 email : "j.johnson@busy.com"
 },
 {
 name : "Ethan Hawkson",
 email : "e.hawkson@busy.com"
 },
 {
 name : "Julie Grant",
 email : "j.grant@busy.com"
 }
]

var rebuildList = function(){
    document.getElementById('staffTable').innerHTML = "";
    staff.forEach(function(element) {
    var newStaffRow = document.createElement("tr");
    var newStaffName = document.createElement("td");
    newStaffName.innerHTML = element.name;
    var newStaffEmail = document.createElement("td");
    newStaffEmail.innerHTML = element.email;
    newStaffRow.appendChild(newStaffName);
    newStaffRow.appendChild(newStaffEmail);
    document.getElementById('staffTable').appendChild(newStaffRow);
    });
};
    document.getElementById('addStaffForm').addEventListener('submit',
    function(ev){
    ev.preventDefault();
    let newStaffName = document.getElementById('staffName').value;
    let newStaffEmail= document.getElementById('staffEmail').value;
    staff.push({name: newStaffName, email: newStaffEmail});
    console.dir(staff)
    rebuildList();
    })
    // initialate the
    rebuildList();
// End
}) ();
//var myCar = {}

// myCar['colour'] = "blue";
// myCar['weels'] = 4;
// myCar['feul'] = "Desal";
// myCar['made'] = 'toyota';

// console.dir(myCar);
// console.info(myCar['weels']);
// var myCar = {
//     model : "toyota",
//     weels : 4,
//     feul : "petrol",
//     colur : "red",
    
//     drive : function() {
//         return this.weels  +"moving";
//     }
// };
// for(var i in myCar){
//     console.info(myCar[i]);
// }

// function Car(model, weels, feul, colur) {
//     this.model = model;
//     this. weels = weels;
//     this. feul = feul;
//     this.colur = colur;
// };
// myCar = new Car("toyota", 4, "petrol", "red");

// // console.info(Car);
// // console.info(Car.weels);

// for(var i in myCar){
//     console.info(myCar[i]);s
// }