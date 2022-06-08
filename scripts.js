
/** 
 * ADD INPUT FIELD FOR MORE COURSES

*/

let addCourseFields = document.querySelector('.add_course_fields');
let addSemesterFields = document.querySelector('.add_semester_fields');

let courseRow = 5
semesterRow = 1;

function addCourse() {
    courseRow += 1;
    html =
        '<div class="row" id="courseRow' + courseRow + '">\
                <div class="col-sm-5 border" >\
                    <input type="text" placeholder="Course Code">\
                </div>\
                <div class="col-sm-4 border">\
                   <select name="grade_'+ courseRow + '" id="grade" onchange="calculateGrade(this.value)" class="course_grade">\
                       <option value="" selected>Grade</option>\
                            <option value="A">A</option>\
                            <option value="B">B</option>\
                            <option value="C">C</option>\
                            <option value="D">D</option>\
                            <option value="E">E</option>\
                            <option value="F">F</option>\
                        </select>\
                </div>\
                <div class="col-sm-3 border">\
                    <input type="number" name="course_unit_'+ courseRow + '" onchange="calculateCourseUnit(this.value)" placeholder="Course Unit" min="1" max="6" class="course_unit">\
                </div>\
        </div > ';

    const courseDiv = document.querySelector("#addCourseDiv");
    // return courseDiv.innerHTML += html
    courseDiv.insertAdjacentHTML('beforeend', html);
}



/** 
 * ADD INPUT FIELD FOR MORE SEMESTER

*/

function addSemester() {
    semesterRow += 1;
    courseRow = courseRow + 1;
    html =
        '<div class="row my-4">\
            <div class="col-sm-9 display-6 me-5">\
                 Semester '+ semesterRow + '\
            </div>\
                <div class="col-sm-1 ms-5">\
                  x\
                </div>\
        </div>\
                    <div class="row">\
            <div class="col-sm-5 border">\
                <input type="text" placeholder="Course Code" class="">\
            </div>\
                        <div class="col-sm-4 border">\
                <select name="grade_'+ courseRow + '" id="grade" onchange="calculateGrade(this.value)" class="course_grade">\
                    <option value="" selected>Grade</option>\
                    <option value="A">A</option>\
                    <option value="B">B</option>\
                    <option value="C">C</option>\
                    <option value="D">D</option>\
                    <option value="E">E</option>\
                    <option value="F">F</option>\
                </select>\
            </div>\
            <div class="col-sm-3 border">\
                <input type="number" name="course_unit_'+ courseRow + '" placeholder="Course Unit" min="1" max="6" onchange="calculateCourseUnit(this.value)" class="course_unit">\
            </div>\
            <input type="hidden" class="form-control" name="totalCourse" id="totalCourse" value="'+ courseRow + '">\
        </div> ';

    const courseDiv = document.querySelector("#addCourseDiv");
    // return courseDiv.innerHTML += html
    courseDiv.insertAdjacentHTML('beforeend', html);
}


/** 
 * REAL-TIME FUNCTIONALITY
 * 
 * CALCULATES THE tcu AND tpu  ---- Total Point Unit and Total Course Unit -------

*/

function calculateCourseUnit() {

    let courseUnit = document.querySelectorAll('.course_unit');
    let tcu = 0;

    for (let i = 0; i < courseUnit.length; i++) {
        tcu += Number(courseUnit[i].value);

    }
    // GET TOTAL UNIT 
    console.log(tcu);
}

function calculateGrade() {

    let courseGrade = document.querySelectorAll('.course_grade');
    let tpu = 0;

    for (let i = 0; i < courseGrade.length; i++) {

        tpu += courseGrade[i].value;

    }
    // GET TOTAL UNIT  
    tpu = Array.from(tpu);
    tpu.shift();

    //Returns the Index of the grades in the array
    A = tpu.indexOf('A');
    B = tpu.indexOf('B');
    C = tpu.indexOf('C');
    D = tpu.indexOf('D');
    E = tpu.indexOf('E');
    F = tpu.indexOf('F');

    // //Convert the grades to the equivalent point ======= [A,B,C,D,E,F]=>[5,4,3,2,1,0]
    tpu[A] = 5;
    tpu[B] = 4;
    tpu[C] = 3;
    tpu[D] = 2;
    tpu[E] = 1;
    tpu[F] = 0;


    console.log(tpu);
}

addCourseFields.addEventListener('click', addCourse);
addSemesterFields.addEventListener('click', addSemester);


/*
function calculateGrade(str) {
    if (str.length == 0) {
        document.getElementById("result").innerHTML = "";
        document.getElementById("result").style.border = "0px";
        return;
    }
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("result").innerHTML = this.responseText;
            // document.getElementById("result").style.border = "1px solid #A5ACB2";
        }
    }
    xmlhttp.open("GET", "function.php?g=" + str, true);
    xmlhttp.send();
}


function calculateCourseUnit(str) {
    if (str.length == 0) {
        document.getElementById("result").innerHTML = "";
        document.getElementById("result").style.border = "0px";
        return;
    }
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("result").innerHTML = this.responseText;
            // document.getElementById("result").style.border = "1px solid #A5ACB2";
        }
    }
    xmlhttp.open("GET", "function.php?u=" + str, true);
    xmlhttp.send();
}

*/
