function getTasks() {
    const tasks = [
        {
            quest: 'Зимой и летом одним цветом',
            ans: ['елка', 'ель', 'ёлка', 'сосна', 'елочка', 'ёлочка'],
        },
        {
            quest: 'Сидит дед во сто шуб одет',
            ans: ['лук', 'лучок', 'луковица']
        },
        {
            quest: 'На какое дерево садится ворона во время дождя',
            ans: ['на мокрое', 'мокрое', 'сырое', 'на сырое', 'влажное', 'на влажное']
        },
        {
            quest: 'В поле лестница лежит, дом по лестнице бежит',
            ans: ['поезд', 'паравоз', 'локомотив']
        },
    ]
    return tasks
}

function puzzle(question) {
    const answers = findAnswers(question)
    userAnswer = prompt(question)
    if (answers.includes(userAnswer.toLowerCase())) {
        alert("Super !!!")
        return 1
    } else {
        alert("Wrong ...")
        return 0
    }
}

function findAnswers(question) {
    const tasks = getTasks()
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].quest == question) {
            return tasks[i].ans
        }
    }
}

function main(tasks) {
    let isAgain
    do {
        let scores = 0
        for (const task of tasks) {
            scores += puzzle(task.quest)
        }
        isAgain = confirm(`Your scores = ${scores}. Try it again?`)
    } while (isAgain)

}

main(getTasks())



