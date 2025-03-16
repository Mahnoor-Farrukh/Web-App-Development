var grade = prompt("Enter your score:");


switch (true) {
    case (grade >= 80 && grade <= 100):
        console.log("Your grade is A ");
        break;
    case (grade >= 70 && grade <= 89):
        console.log("Your grade is B ");
        break;
    case (grade >= 60 && grade <= 69):
        console.log("Your grade is C ");
        break;
    case (grade >= 50 && grade <= 59):
        console.log("Your grade is D ");
        break;
    case (grade >= 0 && grade <= 49):
        console.log("Your grade is F ");
        break;
    default:
        console.log("Invalid Grade");
}
