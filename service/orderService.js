angular.module("myApp")
  .service("productOrderService", function ($http) {
  
    function getOrderData() {
        return $http.get("http://localhost:90/orderDetails").then(function (response) {
  
          return response.data;
        });
    };



  function addOrder(newOrder){
    return $http.post(
      "http://localhost:90/orderDetails",
      newOrder,
      {
        headers : {
          "content-type" : "application/json"
        }
      }
    )
    .then(function(response){
      return response.data;
    })
  }


  return {
    getOrderData:getOrderData,
    addOrder:addOrder
  }
});
