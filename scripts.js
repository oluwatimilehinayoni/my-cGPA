
/** 
 * ADD INPUT FIELD FOR MORE COURSES

*/

let addCourseFields = document.querySelector('.add_course_fields');
let addSemesterFields = document.querySelector('.add_semester_fields');
let result = document.querySelector('#gradeResult');

addCourseFields.addEventListener('click', addCourse);
addSemesterFields.addEventListener('click', addSemester);

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
    // return tcu;
    console.log(tcu);
}

function calculateGrade() {

    let courseGrade = document.querySelectorAll('.course_grade');
    let tpu = 0;

    for (let i = 0; i < courseGrade.length; i++) {
        if (courseGrade[i].value == 'A') {
            tpu += 5;
        }
        if (courseGrade[i].value == 'B') {
            tpu += 4;
        }
        if (courseGrade[i].value == 'C') {
            tpu += 3;
        }
        if (courseGrade[i].value == 'D') {
            tpu += 2;
        }
        if (courseGrade[i].value == 'E') {
            tpu += 1;
        }
        if (courseGrade[i].value == 'F') {
            tpu += 0;
        }

    }
    //   TOTAL COURSE UNIT
    // return tpu;
    console.log(tpu);
}




/**
 * CALCULATES THE GPA FROM THE TPU AND TCU
 *
 * DISPLAYS THE RESULT ON PAGE
 */

// class GPA {
//     tpu;
//     tcu;

//     constructor(tpu, tcu) {
//         this.tpu = tpu;
//         this.tcu = tcu;
//     }

//     getGPA() {
//         this.tpu / this.tcu;
//     }
// }



// let gpa = new GPA(calculateGrade(), calculateCourseUnit());
// gpa.getGPA();



unit = calculateCourseUnit();
grade = calculateGrade();



result.textContent = grade / unit;
console.log(result.textContent);