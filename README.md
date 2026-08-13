# N2 日本語資料室

Website học tiếng Nhật theo phong cách tài liệu/giáo trình.

## Hiện có

- Home → loại tài liệu → bộ tài liệu / mục lục demo → bài học demo.
- Ghi nhận 4 SOURCE DOCUMENT hiện tại nhưng **không tự động xử lý bài**.
- Light / Dark / System bằng CSS native.
- Furigana bằng HTML `<ruby><rt>` thật.
- Bật/tắt Furigana, tiếng Việt và giải thích trên bài demo.
- Layout riêng minh họa cho Ngữ pháp, Đọc hiểu và Nghe hiểu.
- Responsive desktop/mobile.
- Print CSS A4 portrait, margin `18mm 16mm`.
- Khi in ẩn UI và mở nội dung của phần `<details>` đang thu gọn.
- Quy tắc tránh ngắt block quan trọng bằng `break-inside: avoid`.

## SOURCE DOCUMENT

- `Ngữ pháp N2.pdf`
- `Đọc hiểu N2.pdf`
- `Shin Kanzen Master N2 — Choukai`
- `Mimikara Oboeru N2 — Goi`

Các bài thật chưa được nhập vào website. Chỉ xử lý từng bài khi có lệnh và giữ nguyên SOURCE CONTENT.

## Còn cần nối

- TTS/audio từng câu và toàn bài.
- Pause / Resume / Stop / câu trước / câu sau / tốc độ cho TTS.
- Nút gọi browser print / PDF trực tiếp.
- GitHub Pages deployment.
- Kiểm thử Chrome Print Preview / Save as PDF trên URL public.

`index.html` hiện là bản HTML/CSS-first để giao diện vẫn chạy độc lập và không phụ thuộc framework.
