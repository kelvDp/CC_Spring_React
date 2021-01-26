package restfull.todo_webservice.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import restfull.todo_webservice.Todo;
import restfull.todo_webservice.data.TodoRepo;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoJpaController {

    @Autowired
    private TodoRepo todoRepo;

    @GetMapping("jpa/users/{username}/todo")
    public List<Todo> findAllTasks(@PathVariable String username) {
        return todoRepo.findByUsername(username);
    }

    @GetMapping("jpa/users/{username}/todo/{id}")
    public Todo findById(@PathVariable Long id) {
        return todoRepo.findById(id).get();
    }

    @DeleteMapping("jpa/users/{username}/todo/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable String username, @PathVariable Long id) {

        todoRepo.deleteById(id);

        return ResponseEntity.noContent().build();

    }

    @PostMapping("jpa/users/{username}/todo")
    public ResponseEntity<Void> addTask(@PathVariable String username, @RequestBody Todo task) {

        task.setUsername(username);

        Todo newTask = todoRepo.save(task);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newTask.getId())
                .toUri(); // adds task id to curr uri

        return ResponseEntity.created(uri).build(); // returns uri of new task
    }

    @PutMapping("jpa/users/{username}/todo/{id}")
    public ResponseEntity<Todo> updateTask(@PathVariable String username, @RequestBody Todo task) {

        task.setUsername(username);

        Todo updatedTask = todoRepo.save(task);

        return new ResponseEntity<>(task, HttpStatus.OK);
    }

}
