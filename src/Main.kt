import org.w3c.dom.Element
import org.w3c.dom.HTMLInputElement
import kotlin.browser.document

fun main() {
    document.addEventListener("DOMContentLoaded", {
        val todoUl = document.querySelector("#todo_ul")
        val doneUl = document.querySelector("#done_ul")
        val todoList = TodoManager(todoUl!!, doneUl!!)

        document.querySelector("#button")?.addEventListener("click", {
            println("click!")
            val input = document.querySelector("#input") as HTMLInputElement
            todoList.addTodo("${input.value}")
            input.value = ""
        })
    })
}

data class Task(val id: Int, val name: String, val isChecked: Boolean)

class TodoManager(private val todoUl: Element, private val doneUl: Element) {
    fun addTodo(name: String) {
        if (name == "") {
            return
        }
        val li = document.createElement("li")
        li.textContent = name
        li.addEventListener("click", {
            println("click on $it")
        })
        todoUl.appendChild(li)
    }
}
