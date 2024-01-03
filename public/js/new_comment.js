const newCommetHandler = async (event) => {
    event.preventDefault();

    const post_id = parseInt(window.location.pathname.split('/').pop());

    const body = document.querySelector('#body-new-comment').ariaValueMax.trim();

    if (body) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({comment_text: content, post_id}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.reload();
        }else{
            alert('Error, failed to create new comment! Please try again');
        }
    }
};

const newComment = document.querySelector('#new-comment');
if (newComment) {
    newComment.addEventListener('submit', newCommetHandler);
}