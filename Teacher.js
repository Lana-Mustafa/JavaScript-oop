//import{Student}from './Student.js'

class Teacher extends Student{
    constructor (id,name,email,mobile_number,salary,subjects){
    super (id,name,email,mobile_number);
    this.salary=salary;
    this.subjects=subjects;
   }
getSalary(){

    return typeof(this.salary);
}
getSubjects(){

    return typeof (this.subjects);
}

}
