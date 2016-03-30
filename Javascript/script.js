var friends = {};

friends.ronak = {
    firstName: "Ronak",
    lastName: "Patni",
    number: "333-333-3333",
    address: ['Vile Parle','Mumbai','MA','400059']
    };
    
friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: "111-111-1111",
    address: ['One Microsoft Way','Redmond','WA','98052']
    };

friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "222-222-2222",
    address: ['1 Infinite Loop','Cupertino','CA','95014']
    };
    
friends.alekha ={
    firstName: "Alekha",
    lastName: "Narvekar",
    number: "444-444-4444",
    address: ['Vasai','Mumbai','MA','400060']
    };
    
    var list = function(obj){
        console.log("Printing friends details.......")
    for(var prop in obj){
        console.log(prop);    
    }
    };
    
    
var search = function(name) {
    for(var key in friends) {
        if(friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};

    list(friends);
    search("Alekha");
    
    
    