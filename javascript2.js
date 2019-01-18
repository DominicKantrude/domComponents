

const constructElement = (...props) => {
    return `<${props[0]} class="${props[2]}">${props[1]}</${props[0]}>`
}

const makeStudentComponent = (...props) => {


    return `
<div id="student">
${constructElement("h1", props[0], "xx-large " + props[3])}
${constructElement("section", props[1], "bordered dashed section--padded " + props[3])}
${constructElement("aside", props[2], "pushRight " + props[3])}
</div>
`
}

for (student of students) {
    let studentComponent = ""
    if (student.score >= 60) {
        studentComponent = makeStudentComponent(student.name, student.clazz, student.info, "passing")
    } else {
        studentComponent = makeStudentComponent(student.name, student.clazz, student.info, "failing")
    }
    const container = document.querySelector("#container")
    container.innerHTML += studentComponent
}


















