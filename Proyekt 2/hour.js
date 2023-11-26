function openModal(imageUrl) {
    document.getElementById('modalImage').src = imageUrl;
    document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}