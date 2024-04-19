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

var makeTask = function (desciption, dateDeadline, evaluation) {
    return {
        id: id(),
        desciption: desciption,
        dateDeadline: dateDeadline,
        evaluation: evaluation,
        date: Date()
    }
}

function makeShop() {
    var obj = {}
    obj.items = []
    obj.add = add
    obj.addTask = addTask
    obj.remove = remove
    obj.update = update
    obj.display = display
    obj.displayAll = displayAll
    return obj
}

var add = function (task) {
    this.items.push(task)
    return this.items
}

var addTask = function (desciption, dateDeadline, evaluation) {
    var newtask = makeTask(desciption, dateDeadline, evaluation)
    this.items.push(newtask)
    return "Task add with sucsess !"
}

var id = generateID();

var display = function (task) {
    return task.desciption + " " + task.date + " " + task.dateDeadline + " " + task.evaluation
}

var displayAll = function () {
    for (var i = 0; i < this.items.length; i++) {
        console.log(display(this.items[i]))
    }
}


var remove = function (id) {
    return filter(this.items, function (element) {
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

var update = function (id, newval) {
    var arr = this.items
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            arr[i].desciption = newval
        }
    }
    return arr
}


var task1 = makeTask("Task1", "30/04/2024", " Task 1 not complete")
var task2 = makeTask("Task2", "30/05/2024", " Task 2 not complete")
var task3 = makeTask("Task3", "21/06/2024", " Task 3 not Complete")
var task4 = makeTask("Task4", "01/07/2024", " Task 4 not Complete")
var task5 = makeTask("Task5", "02/08/2024", " Task 5 not Complete")
var task6 = makeTask("Task6", "31/04/2024", " Task 6 not Complete")
var task7 = makeTask("Task7", "1/09/2024", " Task 7 not Complete")


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


$('td#id6').append(task6.id)
$('td#des6').append(task6.desciption)
$('td#datedeadline6').append(task6.dateDeadline)
$('td#date6').append(task6.date)
$('td#evaluation6').append(task6.evaluation)

$('td#id7').append(task7.id)
$('td#des7').append(task7.desciption)
$('td#datedeadline7').append(task7.dateDeadline)
$('td#date7').append(task7.date)
$('td#evaluation7').append(task7.evaluation)

var shop1 = makeShop()
shop1.add(task1)
shop1.add(task2)
shop1.add(task3)
shop1.add(task4)
shop1.add(task5)
shop1.remove(2)
shop1.update(1, "Meubles")
shop1.display(task1)
shop1.display(task2)
shop1.displayAll()
shop1.addTask("task6", "31/04/2024", "Task6 is not complet")
shop1.addTask("task7", "1/09/2024", "Task7 is not complet")

var pictures = ["images/2024.png", "images/20498237-task-manger.png", "images/25.jpg"]
$('#images').attr('src', pictures[0])
var count = 0
$('#images').on({
    'click': function () {
        count = (count + 1) % pictures.length
        $('#images').attr('src', pictures[count])

    }
});


var des = $('#Description').change(function(){
    $(this).val();
})
var dead = $('#DEADLINE').change(function(){
    $(this).val();
})
var evali = $('#ASSESSMENT').change(function(){
    $(this).val();
})

$("#submit").on("click", function () {
    addTask(des, dead, evali) 
})

$(document).ready(function () {
    $('#Description').change(function () {
        var input = $(this).val();
        $('ul').append('<li>' + input + ' <i class="fas fa-check"></i> <i class="fas fa-trash"></i></li>')
        $(this).val();
    });
    $('ul').on('click','.fa-trash',function(){
    $(this).parent('li').fadeOut(200);
    });
})

$(document).ready(function () {
    $('#DEADLINE').change(function () {
        var input = $(this).val();
        $('ul').append('<li>' + input + ' <i class="fas fa-check"> </i> <i class="fas fa-trash"></i></li>')
        $(this).val();
    });
    $('ul').on('click','.fa-trash',function(){
        $(this).parent('li').fadeOut(200);
        });
})

$(document).ready(function () {
    $('#ASSESSMENT').change(function () {
        var input = $(this).val();
        $('ul').append('<li>' + input + '<i class="fas fa-check"> </i> <i class="fas fa-trash"></i></li>')
        $(this).val();
    });
    $('ul').on('click','.fa-trash',function(){
        $(this).parent('li').fadeOut(200);
        });
})







