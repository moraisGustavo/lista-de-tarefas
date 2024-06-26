const taskForm = document.getElementById('taskForm')
const taskInput = document.getElementById('taskInput')
const taskList = document.getElementById('taskList')
const btnTask = document.getElementById('addTaksBtn')


const allTasks = JSON.parse(window.localStorage.getItem('allTasks')) || []
allTasks.forEach(addTaskDOM) // Busca os itens no LocalStorege

taskInput.focus()

taskForm.addEventListener('submit', function (event) {
    event.preventDefault() // Cancela a atualização da pagina do submit

    const task = taskInput.value.trim()
    if (task !== '') {

        addTaskDOM(task)
        allTasks.push(task)
        localStorage.setItem('allTasks', JSON.stringify(allTasks))

        taskInput.value = ''
        taskInput.focus()
    } else {
        alert('Digite uma Tarefas')
    }

})

taskList.addEventListener('click', function(event){
    if(event.target.tagName === 'BUTTON'){
        const taskItem = event.target.parentElement; // busca o elemento pai do BUTTON (li)
        taskList.removeChild(taskItem)


        const taskText = taskItem.firstChild.textContent
        const taskIndex = allTasks.indexOf(taskText)
        if(taskIndex > -1){
            allTasks.splice(taskIndex, 1)
            localStorage.setItem('allTasks', JSON.stringify(allTasks))
        }
    }
})


function addTaskDOM(task) {
    const li = document.createElement('li')
    li.textContent = task

    const btnRemove = document.createElement('button')
    btnRemove.textContent = 'Remover'
    btnRemove.classList = 'remove'
    li.appendChild(btnRemove)
    taskList.appendChild(li)

    li.addEventListener('click', function(){
        li.classList.toggle('completed')
    })
}




