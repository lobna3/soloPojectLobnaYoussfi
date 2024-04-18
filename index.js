function each(array, func) {
    for (var i = 0; i < array.length; i++) {
      func(array[i], i);
    }
  }
  
  function map(array, f) {
    var acc = [];
    each(array, function (element, i) {
      acc.push(f(element, i));
    });
    return acc;
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
      if (predicate(element, index)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function (element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }

  function generateID() {
    var count = 0;
    return function () {
      return count++;
    };
  }
  var id = generateID();
  

  var makeTask = function (desciption,dateDeadline,evaluation) {
    return {
      id: id(),
      desciption:desciption,
      dateDeadline:dateDeadline,
      evaluation:evaluation,
      date: Date()
    }
  }

  function makeShop() {
    var obj = {}
    obj.items = []
    obj.add = add
    obj.remove = remove
    obj.update=update
    obj.display= display
    obj.displayAll=displayAll
    return obj
  }

  var add = function () {
    this.items.push(task1)
    return this.items
  }

  var remove = function(id){
    return filter(this.items,function(element){
        return element.id !== id
    })
  }

  var removeById = function (id) {
    var arr = this.items
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        arr.splice(i, 0)
      }
    }
    return arr
  }

  var update = function(id,newval){
    var arr = this.items
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
       arr[i].desciption=newval
      }
    }
    return arr
  }

  var display= function(task){
    return task.desciption+" "+task.date+" "+task.dateDeadline+" "+task.evaluation
   }

   var displayAll = function(){
    for (var i =0; i<this.items.length;i++){
        console.log(display(this.items[i]))
    }
   }
   
   var task1= makeTask("","","")
   var task2=makeTask("","","")
   var task3= makeTask("","","")

   $('li#des').append(task1.desciption)
   $('li#datedeadline').append(task1.dateDeadline)
   $('li#date').append(task1.date)
   $('li#evaluation').append(task1.evaluation)
   $('#images').attr('src', task1.images[0])
   
   var count =0
   $('#images').on({
     'click': function () {
       count=(count+1)% product1.images.length
      $('#images').attr('src', product1.images[count])
      
     }
   });

   var shop1 = makeShop()
shop1.add(task1)
shop1.add(task2)
shop1.add(task3)
shop1.remove(2)
shop1.update(1,"Meubles")
shop1.display(task1)
shop1.display(task2)
shop1.displayAll()
   
 

  