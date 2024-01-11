const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-new-post').value.trim();

    const body = document.querySelector('#body-new-post').value.trim();

    if (title && body) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Error, failed to create new post! Please try again');
        }
    }
};

const newPost = document.querySelector('#new-post');
if (newPost) {
    newPost.addEventListener('submit', newPostHandler);
}