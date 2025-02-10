document.querySelectorAll('.home-product-item').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault(); // Ngăn chặn hành động mặc định

        const file = item.getAttribute('data-file'); // Lấy tên file từ thuộc tính data-file
        fetch(file) // Gọi file HTML
            .then(response => {
                if (!response.ok) {
                    throw new Error('Mạng lỗi');
                }
                return response.text();
            })
            .then(html => {
                document.getElementById('product-details').innerHTML = html; // Hiển thị nội dung vào div
            })
            .catch(error => {
                console.error('Có lỗi xảy ra:', error);
            });
    });
});
