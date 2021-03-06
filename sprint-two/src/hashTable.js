

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  var arr = [k, v];
  var replaced = false;

  for (var i = 0; i < bucket.length; i ++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      replaced = true;
    }
  }

  if (!replaced) {
    bucket.push(arr);
  }
  
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i].splice(0, 2);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 *insert = O(1)
 *retrieve =O(1)
 *remove = O(1)
 */


