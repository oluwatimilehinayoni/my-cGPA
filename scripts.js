
/**
 * DECLARE VARIABLES FOR FUNCTIONS
 * 
 */
let message = '';
let courseGrade = document.querySelectorAll('.course_grade');
let courseUnit = document.querySelectorAll('.course_unit');
let addCourseFields = document.querySelector('.add_course_fields');
let addSemesterFields = document.querySelector('.add_semester_fields');
let result = document.querySelector('#grade_result');
let resultButton;
let courseRow = 5
semesterRow = 1;


// *******  EVENTS LISTENERS  ********
document.getElementById('reset').addEventListener('click', reset);
// document.getElementById('view_gpa').addEventListener('click', getGPA);
addCourseFields.addEventListener('click', addCourse);
addSemesterFields.addEventListener('click', addSemester);


/** 
 * ADD INPUT FIELD FOR MORE COURSES

*/
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
        '<div class="mode' + semesterRow + ' row my-4 semester">\
            <div class="col-9 display-6">\
                 Semester '+ semesterRow + '\
            </div>\
                <div class="col pt-1">\
                <button type="button" class="btn btn-danger" data-bs-dismiss="mode">&times;</button>\
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
    // TOTAL COURSE UNIT
    return tcu;
}


function calculateGrade() {
    let courseGrade = document.querySelectorAll('.course_grade');
    let courseUnit = document.querySelectorAll('.course_unit');

    let key = [];
    let val = [];
    let tpu = 0;
    let unit_mult;

    for (let i = 0; i < courseUnit.length; i++) {
        unit_mult = courseUnit[i].value;

        let grade_mult = 0;

        if (courseGrade[i].value === 'A') {
            Number(grade_mult += 5);
        }
        if (courseGrade[i].value === 'B') {
            Number(grade_mult += 4);
        }
        if (courseGrade[i].value === 'C') {
            Number(grade_mult += 3);
        }
        if (courseGrade[i].value === 'D') {
            Number(grade_mult += 2);
        }
        if (courseGrade[i].value === 'E') {
            Number(grade_mult += 1);
        }
        if (courseGrade[i].value === 'F') {
            Number(grade_mult += 0);
        }

        key.push(Number(unit_mult));
        val.push(grade_mult);
    }

    for (var i = 0; i < key.length; i++) {
        tpu += key[i] * val[i];
    }
    return tpu;

    //console.log(tpu);
    // console.log('Grade:  ' + val + ' ');
    // console.log('Unit:  ' + key + '');
}

function calculateGPA(tpu, tcu) {
    let gpa;
    gpa = tpu / tcu;
    return gpa;
}

function getGPA() {
    let y; let x;
    let courseGrade = document.querySelector('.course_grade');
    let courseUnit = document.querySelector('.course_unit');

    x = calculateCourseUnit();
    y = calculateGrade();
    gpa = calculateGPA(y, x);

    // if ((courseGrade.value.length || courseUnit.value.length) == 0) {
    //     message = 'Please Fill in the fields';

    //     alert(message);
    //     return true;

    // }

    if (isNaN(gpa)) {
        return result.textContent = '0.00';
    }
    if (gpa == Infinity) {
        return result.textContent = '0.00';
    }

    else {
        return result.textContent = gpa.toFixed(2);
    }

}

/**
 * REALTIME FUNCTIONALITY
 * 
 * DISPLAYS RESULT AS COURSES ARE BEING FILLED
 */
document.getElementById('addCourseDiv').addEventListener('change', call__getGPA);
courseGrade = document.querySelector('.course_grade');
courseUnit = document.querySelector('.course_unit');
courseUnit.addEventListener('change', call__getGPA);
courseGrade.addEventListener('change', call__getGPA);

function call__getGPA() {
    for (let i = 0; i < (courseGrade.length || courseUnit.length); i++) {
        courseGrade = document.querySelectorAll('.course_grade');
        courseUnit = document.querySelectorAll('.course_unit');

        let myGPA1 = courseUnit[i].addEventListener('change', getGPA);
        let myGPA2 = courseGrade[i].addEventListener('change', getGPA);

        myGPA1;
        myGPA2;
    }
}

/**
 * EMPTY ALL FIELDS AND CGPA
 * CHANGE gpa TO 0.00
 */
function reset() {
    courseGrade = document.querySelectorAll('.course_grade');
    courseUnit = document.querySelectorAll('.course_unit');

    for (let i = 0; i < courseGrade.length; i++) {
        const grades = courseGrade[i].value = '';
        const units = courseUnit[i].value = '';
        gpa = '0.00';
        result.textContent = gpa;
        units; grades;

        const courseDiv = document.querySelector("#addCourseDiv");
        courseRow = 5;
        semesterRow = 1;
        courseDiv.innerHTML = '';
        // courseDiv.insertAdjacentHTML('beforeend', html);
    }

}

document.getElementById("credit__year").innerHTML = new Date().getFullYear();



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
//         let gpa = new GPA(calculateGrade(), calculateCourseUnit());
//         this.tpu / this.tcu;
//     }
// }


// function calculateGrade() {

//     let courseGrade = document.querySelectorAll('.course_grade');
//     let tpu = 0;

//     for (let i = 0; i < courseGrade.length; i++) {
//         if (courseGrade[i].value === 'A') {
//             Number(tpu += 5);
//         }
//         if (courseGrade[i].value === 'B') {
//             Number(tpu += 4);
//         }
//         if (courseGrade[i].value === 'C') {
//             Number(tpu += 3);
//         }
//         if (courseGrade[i].value === 'D') {
//             Number(tpu += 2);
//         }
//         if (courseGrade[i].value === 'E') {
//             Number(tpu += 1);
//         }
//         if (courseGrade[i].value === 'F') {
//             Number(tpu += 0);
//         }
//         else {
//             Number(tpu += 0);
//         }

//     }
//     //   TOTAL POINT UNIT

//     return tpu;
// }