//Arrays methods

const students = [
    {
        name: 'John', grade: 8
    },
    {
        name: 'Paul', grade: 5
    },
    {
        name: 'George', grade: 6
    },
    {
        name: 'Ringo', grade: 8
    }
]

//For Each
const alunos = students.forEach(student => console.log(student))

//Some
const aprovaram = students.some(student => student.grade > 6)
console.log(aprovaram)

// Filter
const alunosAprovados = students.filter(student => student.grade >= 7)
console.log(alunosAprovados)

// Sort
students.sort((current, next) => current.grade - next.grade)
console.log(students)

//reduce
students.reduce((totalGrades, student) => totalGrades += student.grade , 0) / students.length