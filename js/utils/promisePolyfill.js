
Promise.prototype.always = function(onResolveOrReject) {
  return this.then(onResolveOrReject,
    function(reason) {
      onResolveOrReject(reason);
      throw reason;
    });
};

Promise.prototype.finally = function(onResolveOrReject) {
  return this.catch(function(reason){
    return reason;
  }).then(onResolveOrReject);
};