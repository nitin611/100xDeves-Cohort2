import { useState } from 'react';
export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState("");
    const handleAddTodo = async () => {
        try {
            const response = await fetch("http://localhost:3000/todo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    description
                }),
            });

            if (response.ok) {
                showToast("Todo added successfully!", "success");
                setTitle("");
                setDescription("");
            } else {
                showToast("Failed to add todo. Please try again.", "error");
            }
        } catch (error) {
            console.error("Error:", error);
            showToast("An error occurred. Please try again.", "error");
        }
    };

    const showToast = (message, type) => {
        setToastMessage(message);
        setToastType(type);
        setTimeout(() => {
            setToastMessage("");
        }, 3000);
    };

    return (
        <div className="container">
            <h1>Create a Todo</h1>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            /><br />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            /><br />
            <button onClick={handleAddTodo}>Add a todo</button>

            {toastMessage && (
                <div className={`toast ${toastType} show`}>
                    {toastMessage}
                </div>
            )}
        </div>
    );
}
