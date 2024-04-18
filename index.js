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

  var add = function (desciption,dateDeadline,evaluation) {
    var newtask=makeTask(desciption,dateDeadline,evaluation)
    this.items.push(newtask)
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
   
   var task1= makeTask("Task1","30/04/2024"," Task 1 not complete")
   var task2=makeTask("Task2","30/05/2024"," Task 2 not complete")
   var task3= makeTask("Task3","21/06/2024"," Task 3 not Complete")
   var task4= makeTask("Task4","01/07/2024"," Task 4 not Complete")
   var task5= makeTask("Task5","02/08/2024"," Task 5 not Complete")

   $('td#id').append(task1.id)
   $('td#des').append(task1.desciption)
   $('td#datedeadline').append(task1.dateDeadline)
   $('td#date').append(task1.date)
   $('td#evaluation').append(task1.evaluation)

   $('td#id2').append(task2.id)
   $('td#des2').append(task2.desciption)
   $('td#datedeadline2').append(task2.dateDeadline)
   $('td#date2').append(task2.date)
   $('td#evaluation2').append(task2.evaluation)


   $('td#id3').append(task3.id)
   $('td#des3').append(task3.desciption)
   $('td#datedeadline3').append(task3.dateDeadline)
   $('td#date3').append(task3.date)
   $('td#evaluation3').append(task3.evaluation)

   $('td#id4').append(task4.id)
   $('td#des4').append(task4.desciption)
   $('td#datedeadline4').append(task4.dateDeadline)
   $('td#date4').append(task4.date)
   $('td#evaluation4').append(task4.evaluation)

   $('td#id5').append(task5.id)
   $('td#des5').append(task5.desciption)
   $('td#datedeadline5').append(task5.dateDeadline)
   $('td#date5').append(task5.date)
   $('td#evaluation5').append(task5.evaluation)


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
shop1.add(task4)
shop1.add(task5)
shop1.remove(2)
shop1.update(1,"Meubles")
shop1.display(task1)
shop1.display(task2)
shop1.displayAll()
   
 

  