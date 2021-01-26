package restfull.todo_webservice;

public class AuthHeader {

    private final String message;

    public AuthHeader(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
