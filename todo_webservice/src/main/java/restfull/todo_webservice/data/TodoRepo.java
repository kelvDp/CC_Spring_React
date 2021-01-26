package restfull.todo_webservice.data;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import restfull.todo_webservice.Todo;

@Repository
public interface TodoRepo extends CrudRepository<Todo, Long> {
    List<Todo> findByUsername(String username);
}
