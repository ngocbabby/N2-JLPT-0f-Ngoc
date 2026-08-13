export const demoLessons = [
  {
    id: 'demo-grammar', number: 'Demo 01', title: 'Ngữ pháp — mẫu bố cục', kind: 'grammar', status: 'processed', demoOnly: true,
    sourceNote: 'Nội dung dưới đây chỉ dùng để kiểm thử giao diện, không thuộc SOURCE DOCUMENT.',
    lines: [
      { id: 'g1', sourceJapanese: '会社で働いています。', displayRuby: [{text:'会社',reading:'かいしゃ'},{text:'で'},{text:'働',reading:'はたら'},{text:'いています。'}], vietnamese: 'Tôi đang làm việc tại công ty.' },
      { id: 'g2', sourceJapanese: '確認してから、もう一度連絡します。', displayRuby: [{text:'確認',reading:'かくにん'},{text:'してから、もう'},{text:'一度',reading:'いちど'},{text:'連絡',reading:'れんらく'},{text:'します。'}], vietnamese: 'Sau khi xác nhận, tôi sẽ liên lạc lại một lần nữa.' },
    ],
  },
  {
    id: 'demo-reading', number: 'Demo 02', title: 'Đọc hiểu — mẫu bố cục', kind: 'reading', status: 'processed', demoOnly: true,
    sourceNote: 'Nội dung mẫu để kiểm thử 日本語だけ / 日本語 + Tiếng Việt, câu hỏi, bảng và hình ảnh.',
    lines: [
      { id: 'r1', sourceJapanese: '最近、図書館を利用する人が増えています。', displayRuby: [{text:'最近',reading:'さいきん'},{text:'、'},{text:'図書館',reading:'としょかん'},{text:'を'},{text:'利用',reading:'りよう'},{text:'する'},{text:'人',reading:'ひと'},{text:'が'},{text:'増',reading:'ふ'},{text:'えています。'}], vietnamese: 'Gần đây, số người sử dụng thư viện đang tăng lên.' },
      { id: 'r2', sourceJapanese: '静かな場所で集中して勉強できるからです。', displayRuby: [{text:'静',reading:'しず'},{text:'かな'},{text:'場所',reading:'ばしょ'},{text:'で'},{text:'集中',reading:'しゅうちゅう'},{text:'して'},{text:'勉強',reading:'べんきょう'},{text:'できるからです。'}], vietnamese: 'Đó là vì có thể tập trung học ở một nơi yên tĩnh.' },
    ],
  },
  {
    id: 'demo-listening', number: 'Demo 03', title: 'Nghe hiểu — mẫu bố cục', kind: 'listening', status: 'processed', demoOnly: true,
    sourceNote: 'Script được ẩn mặc định trên màn hình nhưng sẽ xuất hiện đầy đủ khi in.',
    lines: [{ id: 'l1', sourceJapanese: '明日の会議は十時からです。', displayRuby: [{text:'明日',reading:'あした'},{text:'の'},{text:'会議',reading:'かいぎ'},{text:'は'},{text:'十時',reading:'じゅうじ'},{text:'からです。'}], vietnamese: 'Cuộc họp ngày mai bắt đầu từ 10 giờ.' }],
  },
  {
    id: 'demo-vocabulary', number: 'Demo 04', title: 'Từ vựng — mẫu bố cục', kind: 'vocabulary', status: 'processed', demoOnly: true,
    sourceNote: 'Mẫu kiểm thử layout từ vựng ngắn gọn.',
    lines: [
      { id: 'v1', sourceJapanese: '申請', displayRuby: [{text:'申請',reading:'しんせい'}], vietnamese: 'đăng ký, nộp đơn', note: '例: 申請を出す' },
      { id: 'v2', sourceJapanese: '締め切り', displayRuby: [{text:'締',reading:'し'},{text:'め'},{text:'切',reading:'き'},{text:'り'}], vietnamese: 'hạn chót', note: '例: 締め切りに間に合う' },
    ],
  },
  {
    id: 'demo-kanji', number: 'Demo 05', title: 'Kanji — mẫu bố cục', kind: 'kanji', status: 'processed', demoOnly: true,
    sourceNote: 'Mẫu kiểm thử chữ Kanji lớn và các thông tin đọc.',
    lines: [{ id: 'k1', sourceJapanese: '確', displayRuby: [{text:'確'}], vietnamese: 'chắc chắn, xác thực', note: '音: カク ／ 例: 確認・正確' }],
  },
  {
    id: 'demo-conversation', number: 'Demo 06', title: 'Hội thoại — mẫu bố cục', kind: 'conversation', status: 'processed', demoOnly: true,
    sourceNote: 'Mẫu kiểm thử từng lượt thoại.',
    lines: [
      { id: 'c1', sourceJapanese: 'すみません、少しお時間よろしいですか。', displayRuby: [{text:'すみません、'},{text:'少',reading:'すこ'},{text:'しお'},{text:'時間',reading:'じかん'},{text:'よろしいですか。'}], vietnamese: 'Xin lỗi, bạn có thể dành cho tôi một chút thời gian được không?', note: 'A' },
      { id: 'c2', sourceJapanese: 'はい、大丈夫ですよ。', displayRuby: [{text:'はい、'},{text:'大丈夫',reading:'だいじょうぶ'},{text:'ですよ。'}], vietnamese: 'Vâng, được chứ.', note: 'B' },
    ],
  },
]

export const categories = [
  { id:'grammar', japanese:'文法', vietnamese:'Ngữ pháp', kind:'grammar', books:[{ id:'ngu-phap-n2', title:'Ngữ pháp N2', kind:'grammar', sourceLabel:'SOURCE DOCUMENT: Ngữ pháp N2.pdf', profileStatus:'pending', lessons:[] }] },
  { id:'reading', japanese:'読解', vietnamese:'Đọc hiểu', kind:'reading', books:[{ id:'doc-hieu-n2', title:'Đọc hiểu N2', kind:'reading', sourceLabel:'SOURCE DOCUMENT: Đọc hiểu N2.pdf', profileStatus:'pending', lessons:[] }] },
  { id:'listening', japanese:'聴解', vietnamese:'Nghe hiểu', kind:'listening', books:[{ id:'shin-kanzen-n2-choukai', title:'Shin Kanzen Master N2 — Choukai', kind:'listening', sourceLabel:'SOURCE DOCUMENT: Shin_Kanzen_Masuta_N2-Choukai.pdf', profileStatus:'pending', lessons:[] }] },
  { id:'vocabulary', japanese:'語彙', vietnamese:'Từ vựng', kind:'vocabulary', books:[{ id:'mimikara-goi-n2', title:'Mimikara Oboeru N2 — Goi', kind:'vocabulary', sourceLabel:'SOURCE DOCUMENT: TỪ VỰNG N2_GOI_MIMIKARA OBOERU (TIẾNG VIỆT).pdf', profileStatus:'pending', lessons:[] }] },
  { id:'kanji', japanese:'漢字', vietnamese:'Kanji', kind:'kanji', books:[] },
  { id:'conversation', japanese:'会話', vietnamese:'Hội thoại', kind:'conversation', books:[] },
  { id:'other', japanese:'資料', vietnamese:'Tài liệu khác', kind:'other', books:[{ id:'ui-demo', title:'Bản mẫu giao diện', subtitle:'Không phải SOURCE DOCUMENT — chỉ dùng để kiểm thử chức năng', kind:'other', sourceLabel:'UI DEMO DATA', profileStatus:'ready', lessons:demoLessons }] },
]
