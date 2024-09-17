const apiBaseUrl = "http://localhost:3000";

// Function to handle user signup
async function signup() {
    console.log("Signup function called");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch(`${apiBaseUrl}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                username: email,
                password: password
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result); // Check the result in the console

        document.getElementById("signup-message").textContent = result.msg;
        document.getElementById("signup-message").style.color = response.ok ? "green" : "red";
    } catch (error) {
        console.error("Error in signup function:", error);
        document.getElementById("signup-message").textContent = "An error occurred: " + error.message;
        document.getElementById("signup-message").style.color = "red";
    }
}

// Function to fetch and display all users
async function getUsers() {
    try {
        const response = await fetch(`${apiBaseUrl}/users`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();
        const userList = document.getElementById("user-list");
        userList.innerHTML = ""; // Clear the list

        users.forEach(user => {
            const userItem = document.createElement("li");
            userItem.textContent = `Name: ${user.name}, Email: ${user.email}`;
            userList.appendChild(userItem);
        });

    } catch (error) {
        console.error("Error in getUsers function:", error);
    }
}

// Function to update user information
async function updateUser() {
    const id = document.getElementById("update-id").value;
    const name = document.getElementById("update-name").value;
    const email = document.getElementById("update-email").value;
    const password = document.getElementById("update-password").value;

    try {
        const response = await fetch(`${apiBaseUrl}/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

        document.getElementById("update-message").textContent = result.msg;
        document.getElementById("update-message").style.color = "green";
    } catch (error) {
        console.error("Error in updateUser function:", error);
        document.getElementById("update-message").textContent = "An error occurred: " + error.message;
        document.getElementById("update-message").style.color = "red";
    }
}

// Function to delete a user
async function deleteUser() {
    const id = document.getElementById("delete-id").value;

    try {
        const response = await fetch(`${apiBaseUrl}/users/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

        document.getElementById("delete-message").textContent = result.msg;
        document.getElementById("delete-message").style.color = "green";
    } catch (error) {
        console.error("Error in deleteUser function:", error);
        document.getElementById("delete-message").textContent = "An error occurred: " + error.message;
        document.getElementById("delete-message").style.color = "red";
    }
}
