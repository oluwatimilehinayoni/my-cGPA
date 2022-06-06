
/** 
 * ADD INPUT FIELD FOR MORE COURSES

*/

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
                    <input type="number" name="course_unit_'+ courseRow + '" placeholder="Course Unit" onchange="calculateCourseUnit(this.value)" class="course_unit">\
                </div>\
        </div > ';

    var courseDiv = document.getElementById("addCourseDiv")
    return courseDiv.innerHTML += html
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
                <input type="number" name="course_unit_'+ courseRow + '" placeholder="Course Unit" onchange="calculateCourseUnit(this.value)" class="course_unit">\
            </div>\
            <input type="hidden" class="form-control" name="totalCourse" id="totalCourse" value="'+ courseRow + '">\
        </div> ';

    const courseDiv = document.getElementById("addCourseDiv")
    // return courseDiv.innerHTML += html
    return courseDiv.insertAdjacentHTML(afterend, html)
}


/** 
 * REAL-TIME FUNCTIONALITY
 * 

*/

function calculateCourseUnit() {

    let courseUnit = document.querySelectorAll('.course_unit');
    let totalUnit = 0;


    for (let i = 0; i < courseUnit.length; i++) {
        totalUnit += Number(courseUnit[i].value);

    }
    // GET TOTAL UNIT 
    console.log(totalUnit);
}

function calculateGrade() {

    let courseGrade = document.querySelectorAll('.course_grade');
    let totalGrade = 0;

    for (let i = 0; i < courseGrade.length; i++) {
        totalGrade += courseGrade[i].value ?? 0;
    }
    // GET TOTAL UNIT 
    console.log(totalGrade);
}



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
