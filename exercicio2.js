const students = [
    {
        name: "Yan",
        n1: 8,
        n2: 9,        
    },
    {
        name: "Luana",
        n1: 8,
        n2: 10,
    },
    {
        name: "João",
        n1: 3,
        n2: 5,
    },
]


function mediaStudents(student) {
    let media = (student.n1 + student.n2) / 2
    
    if(media >= 7) {
        return `A média do(a) aluno(a) ${student.name} é: ${media}
Parabéns ${student.name}! Você foi aprovado(a) no concurso!`
    } else {
        return `A média do(a) aluno(a) ${student.name} é: ${media}
Não foi dessa vez, ${student.name}! Tente novamente.`
    }
    
}

for (let student of students) {
    let messageStudents = mediaStudents(student)
    alert(messageStudents)
}