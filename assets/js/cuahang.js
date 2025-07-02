//load SP theo cat
// Lấy query string
const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get('cat') || 'tat-ca';

// Mapping data giả (bạn thay bằng data thật)
const products = {
    'giay-nam': [
        { name: 'Giày Tây Nam', price: '500.000 đ', img: 'assets/img/product/giaynam1.jpg' },
        { name: 'Giày Thể Thao Nam', price: '600.000 đ', img: 'assets/img/product/giaynam2.jpg' },
    ],
    'giay-nu': [
        { name: 'Giày Cao Gót Nữ', price: '400.000 đ', img: 'assets/img/product/giaynu1.jpg' },
        { name: 'Giày Búp Bê Nữ', price: '350.000 đ', img: 'assets/img/product/giaynu2.jpg' },
    ],
    'tat-ca': [
        { name: 'Sản phẩm mẫu', price: '123.000 đ', img: 'assets/img/product/demo.jpg' },
    ]
};

// Cập nhật tiêu đề
document.querySelector('.shop-page h4').textContent =
    cat === 'tat-ca' ? 'Tất cả sản phẩm' : `Danh mục: ${cat.replace('-', ' ')}`;

// Render sản phẩm
const wrapper = document.querySelector('.products-wrapper');
wrapper.innerHTML = '';

if (products[cat]) {
    products[cat].forEach(p => {
        wrapper.innerHTML += `
        <div class="col-6 col-md-4 col-lg-3 mb-4">
          <div class="product-card border rounded p-2">
            <img src="${p.img}" class="img-fluid mb-2">
            <p class="mb-1 fw-semibold">${p.name}</p>
            <p class="mb-0 text-danger fw-bold">${p.price}</p>
          </div>
        </div>
      `;
    });
} else {
    wrapper.innerHTML = '<p>Không tìm thấy sản phẩm.</p>';
}
