package restfull.todo_webservice.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import restfull.todo_webservice.HardData;
import restfull.todo_webservice.Todo;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ToDoController {

    @Autowired
    private HardData taskData;

    @GetMapping("/users/{username}/todo")
    public List<Todo> findAllTasks(@PathVariable String username) {
        return taskData.findAllTasks(username);
    }

    @GetMapping("/users/{username}/todo/{id}")
    public Todo findById(@PathVariable Long id) {
        return taskData.findTask(id);
    }

    @DeleteMapping("/users/{username}/todo/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable String username, @PathVariable Long id) {
        Todo item = taskData.deleteTask(id);

        if (item != null) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }

    @PostMapping("/users/{username}/todo")
    public ResponseEntity<Void> addTask(@RequestBody Todo task) {
        Todo newTask = taskData.saveTask(task);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newTask.getId())
                .toUri(); // adds task id to curr uri

        return ResponseEntity.created(uri).build(); // returns uri of new task
    }

    @PutMapping("/users/{username}/todo/{id}")
    public ResponseEntity<Todo> updateTask(@RequestBody Todo task) {

        Todo updatedTask = taskData.saveTask(task);

        return new ResponseEntity<>(updatedTask, HttpStatus.OK); // returns the updated task
        // and status 200
    }

}
