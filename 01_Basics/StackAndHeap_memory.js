// Stack - Primitive 
// Heap - No primitive

let myname = "Satyam"

let newname = myname
 newname = "coder"
 
 console.log(myname);// these are stored in stack and they give output which is copy 
 console.log(newname);// these are stored in stack and they give output which is copy 


 let useOne = {
      userEmail: "Satyam@google.com"
      
 }

 let userTwo = useOne

 userTwo.Email = "satyam@gmail.com"
 
console.log(userOne.Email);// they use heap to store data and we get orginal value and any modification is done on the orginal or we can say reference
console.log(userTwo.Email);

