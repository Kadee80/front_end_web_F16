//random number between 0 and n
function randomNumber(n) {
    var rn = Math.floor(1 + Math.random() * n);
    alert(rn);
};

//randomNumber(20);

//random number within the range provided in min and max parameters
function randNum(min, max) {
    var rn = Math.floor(Math.random() * (1 + max - min) + min);
    //alert(rn);
    return rn;
};

//randNum(10,25);

var students = [
    "Naz",
    "Cindy",
    "Mate",
    "Yihan",
    "Tim",
    "Alexis",
    "David",
    "Tiffany",
    "Julian",
    "Shelby",
    "Marilu",
    "Teresa",
    "Krishna",
    "Jack",
    "Katie",
    "Rob",
    "Janina",
    "Michelle",
    "Liam"
];

function listStudents() {
    //grab our content div
    var content = document.getElementById("content");
    //create a ordered list node to store our students
    var ol = document.createElement("OL");
    content.appendChild(ol);

    //loop through our student array
    for (var i = 0; i < students.length; i++) {
        //create a list item 
        var li = document.createElement("LI");
        //pull out the student at index i
        var t = students[i];
        //pass that name into a text node we create
        var text = document.createTextNode(t);

        //add the text node to the li
        li.appendChild(text);
        //add the list item to the ol
        ol.appendChild(li);

    };

};

function sortStudents() {
    students.sort();
    console.log(students);
};

function shuffleStudents() {
    for (var i = students.length - 1; i >= 0; i--) {
        
        //get a random number between 0 and the array length
        var randomIndex = Math.floor(Math.random() * (i + 1));

        //place the item at the random index location store as a var
        var itemAtIndex = students[randomIndex];

        //swap the random item and the item at i
        students[randomIndex] = students[i];

        //set the random index to the value of the item at i
        students[i] = itemAtIndex;
        //set the value of i to the item random index item we stored in a var


    };

    console.log(students);
};
