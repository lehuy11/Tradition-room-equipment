# Website Phòng truyền thống – Thiết bị TTTH Đường sắt Sài Gòn

Website tĩnh (HTML/CSS/JavaScript) dùng để trưng bày hồ sơ 13 nhóm thiết bị thông tin tín hiệu qua các thời kỳ.

## Cấu trúc thư mục

```text
.
├── index.html                  # Trang chủ
├── thiet-bi/                   # 13 trang hồ sơ thiết bị
│   ├── tb-01.html
│   ├── ...
│   └── tb-13.html
├── assets/
│   ├── css/site.css            # Giao diện toàn website
│   ├── js/site.js              # Tìm kiếm + bộ lọc
│   └── images/
│       ├── devices/            # Ảnh hiện vật
│       └── diagrams/           # Sơ đồ cấu tạo + flowchart
└── .nojekyll                   # GitHub Pages phục vụ file tĩnh trực tiếp
```

## Cách sửa nhanh trên GitHub

### Sửa trang chủ
Mở `index.html` → bấm biểu tượng bút chì **Edit this file** → sửa → **Commit changes**.

### Sửa thông tin một thiết bị
Ví dụ TB-01: mở `thiet-bi/tb-01.html` → **Edit this file** → sửa nội dung → **Commit changes**.

### Sửa giao diện
Mở `assets/css/site.css`. Các thay đổi ở file này áp dụng cho toàn bộ website.

### Sửa tìm kiếm / bộ lọc
Mở `assets/js/site.js`.

### Thay ảnh
Upload ảnh mới vào `assets/images/devices/`. Nếu đổi tên file ảnh, sửa lại thuộc tính `src="..."` trong trang HTML tương ứng.

## Deploy bằng GitHub Pages

1. Tạo một repository mới trên GitHub, ví dụ `phong-truyen-thong-ttth`.
2. Upload **toàn bộ nội dung trong thư mục này** vào root của repository. `index.html` phải nằm ngay ở root.
3. Vào **Settings → Pages**.
4. Trong **Build and deployment** chọn **Deploy from a branch**.
5. Chọn branch `main`, folder `/(root)`, rồi **Save**.
6. Sau đó mỗi lần sửa/commit vào `main`, GitHub Pages sẽ tự cập nhật website.

URL thông thường của project site:

```text
https://TEN-TAI-KHOAN.github.io/TEN-REPOSITORY/
```

Ví dụ repository tên `phong-truyen-thong-ttth`:

```text
https://TEN-TAI-KHOAN.github.io/phong-truyen-thong-ttth/
```

## Chạy thử trên máy tính

Cách đơn giản nhất: mở `index.html` bằng trình duyệt.

Hoặc nếu đã cài Python:

```bash
python -m http.server 8000
```

Sau đó mở:

```text
http://localhost:8000
```

## Lưu ý khi thêm trang mới

- Dùng đường dẫn **tương đối**, không dùng đường dẫn kiểu `C:\Users\...`.
- Trang trong `thiet-bi/` phải trỏ CSS/ảnh bằng `../assets/...`.
- Trang chủ dùng `assets/...`.
- Giữ `index.html` ở root để GitHub Pages nhận đúng trang đầu.

## Tài liệu nguồn

File Excel nguồn **không được đưa vào gói GitHub Pages** để tránh công khai nhầm tài liệu nội bộ. Website hiện tại không cần file Excel để chạy. Hãy lưu file nguồn riêng trên máy hoặc kho riêng nếu cần.
