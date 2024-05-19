document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.toggle('hidden');
            }
        });
    });

    const detailButtons = document.querySelectorAll('.detail-button');

    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const detailContent = button.nextElementSibling;
            if (detailContent) {
                detailContent.classList.toggle('hidden');
            }
        });
    });

    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalClose = document.querySelector(".modal .close");

    if (modal && modalImg && modalClose) {
        const images = document.querySelectorAll('.thumbnail');

        images.forEach(image => {
            image.addEventListener('click', () => {
                modal.style.display = "block";
                modalImg.src = image.getAttribute('data-image');
            });
        });

        modalClose.onclick = function () {
            modal.style.display = "none";
        };

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    }

    const commentForm = document.getElementById('commentForm');
    const commentName = document.getElementById('commentName');
    const commentText = document.getElementById('commentText');
    const commentsSection = document.getElementById('commentsSection');

    if (commentForm && commentName && commentText && commentsSection) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (commentText.value.trim() !== "") {
                const newComment = document.createElement('div');
                newComment.classList.add('comment');

                const commenterName = document.createElement('strong');
                commenterName.textContent = commentName.value.trim() + ": ";

                const commentContent = document.createElement('p');
                commentContent.textContent = commentText.value.trim();

                newComment.appendChild(commenterName);
                newComment.appendChild(commentContent);

                commentsSection.appendChild(newComment);

                commentName.value = '';
                commentText.value = '';
            }
        });
    }
});
