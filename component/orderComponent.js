angular.module("myApp",[])
	.component("productOrderComponent", {

		bindings: {
     
		},

		templateUrl: "component/orderComponent.html",

		controller: ["productOrderService",productOrderController],

		controllerAs: "orderController"

    });
    
    function productOrderController(productOrderService)
    {
        var self=this;
        self.orderData="";
        
            productOrderService.getOrderData().then(function(response){
              self.orderData=response;
        })
    

    function Order()
{
    this.name = "";
    this.address = "";
    this.city = "";
    this.state = "";
    this.zip = "";
}

  // function orderController(productOrderService){
    var self=this;
    
    // self.Order="";

    self.newOrder = new Order();
    
    self.addOrder= function(){
        
        var self=this;

        console.log("New Order",self.newOrder);
        
        productOrderService.addOrder(self.newOrder)
            .then(
                function(response){
                 
                    alert("Order added successfully.");
                    
                    self.Order=response;
                   
                    self.newOrder = new Order(); // CleanUp
                }
            )
    }
    
  }  
    
    

