// angular.module("myApp")
// .component("orderAdd",{
//     bindings:{
    
//     },
//     templateUrl:"component/orderComponent.html",
//     controller:["productOrderService",orderAddController],
//     controllerAs: "orderAddCtrl"
// });

// function Order()
// {
//     this.name = "";
//     this.address = "";
//     this.city = "";
//     this.state = "";
//     this.zip = "";
// }

// function orderAddController(productOrderService){
//     var self=this;

//     self.newOrder = new Order();
    
//     self.addOrder= function(){
        
//         var self=this;

//         console.log("New Order",self.newOrder);
        
//         productOrderService.addOrder(self.newOrder)
//             .then(
//                 function(response){
//                     alert("Order added successfully.");
//                     self.newOrder = new Order(); // CleanUp
//                 }
//             )
//     }

// }