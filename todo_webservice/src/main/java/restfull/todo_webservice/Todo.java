package restfull.todo_webservice;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    private String username;
    private String description;
    private Date due;
    private boolean completed;

    protected Todo() {
    }

    public Todo(Long id, String username, String description, Date due, boolean completed) {
        this.id = id;
        this.username = username;
        this.description = description;
        this.due = due;
        this.completed = completed;
    }

    public Long getId() {
        return id;
    }

    
    public String getUsername() {
        return username;
    }

    public String getdescription() {
        return description;
    }

    public Date getDue() {
        return due;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String name) {
        this.username = name;
    }
}
