package restfull.todo_webservice;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class HardData {

    public static List<Todo> tasks = new ArrayList<>();
    public static long idCounter = 0;

    static {
        tasks.add( new Todo(++idCounter, "kelvdp", "Clean house", new Date(), false));
        tasks.add( new Todo(++idCounter, "kelvdp", "Call Stacey", new Date(), false));
        tasks.add( new Todo(++idCounter, "kelvdp", "Decide on an ourfit", new Date(), false));
    }

    public List<Todo> findAllTasks(String username) {
        return tasks;
    }

    public Todo findTask(Long id) {
        Todo task = findById(id);
        return task;
    }

    public Todo deleteTask(long id) {
        Todo item = findById(id);

        if (tasks.remove(item)) {
            return item;
        }

        return null;
    }

    public Todo saveTask(Todo task) {
        if (task.getId() == 0 || task.getId() == -1) {
            task.setId(++idCounter);
            tasks.add(task);
        } else {
            deleteTask(task.getId());
            tasks.add(task);
        }

        return task;
    }

    private Todo findById(long id) {
        for (Todo task: tasks) {
            if (task.getId() == id) {
                return task;
            }
        }
        return null;
    }

}
