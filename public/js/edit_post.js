const post_id = window.location.toString().split("/")[window.location.toString().split("/").length - 1];

//update post
const updatePostHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector("#title-update-post").value.trim();
    const body = document.querySelector("#body-update-post").value.trim();

    if (title && body) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: "PUT",
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert("Error updating! Please try again.");
        }
    }
};

//delete post
const deletePostHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/posts/${post_id}`, {
    });

    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("Error, failed to delete post! Please try again.")
    }
};

const updatePostButton = document.querySelector("#update-post");

if (updatePostButton) {
    updatePostButton.addEventListener("click", updatePostHandler);
}

const deletePostButton = document.querySelector("#delete-post");

if (deletePostButton) {
    deletePostButton.addEventListener("click", deletePostHandler);
}