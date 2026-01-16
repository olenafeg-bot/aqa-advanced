let averageGrade = 94;

switch (true) {
    case averageGrade <60:
        console.log('Unsatisfactory');
        break;
    case averageGrade >= 61 && averageGrade <= 70:
        console.log('Satisfactory');
        break;
    case averageGrade >= 71 && averageGrade <= 80:
        console.log('Good');
        break;
    case averageGrade >= 81 && averageGrade <= 90:
        console.log('Very Good');
        break;
    case averageGrade >= 91 && averageGrade <= 100:
        console.log('Excellent');                      
}