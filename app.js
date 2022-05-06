
let rollNumber      = prompt('Enter Roll Number From 1 to 10');

let bn      = prompt('Bangla Marks?');
let en      = prompt('EngLish Marks?');
let math    = prompt('Math Marks?');
let s       = prompt('Science Marks?');
let h       = prompt('History Marks?');

let totalMarks = +bn + +en + +math + +s + +h;


studentInfo.forEach( (value, index) => {

    if(value.Roll === +rollNumber ){
        console.log(`

        Roll    :      ${rollNumber}
        Name    :      ${studentInfo[index].Name}
        Class   :      ${studentInfo[index].Class}
        Gender  :      ${studentInfo[index].Gender}
        Board   :      ${studentInfo[index].Board}

                                Marksheet: 
        ============================================================
        Subject || Marks || GPA || Grade || CGPA  || Final Result
        ============================================================
        Bangla     ${bn}      ${getGpa(bn)}       ${getGrade(bn)}        ${(getGpa(bn) + getGpa(en) + getGpa(math) + getGpa(s) + getGpa(h)) / 5}       ${finalResult(bn)}           
        English    ${en}      ${getGpa(en)}      ${getGrade(en)}                    ${finalResult(en)}           
        Math       ${math}      ${getGpa(math)}     ${getGrade(math)}                    ${finalResult(math)}
        Science    ${s}      ${getGpa(s)}       ${getGrade(s)}                   ${finalResult(s)}
        History    ${h}      ${getGpa(h)}      ${getGrade(h)}               ${finalResult(h)}
    `)
    }
})
