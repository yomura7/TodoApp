import org.w3c.dom.Element
import org.w3c.dom.HTMLInputElement
import kotlin.browser.document

fun main() {
    document.addEventListener("DOMContentLoaded", {
        val todoUl = document.querySelector("#todo_ul")
        val doneUl = document.querySelector("#done_ul")
        val todoList = TodoManager(todoUl!!, doneUl!!)

        // add dummy task
        todoList.addTodo("今月の家賃を支払う")
        todoList.addDone("洗剤を買う")
        todoList.addDone("本棚を掃除する")

        document.querySelector("#add_button")?.addEventListener("click", {
            val input = document.querySelector("#input") as HTMLInputElement
            todoList.addTodo("${input.value}")
            input.value = ""
        })
        document.querySelector("#todo_clear_button")?.addEventListener("click", {
            todoList.clearTodoList()
        })
        document.querySelector("#done_clear_button")?.addEventListener("click", {
            todoList.clearDoneList()
        })
    })
}

class TodoManager(private val todoUl: Element, private val doneUl: Element) {
    fun addTodo(name: String) {
        if (name == "") return
        val li = document.createElement("li")
        li.textContent = name
        li.addEventListener("click", {
            todoUl.removeChild(li)
            addDone(name)
        })
        todoUl.appendChild(li)
    }
    fun addDone(name: String) {
        if (name == "") return
        val li = document.createElement("li")
        li.textContent = name
        li.addEventListener("click", {
            doneUl.removeChild(li)
            addTodo(name)
        })
        doneUl.appendChild(li)
    }
    fun clearTodoList() {
        while (todoUl.firstChild != null) {
            todoUl.firstChild?.let { todoUl.removeChild(it) }
        }
    }
    fun clearDoneList() {
        while (doneUl.firstChild != null) {
            doneUl.firstChild?.let { doneUl.removeChild(it) }
        }
    }
}
