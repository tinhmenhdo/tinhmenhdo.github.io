const ICHING = [
  [
    "䷀",
    "Thuần Càn",
    "Kiện dã. Chính yếu. Cứng mạnh, khô, lớn, khỏe mạnh, đức không nghỉ. \nNguyên Hanh Lợi Trinh chi tượng: Tượng vạn vật có khởi đầu, lớn lên, toại chí, hóa thành; chính mình, chính diện, trước mặt."
  ],
  // ䷀: Thuần Càn (Hexagram 1)
  [
    "䷁",
    "Thuần Khôn",
    "Thuận dã. Nhu thuận. Thuận tòng, mềm dẽo, theo đường mà được lợi, hòa theo lẽ, chịu lấy, chìu theo, toại chí, đạt thành. \nNhu thuận lợi trinh chi tượng: biết chỗ có lợi mà nhờ, âm khí, âm u."
  ],
  // ䷁: Thuần Khôn (Hexagram 2)
  [
    "䷂",
    "Thủy Lôi Truân",
    "Nạn dã. Gian lao. Yếu đuối, chưa đủ sức, ngần ngại, do dự, vất vả, phải nhờ sự giúp đỡ. \nTiền hung hậu kiết chi tượng: Tượng trước dữ sau lành; khó khăn, gian nan, vướng víu."
  ],
  // ䷂: Thủy Lôi Truân (Hexagram 3)
  [
    "䷃",
    "Sơn Thủy Mông",
    "Muội dã. Bất minh. Tối tăm, mờ mịt, mờ ám, không minh bạch, che lấp, bao trùm, phủ chụp, ngu dại, ngờ nghệch. \nThiên võng tứ trương chi tượng: Tượng lưới trời giăng bốn mặt; âm mưu, gài bẫy, hư ảo, không biết."
  ],
  // ䷃: Sơn Thủy Mông (Hexagram 4)
  [
    "䷄",
    "Thủy Thiên Nhu",
    "Thuận dã. Tương hội. Chờ đợi vì có hiểm đằng trước, thuận theo, quây quần, hội tụ, vui hội, cứu xét, nghiên cứu, chầu về. \nQuân tử hoan hội chi tượng: Tượng quân tử hội hợp vui vẻ, ăn uống chờ thời; song hội, bằng hữu gặp nhau."
  ],
  // ䷄: Thủy Thiên Nhu (Hexagram 5)
  [
    "䷅",
    "Thiên Thủy Tụng",
    "Luận dã. Bất hoà. Bàn cãi, kiện tụng, bàn tính, cãi vã, tranh luận, bàn luận. \nĐại tiểu bất hòa chi tưọng: Lớn nhỏ không hòa; Không vừa ý, trái ý nhau, không hợp, bất ổn."
  ],
  // ䷅: Thiên Thủy Tụng (Hexagram 6)
  [
    "䷆",
    "Địa Thủy Sư",
    "Chúng dã. Chúng trợ. Đông chúng, vừa làm thầy vừa làm bạn, học hỏi lẫn nhau, níu nắm nhau qua truông, nâng đỡ. \nSĩ chúng ủng tòng chi tượng: Tượng chúng ủng hộ nhau; chủ nhà, đứng đầu các ngành."
  ],
  // ䷆: Địa Thủy Sư (Hexagram 7)
  [
    "䷇",
    "Thủy Địa Tỷ",
    "Tư dã. Chọn lọc. Thân liền, gạn lọc, mật thiết, tư hữu riêng, trưởng đoàn, trưởng toán, chọn lựa, quy căn, quy về một mối. \nKhử xàm nhiệm hiền chi tượng: Tượng bỏ nịnh dụng trung; tuyển chọn, người thân, chiết xuất."
  ],
  // ䷇: Thủy Địa Tỷ (Hexagram 8)
  [
    "䷈",
    "Phong Thiên Tiểu Súc",
    "Tắc dã. Dị đồng. Lúc bế tắc, không đồng ý nhau, cô quả, cô độc, súc oán, chứa mối oán hận, có ý trái lại, không hòa hợp, nhỏ nhen. \nCầm sắc bất điệu chi tượng: Tượng tiếng đờn không hoà điệu; khác lạ, đặc biệt, tiểu nhân, nhỏ, ít."
  ],
  // ䷈: Phong Thiên Tiểu Súc (Hexagram 9)
  [
    "䷉",
    "Thiên Trạch Lý",
    "Lễ dã. Lộ hành. Nghi lễ, có chừng mực, khuôn phép, dẫm lên,không cho đi sai, có ý chận đường sái quá,hệ thống, pháp lý. \nHổ lang đang đạo chi tượng: Tượng hổ lang đón đường. Lễ nghĩa, hợp lý, lý lẽ, lời nói, lên đường, xe cộ"
  ],
  // ䷉: Thiên Trạch Lý (Hexagram 10)
  [
    "䷊",
    "Địa Thiên Thái",
    "Thông dã. Điều hoà. Thông hiểu, thông suốt, hiểu biết, am tường, quen biết, quen thuộc. \nThiên Địa hòa xướng chi tượng: Tượng Trời Đất giao hòa; bằng nhau, thông nhau, huề, biết người hiểu mình, thông tin."
  ],
  // ䷊: Địa Thiên Thái (Hexagram 11)
  [
    "䷋",
    "Thiên Địa Bĩ",
    "Tắc dã. Gián cách. Bế tắc,không thông, không tương cảm nhau, xui xẻo, dèm pha, chê bai lẫn nhau, mạnh ai nấy theo ý riêng. \nThượng hạ tiếm loạn chi tượng: Tượng trên dưới lôi thôi; chấm hết, không hiểu, không xong."
  ],
  // ䷋: Thiên Địa Bĩ (Hexagram 12)
  [
    "䷌",
    "Thiên Hỏa Đồng Nhân",
    "Thân dã. Thân thiện. Trên dưới cùng lòng, cùng người ưa thích, cùng một bọn người. \nHiệp lực đồng tâm chi tượng: Tượng cùng người hiệp lực. Gần gũi, giống nhau, đồng tâm, một cặp, bạn, đội bạn, người kế bên."
  ],
  // ䷌: Thiên Hỏa Đồng Nhân (Hexagram 13)
  [
    "䷍",
    "Hỏa Thiên Đại Hữu",
    "Khoan dã. Cả có. Có nhiều, thong dong, dung dưỡng nhiều. Độ lượng rộng, có đức dày, chiếu sáng lớn. \nKim ngọc mãn đường chi tượng: Tượng vàng bạc đầy nhà; bạn hữu, số nhiều."
  ],
  // ䷍: Hỏa Thiên Đại Hữu (Hexagram 14)
  [
    "䷎",
    "Địa Sơn Khiêm",
    "Thoái dã. Thoái ẩn. Khiêm tốn, nhún nhường, khiêm từ, cáo thoái, từ giã, lui vào trong, giữ gìn nhốt vào trong, bế cửa, nội ngoại lăng nhục. \nThượng hạ mông lung chi tượng: Tượng trên dưới hoang mang; phía sau, thoái lui."
  ],
  // ䷎: Địa Sơn Khiêm (Hexagram 15)
  [
    "䷏",
    "Lôi Địa Dự",
    "Duyệt dã. Thuận động. Dự bị, dự phòng, canh chừng, sớm, vui vầy. \nThượng hạ duyệt dịch chi tượng: Tượng trên dưới vui vẻ; chờ, do dự, động trên đất, hàng rào, động trong âm u, động trong manh nha; dè chừng."
  ],
  // ䷏: Lôi Địa Dự (Hexagram 16)
  [
    "䷐",
    "Trạch Lôi Tùy",
    "Thuận dã. Di động. Cùng theo, mặc lòng, không có chí hướng, chỉ chìu theo, đại thể chỉ việc di động thuyên chuyển như chiếc xe. \nPhản phúc bất định chi tượng: Tượng loại không ở; việc còn chạy, còn động, đi."
  ],
  // ䷐: Trạch Lôi Tùy (Hexagram 17)
  [
    "䷑",
    "Sơn Phong Cổ",
    "Sự dã. Sự biến. Sự cố, có sự không yên trong lòng, làm ngờ vực, khua, đánh, mua chuốc cái hại, đánh trống, làm cho sợ sệt, sửa lại cái lỗi trước đã làm. \nAm hại tương liên chi tượng: Tượng điều hại cùng có liên hệ; sửa lại, hư hại."
  ],
  // ䷑: Sơn Phong Cổ (Hexagram 18)
  [
    "䷒",
    "Địa Trạch Lâm",
    "Đại dã. Bao quản. Lớn lên, việc lớn, cha nuôi, vú nuôi, giáo học, nhà sư, kẻ cả, dạy dân, nhà thầu, giáng lâm, giáng hạ. \nQuân tử dĩ giáo tư chi tượng: Tượng người quân tử dạy dân, che chở, bảo bọc dân vô bờ bến; thầy, chủ nhà, giám đốc, học."
  ],
  // ䷒: Địa Trạch Lâm (Hexagram 19)
  [
    "䷓",
    "Phong Địa Quan",
    "Quan dã. Quan sát. Xem xét, trông coi, cảnh tượng xem thấy, thanh tra, duyệt binh, khán trận, lướt qua, sơ qua, sơn phết, quét nhà. \nVân bình tụ tán chi tượng: Tượng bèo mây tan hợp, thấy, nhìn thấy, khách."
  ],
  // ䷓: Phong Địa Quan (Hexagram 20)
  [
    "䷔",
    "Hỏa Lôi Phệ Hạp",
    "Khiết dã. Cắn hợp. Cấu hợp, bấu vấu, vặn vẹo, nhai, bấu quào, dày xéo, đay nghiến, phỏng vấn, hỏi han(học hỏi). \nUy mị bất chấn chi tượng: Tượng yếu đuối không chạy được, cào cấu, bắt tay, chà đạp."
  ],
  // ䷔: Hỏa Lôi Phệ Hạp (Hexagram 21)
  [
    "䷕",
    "Sơn Hỏa Bí",
    "Sức dã. Quang minh. Trang sức, phản chiếu, sửa sang, trang điểm, thấu suốt, nội soi, rõ ràng. \nQuang minh thông đạt chi tượng: Tượng quang minh, sáng sủa, thấu suốt; bày tỏ."
  ],
  // ䷕: Sơn Hỏa Bí (Hexagram 22)
  [
    "䷖",
    "Sơn Địa Bác",
    "Lạc dã. Tiêu điều. Đẽo gọt, lột cướp đi, không lợi, rụng rớt, đến rồi lại đi, tản lạc, lạt lẽo nhau, xa lìa nhau, hoang vắng, buồn thảm. \nLục thân băng thán chi tượng: Tượng bà con thân thích xa lìa nhau, gạt bỏ, mất đi."
  ],
  // ䷖: Sơn Địa Bác (Hexagram 23)
  [
    "䷗",
    "Địa Lôi Phục",
    "Phản dã. Tái hồi. Tái diễn, lại có, trở về, quây đầu, bên ngoài, phản phục, phục hưng, phục hồi. \nSơn ngoại thanh sơn chi tượng: Tượng ngoài núi lại có núi nữa, phản bội, phản đòn, động trong manh nha, giật."
  ],
  // ䷗: Địa Lôi Phục (Hexagram 24)
  [
    "䷘",
    "Thiên Lôi Vô Vọng",
    "Thiên tai dã. Xâm lấn. Tai vạ, lỗi bậy bạ, không lề lối, không qui củ, làm càn đại, chống đối, khứng chịu. \nCương tự ngoại lai chi tượng: Tượng kẻ mạnh từ ngoài đến, Làm bậy, không hy vọng, thất vọng, hư."
  ],
  // ䷘: Thiên Lôi Vô Vọng (Hexagram 25)
  [
    "䷙",
    "Sơn Thiên Đại Súc",
    "Tụ dã. Tích tụ. Chứa tụ, súc tích, lắng tụ một chỗ, dự trữ, đựng, để dành. \nĐồng loại hoan hội chi tượng: Tượng đồng loại hội hợp vui vẻ, cục bộ, đại hội, gặp gỡ trong một phe."
  ],
  // ䷙: Sơn Thiên Đại Súc (Hexagram 26)
  [
    "䷚",
    "Sơn Lôi Di",
    "Dưỡng dã. Dung dưỡng. Chăm lo, tu bổ, càng thêm, ăn uống, bổ dưỡng, bồi dưỡng, ví như Trời nuôi muôn vật, thánh nhân nuôi người. \nPhi Long nhập uyên chi tượng: Tượng Rồng vào vực nghỉ ngơi, ý nuôi dưỡng, chờ đợi."
  ],
  // ䷚: Sơn Lôi Di (Hexagram 27)
  [
    "䷛",
    "Trạch Phong Đại Quá",
    "Họa dã. Cả quá. Cả quá ắt có tai họa, quá mực thường, quá nhiều, giàu cương nghị ở trong. \nNộn thảo kinh sương chi tượng: Tượng cỏ non bị sương tuyết, quá đáng, quá cở."
  ],
  // ䷛: Trạch Phong Đại Quá (Hexagram 28)
  [
    "䷜",
    "Thuần Khảm",
    "Hãm dã. Hãm hiểm. Hãm vào ở trong, xuyên sâu vào trong, đóng cửa lại, gập gềnh, trắc trở, bắt buộc, kiềm hãm, thắng. \nKhổ tận cam lai chi tượng: Tượng hết khổ mới đến sướng, cột gút, trụ cột, kẹt, kẹp, khóa, nước, lạnh, đen tối, hiểm sâu, nghe được, ý thích."
  ],
  // ䷜: Thuần Khảm (Hexagram 29)
  [
    "䷝",
    "Thuần Ly",
    "Lệ dã. Nóng sáng. Sáng sủa, trống trải, trống trơn, toả ra, bám vào, phụ bám, phô trương ra ngoài. \nMôn hộ bất ninh chi tượng: Tượng nhà cửa không yên; có việc xui rủi."
  ],
  // ䷝: Thuần Ly (Hexagram 30)
  [
    "䷞",
    "Trạch Sơn Hàm",
    "Cảm dã. Thụ cảm. Cảm xúc, cảm ứng, thọ nhận, nghe thấy, nghĩ đến, xúc động. \nNam nữ giao cảm chi tượng: Tượng nam nữ có tình ý; nhạy cảm, nhận biết."
  ],
  // ䷞: Trạch Sơn Hàm (Hexagram 31)
  [
    "䷟",
    "Lôi Phong Hằng",
    "Cửu dã. Trường cửu. Lâu dài. Chậm chạp, đạo lâu bền như vợ chồng, kéo dài câu chuyện, thâm giao, nghĩa cố tri, xưa, cũ. \nTrường cửu chi nghĩa chi tượng: Tượng lâu bền như đạo nghĩa; thường ngày, vết hằng, lối cũ, thói quen, đường mòn, không thay đổi."
  ],
  // ䷟: Lôi Phong Hằng (Hexagram 32)
  [
    "䷠",
    "Thiên Sơn Độn",
    "Thoái dã. Ẩn trá. Lui, ẩn khuất, tránh đời, lừa dối, trá hình, có ý trốn tránh, trốn cái mặt đưa thấy cái lưng. \nBáo ẩn Nam Sơn chi tượng: Tượng con Báo ẩn ở núi Nam; Đi mất, đồ giả."
  ],
  // ䷠: Thiên Sơn Độn (Hexagram 33)
  [
    "䷡",
    "Lôi Thiên Đại Tráng",
    "Chí dã. Tự cường. Ý riêng, bụng nghĩ, hướng thượng, ý định, vượng sức, thịnh đại, trên cao, chót vót, lên trên, chí khí, có lập trường, đơn độc. \nPhượng tập đăng sơn chi tượng: Tượng phượng đậu trên núi; cõi trên, việc riêng, tự mình, động trên cao, bay trên cao, độc lập."
  ],
  // ䷡: Lôi Thiên Đại Tráng (Hexagram 34)
  [
    "䷢",
    "Hỏa Địa Tấn",
    "Tiến dã. Hiển hiện. Đi hoặc tới, tiến tới gần, theo mực thường, lửa đã hiện trên mặt đất, ra mặt, trưng bày. \nLong kiến từơng trình chi tượng: Tượng rồng hiện điềm lành; phát triển."
  ],
  // ䷢: Hỏa Địa Tấn (Hexagram 35)
  [
    "䷣",
    "Địa Hỏa Minh Di",
    "Thương dã. Hại đau. Thương tích, bệnh hoạn, buồn lo, đau lòng, ánh sáng bị thương. \nKinh cức mãn đường chi tượng: Tượng gai góc đầy đường; u uất, vắng bóng, tối tăm, bóng đêm, khuất dạng."
  ],
  // ䷣: Địa Hỏa Minh Di (Hexagram 36)
  [
    "䷤",
    "Phong Hỏa Gia Nhân",
    "Đồng dã. Nẩy nở. Là người nhà, gia đinh, cùng gia đình, đồng chủng, người đồng nghiệp, người cùng xóm, sinh sôi, thêm nữa, khai thác mở mang thêm. \nKhai hoa kết tử chi tượng: Tượng trổ bông sinh trái, nẩy mầm; việc trẻ con, phát sinh, việc phụ, việc nhỏ, làm thêm nữa, nhân sự."
  ],
  // ䷤: Phong Hỏa Gia Nhân (Hexagram 37)
  [
    "䷥",
    "Hỏa Trạch Khuê",
    "Quai dã. Hổ trợ. Trái lìa, lìa xa, 2 bên lợi dụng lẫn nhau, cơ biến quai xảo, như cung tên, súng đạn. \nHồ giả hổ oai chi tượng: Tượng con hồ nhờ oai con hổ; nhờ, mượn sức, ra oai, giả tạo, lỡ việc, dở dang."
  ],
  // ䷥: Hỏa Trạch Khuê (Hexagram 38)
  [
    "䷦",
    "Thủy Sơn Kiển",
    "Nạn dã. Trở ngại. Cản ngăn, chận lại, chậm chạp, khập khiển, què quặt, khó khăn. \nBất năng tiến giả chi tượng: Tượng không năng đi, ngưng lại."
  ],
  // ䷦: Thủy Sơn Kiển (Hexagram 39)
  [
    "䷧",
    "Lôi Thủy Giải",
    "Tán dã. Nơi nơi. Làm cho tan đi như làm tan sự nguy hiểm, giải phóng, giải tán, loan truyền, phân phát, lưu thông, ban rải, ân xá. \nLôi vũ tác giải chi tượng: Tượng sấm động mưa bay; bung ra, ly tán."
  ],
  // ䷧: Lôi Thủy Giải (Hexagram 40)
  [
    "䷨",
    "Sơn Trạch Tổn",
    "Thất dã. Tổn hại. Tổn thất, hao mất, thua thiệt, bớt kém, bớt phần dưới cho phần trên là tổn hại. \nPhòng nhân ám toán chi tượng: Tượng đề phòng sự ngầm hại, hao tổn."
  ],
  // ䷨: Sơn Trạch Tổn (Hexagram 41)
  [
    "䷩",
    "Phong Lôi Ích",
    "Ích dã. Tiến ích. Thêm được lợi, giúp dùm, tiếng dội xa, vượt lên, phóng mình tới. \nHồng Hộc xung tiêu chi tượng: Tượng chim Hồng, chim Hộc bay qua mây mù; vọt đi, bay đi, Thêm lợi, thêm lên, lấn tới."
  ],
  // ䷹: Phong Lôi Ích (Hexagram 42)
  [
    "䷪",
    "Trạch Thiên Quải",
    "Quyết dã. Dứt khoát. Dứt hết, biên cương, ranh giới, thành phần, thành khoảnh, quyết định, quyết nghị, cổ phần, thôi, khai lề lối. \nÍch chi cực tắc quyết chi tượng: Tượng lợi đã cùng ắt thôi; gãy, đứt."
  ],
  // ䷺: Trạch Thiên Quải (Hexagram 43)
  [
    "䷫",
    "Thiên Phong Cấu",
    "Ngộ dã. Tương ngộ. Gặp gỡ, cấu kết, liên kết, kết hợp, móc nối, mềm gặp cứng. \nPhong vân bất trắc chi tượng: Gặp gỡ thình lình, ít khi, bất trắc; bắt tay, thông đồng, dính nhau."
  ],
  // ䷻: Thiên Phong Cấu (Hexagram 44)
  [
    "䷬",
    "Trạch Địa Tụy",
    "Tu dã. Trưng tập. Nhóm hợp, biểu tình, dồn đống, quần tụ nhau lại, kéo đến, kéo thành bầy. \nLong vân tế hội chi tượng: Tượng rồng mây giao hội; tụ hội, gom lại."
  ],
  // ䷼: Trạch Địa Tụy (Hexagram 45)
  [
    "䷭",
    "Địa Phong Thăng",
    "Tiến dã. Tiến thủ. Thăng tiến, trực chỉ, tiến mau, bay lên, vọt tới trước, bay lên không trung, thăng chức, thăng hà. \nPhù giao trực thượng chi tượng: Tượng chòi đạp để ngoi lên trên."
  ],
  // ䷽: Địa Phong Thăng (Hexagram 46)
  [
    "䷮",
    "Trạch Thủy Khốn",
    "Nguy dã. Nguy lo. Cùng quẫn, bị người làm ách, lo lắng, cùng khổ, mệt mỏi, nguy cấp, lo hiểm nạn. \nThủ kỷ đãi thời chi tượng: Tượng giữ mình đợi thời."
  ],
  // ䷾: Trạch Thủy Khốn (Hexagram 47)
  [
    "䷯",
    "Thủy Phong Tỉnh",
    "Tịnh dã. Trầm lặng. Ở chỗ nào cứ ở yên chỗ đó, xuống sâu, vực thẳm có nước, dưới sâu, cái giếng. \nKiền Khôn sất phối chi tượng: Tượng Trời Đất phối hợp lại; im lặng, bất động, bình an, ổn định."
  ],
  // ䷿: Thủy Phong Tỉnh (Hexagram 48)
  [
    "䷰",
    "Trạch Hỏa Cách",
    "Cải dã. Cải biến. Bỏ lối cũ, cải cách, hoán cải, cách tuyệt, cánh chim thay lông. \nThiên uyên huyền cách chi tượng: Tượng vực trời xa thẳm; thay đổi, trở mặt, cách xa."
  ],
  // ䷰: Trạch Hỏa Cách (Hexagram 49)
  [
    "䷱",
    "Hỏa Phong Đỉnh",
    "Định dã. Nung đúc. Đứng được, cậm đứng, trồng, nung nấu, rèn luyện, vững chắc, ước hẹn. \nLuyện dược thành đan chi tượng: Tượng luyện thuốc thành linh đơn; hứa hẹn, học, đứng tại chỗ, an định."
  ],
  // ䷱: Hỏa Phong Đỉnh (Hexagram 50)
  [
    "䷲",
    "Thuần Chấn",
    "Động dã. Động dụng. Rung động, sợ hãi do chấn động, phấn phát, nổ vang, phấn khởi, chấn kinh, nẩy mầm. \nTrùng trùng chấn kinh chi tượng: Tượng khắp cùng dấy động, âm thanh, mở ra, xúc động."
  ],
  // ䷲: Thuần Chấn (Hexagram 51)
  [
    "䷳",
    "Thuần Cấn",
    "Chỉ dã. Ngưng nghỉ. Ngăn giữ, ở, thôi, dừng lại, gói ghém, ngăn cấm, vừa đúng chỗ. \nThủ cựu đãi thời chi tượng: Tượng giữ mức cũ đợi thời, chờ đợi."
  ],
  // ䷳: Thuần Cấn (Hexagram 52)
  [
    "䷴",
    "Phong Sơn Tiệm",
    "Tiến dã. Tuần tự. Từ từ, thong thả đến, lần lần, bậc thang, bò tới, chậm chạp, nhai nhỏ nuốt vào. \nPhúc lộc đồng lâm chi tượng: Tượng phúc lộc cùng đến, đi tới, tiến hành, tiến trình, trật tự, từng bước, (động từ)."
  ],
  // ䷴: Phong Sơn Tiệm (Hexagram 53)
  [
    "䷵",
    "Lôi Trạch Quy Muội",
    "Tai dã. Xôn xao. Tai nạn, rối ren, lôi thôi, chen lẫn, nữ chi chung, gái lấy chồng. \nÁc qủy vi sủng chi tượng: Tượng ma quái làm rối, ngu muội, mờ mịt."
  ],
  // ䷵: Lôi Trạch Quy Muội (Hexagram 54)
  [
    "䷶",
    "Lôi Hỏa Phong",
    "Thịnh đại dã. Hoà mỹ. Thịnh đại, được mùa, nhiều người góp sức. \nChí đồng đạo hợp chi tượng: Tượng cùng đồng tâm hiệp lực, nở lớn."
  ],
  // ䷶: Lôi Hỏa Phong (Hexagram 55)
  [
    "䷷",
    "Hỏa Sơn Lữ",
    "Khách dã. Thứ yếu. Đỗ nhờ, khách, ở đậu, tạm trú, kê vào, gá vào, ký ngụ bên ngoài, tính cách lang thang, ít người thân, không chính. \nỶ nhân tác giá chi tượng: Tượng nhờ người mai mối, tạm thời, ngoài lề, phụ trợ."
  ],
  // ䷷: Hỏa Sơn Lữ (Hexagram 56)
  [
    "䷸",
    "Thuần Tốn",
    "Thuận nhập dã. Thuận nhập. Thẩm thấu, theo lên theo xuống, theo tới theo lui, có sự giấu diếm ở trong. \nÂm dương thăng giáng chi tượng: Tượng khí âm dương lên xuống giao hợp, thu nhập, nhập vào, nhập lại."
  ],
  // ䷸: Thuần Tốn (Hexagram 57)
  [
    "䷹",
    "Thuần Đoài",
    "Duyệt dã. Hiện đẹp. Đẹp đẽ, ưa thích, vui hiện trên mặt, không buồn chán, cười nói, khuyết mẻ, hủy triết, lý thuyết. \nHỉ dật mi tự chi tượng: Tượng vui hiện trên mặt, khẩu khí, chỉ nói năng, đổ bể, xuất khẩu, cửa, lời nói."
  ],
  // ䷹: Thuần Đoài (Hexagram 58)
  [
    "䷺",
    "Phong Thủy Hoán",
    "Tán dã. Ly tán. Lan ra, tràn lan, nổi trôi, tán thất, trốn đi xa, lánh xa, thất nhân tâm, hao hớt. \nThủy ngộ phong tắc hoán tán chi tượng: Tượng nước gặp gió thì phải tan phải chạy, phân ly, đi xa."
  ],
  // ䷺: Phong Thủy Hoán (Hexagram 59)
  [
    "䷻",
    "Thủy Trạch Tiết",
    "Chỉ dã. Giảm chế. Ngăn ngừa, tiết độ, chừng mực, kềm chế, giảm bớt, nhiều thì tràn. \nTrạch thượng hữu thủy chi tượng: Tượng trên đầm có nước, tiết ra, nước trên đầm tràn ra nhưng cũng còn giữ lại phần nào, nên gọi là giảm bớt thôi."
  ],
  // ䷻: Thủy Trạch Tiết (Hexagram 60)
  [
    "䷼",
    "Phong Trạch Trung Phu",
    "Tín dã. Trung thật. Tín thật, không ngờ vực, có uy tín cho người tin tưởng, tín ngưỡng, ở trong, ở giữa. \nNhu tại nội nhi đắc trung chi tượng: Tượng âm ở bên trong mà được giữa, trung hư, tư tưởng tinh thần thôi, trung niên, nội bộ bên trong."
  ],
  // ䷼: Phong Trạch Trung Phu (Hexagram 61)
  [
    "䷽",
    "Lôi Sơn Tiểu Quá",
    "Họa dã. Bất túc. Thiểu não, thiểu lý, hèn mọn, nhỏ nhặt, bẩn thỉu, thiếu cường lực. \nThượng hạ truân chuyên chi tượng: Tượng trên dưới gian nan, vất vả, buồn thảm; ép bức, không đầy đủ, vật nhỏ."
  ],
  // ䷽: Lôi Sơn Tiểu Quá (Hexagram 62)
  [
    "䷾",
    "Thủy Hỏa Ký Tế",
    "Hợp dã. Hiện hợp. Gặp nhau, cùng nhau, đã xong, việc xong, hiện thực, ích lợi nhỏ. \nHanh tiểu giả chi tượng: Tượng việc nhỏ thì thành, kết hợp, hợp tác, từng cặp, hoàn thành, kế bên."
  ],
  // ䷾: Thủy Hỏa Ký Tế (Hexagram 63)
  [
    "䷿",
    "Hỏa Thủy Vị Tế",
    "Thất dã. Thất cách. Thất bác, mất, thất bại, dở dang, chưa xong, nửa chừng. \nƯu trung vọng hỷ chi tượng: Tượng trong cái lo có cái mừng, nửa đường, không hay, xui, việc nửa thành nửa bại."
  ]
  // ䷿: Hỏa Thủy Vị Tế (Hexagram 64)
];
const ICHING_CN = [
  [
    "䷀",
    "乾為天",
    "健也. 正大. 剛強, 乾燥, 廣大, 健行不息. \n元亨利貞之象: 萬物創始, 生長, 亨通, 成就; 自我, 正面, 面前."
  ],
  // ䷀: 乾為天 (Hexagram 1)
  ["䷁", "坤為地", "順也. 柔順. 順從, 柔軟, 隨和得利, 容納, 成就. \n柔順利貞之象: 知利而依, 陰氣, 幽暗."],
  // ䷁: 坤為地 (Hexagram 2)
  ["䷂", "水雷屯", "難也. 艱難. 弱小, 實力不足, 遲疑, 辛苦, 須藉助他人. \n先凶後吉之象: 事初困頓; 艱難, 纏繞."],
  // ䷂: 水雷屯 (Hexagram 3)
  [
    "䷃",
    "山水蒙",
    "昧也. 不明. 昏暗, 模糊, 不明朗, 遮蔽, 愚昧, 幼稚. \n天網四張之象: 天網四佈; 陰謀, 陷阱, 虛幻, 未知."
  ],
  // ䷃: 山水蒙 (Hexagram 4)
  ["䷄", "水天需", "順也. 聚會. 待時而動, 順應, 聚集, 考察, 研究, 歸向. \n君子歡會之象: 君子宴樂待時; 雙會, 朋友相聚."],
  // ䷄: 水天需 (Hexagram 5)
  ["䷅", "天水訟", "論也. 不和. 爭辯, 訴訟, 計較, 爭吵, 爭論. \n大小不和之象: 上下不睦; 不如意, 違心, 不合."],
  // ䷅: 天水訟 (Hexagram 6)
  ["䷆", "地水師", "眾也. 眾助. 大眾, 師友, 互相學習, 互相扶持, 領導. \n士眾擁從之象: 眾人支持; 主人, 領袖."],
  // ䷆: 地水師 (Hexagram 7)
  ["䷇", "水地比", "輔也. 選拔. 親近, 篩選, 親密, 私有, 團長, 選擇, 歸一. \n去讒任賢之象: 棄佞用忠; 選拔, 親人, 萃取."],
  // ䷇: 水地比 (Hexagram 8)
  [
    "䷈",
    "風天小畜",
    "塞也. 異同. 暫時阻礙, 意見不合, 孤獨, 蓄怨, 不和, 微小. \n琴瑟不調之象: 琴瑟失調; 奇特, 小人, 少許."
  ],
  // ䷈: 風天小畜 (Hexagram 9)
  ["䷉", "天澤履", "禮也. 履行. 禮儀, 規範, 踐履, 法律, 制度. \n虎狼當道之象: 虎狼阻路. 禮義, 合理, 言語, 出行."],
  // ䷉: 天澤履 (Hexagram 10)
  ["䷊", "地天泰", "通也. 調和. 通達, 通暢, 了解, 熟悉, 認識. \n天地和暢之象: 天地交泰; 平等, 溝通, 了解, 資訊."],
  // ䷊: 地天泰 (Hexagram 11)
  ["䷋", "天地否", "塞也. 間隔. 閉塞不通, 不相交感, 倒霉, 詆毀, 各行其是. \n上下僭亂之象: 上下不和; 結束, 不通, 不成."],
  // ䷋: 天地否 (Hexagram 12)
  ["䷌", "天火同人", "親也. 親善. 上下一心, 志同道合, 同類相聚. \n協力同心之象: 與人協力. 親近, 相同, 一對, 夥伴."],
  // ䷌: 天火同人 (Hexagram 13)
  ["䷍", "火天大有", "寬也. 盛大. 豐富, 悠閒, 包容. 廣大, 德厚, 光明. \n金玉滿堂之象: 金玉滿堂; 朋友, 多數."],
  // ䷍: 火天大有 (Hexagram 14)
  ["䷎", "地山謙", "退也. 退隱. 謙遜, 讓步, 辭退, 退守, 閉門, 隱忍. \n上下朦朧之象: 上下徬徨; 後方, 退步."],
  // ䷎: 地山謙 (Hexagram 15)
  ["䷏", "雷地豫", "悅也. 順動. 預備, 預防, 警覺, 歡樂. \n上下悅懌之象: 上下歡樂; 等待, 猶豫, 警惕."],
  // ䷏: 雷地豫 (Hexagram 16)
  ["䷐", "澤雷隨", "順也. 移動. 跟隨, 隨意, 無志向, 移動, 遷徙. \n反覆不定之象: 動而不居; 進展, 行動."],
  // ䷐: 澤雷隨 (Hexagram 17)
  ["䷑", "山風蠱", "事也. 事變. 事故, 疑慮, 敗壞, 警示, 修復前非. \n暗害相連之象: 損害相連; 修補, 毀壞."],
  // ䷑: 山風蠱 (Hexagram 18)
  ["䷒", "地澤臨", "大也. 臨穴. 壯大, 管理, 教育, 監管, 降臨. \n君子以教思之象: 君子教民, 保護; 導師, 主管."],
  // ䷒: 地澤臨 (Hexagram 19)
  ["䷓", "風地觀", "觀也. 觀察. 視察, 景象, 檢查, 瀏覽, 清掃. \n雲萍聚散之象: 雲萍聚散, 看見, 訪客."],
  // ䷓: 風地觀 (Hexagram 20)
  ["䷔", "火雷噬嗑", "潔也. 嚙合. 結合, 咬合, 糾纏, 審問, 採訪. \n威靡不振之象: 衰弱不振, 抓取, 踐踏."],
  // ䷔: 火雷噬嗑 (Hexagram 21)
  ["䷕", "山火賁", "飾也. 光明. 裝飾, 映照, 修整, 明亮, 透徹. \n光明通達之象: 光明通達; 表達."],
  // ䷕: 山火賁 (Hexagram 22)
  ["䷖", "山地剝", "落也. 消條. 剝落, 掠奪, 不利, 散落, 疏遠, 荒涼. \n六親冰炭之象: 親友疏離, 剔除, 喪失."],
  // ䷖: 山地剝 (Hexagram 23)
  ["䷗", "地雷復", "反也. 歸來. 重演, 復興, 轉向, 反覆, 回復. \n山外青山之象: 山外有山, 背叛, 復甦."],
  // ䷗: 地雷復 (Hexagram 24)
  ["䷘", "天雷無妄", "天災也. 侵凌. 意外, 差錯, 無序, 妄動, 對抗. \n剛自外來之象: 強者外來, 亂為, 失望, 虛妄."],
  // ䷘: 天雷無妄 (Hexagram 25)
  ["䷙", "山天大畜", "聚也. 積蓄. 積累, 儲存, 停留, 備用. \n同類歡會之象: 同類聚會, 局部, 大會."],
  // ䷙: 山天大畜 (Hexagram 26)
  ["䷚", "山雷頤", "養也. 養正. 照料, 修補, 飲食, 營養, 頤養. \n飛龍入淵之象: 龍入深淵休憩, 養精蓄銳."],
  // ䷚: 山雷頤 (Hexagram 27)
  ["䷛", "澤風大過", "禍也. 過大. 過份則災, 越位, 過多, 剛毅過度. \n嫩草經霜之象: 嫩草經霜; 過火, 過度."],
  // ䷛: 澤風大過 (Hexagram 28)
  ["䷜", "坎為水", "陷也. 險陷. 陷入, 深入, 坎坷, 束縛, 險阻. \n苦盡甘來之象: 歷險成功; 困頓, 幽暗, 險惡."],
  // ䷜: 坎為水 (Hexagram 29)
  ["䷝", "離為火", "麗也. 附麗. 光明, 空虛, 散發, 依附, 顯赫. \n門戶不寧之象: 家宅不寧; 災眚."],
  // ䷝: 離為火 (Hexagram 30)
  ["䷞", "澤山咸", "感也. 受感. 感應, 接受, 思考, 動心. \n男女交感之象: 男女情意; 敏感, 覺察."],
  // ䷞: 澤山咸 (Hexagram 31)
  ["䷟", "雷風恆", "久也. 長久. 恆常, 遲緩, 長期, 習慣, 不變. \n長久之義之象: 恆久之道; 故舊, 慣例."],
  // ䷟: 雷風恆 (Hexagram 32)
  ["䷠", "天山遯", "退也. 隱遁. 退避, 隱匿, 欺瞞, 逃避. \n豹隱南山之象: 豹隱南山; 消失, 虛假."],
  // ䷠: 天山遯 (Hexagram 33)
  ["䷡", "雷天大壯", "志也. 自強. 志向, 向上, 強盛, 高聳, 立場. \n鳳集登山之象: 鳳棲高山; 獨立, 強大."],
  // ䷡: 雷天大壯 (Hexagram 34)
  ["䷢", "火地晉", "進也. 顯現. 前進, 晉升, 展現, 昭示. \n龍見呈祥之象: 龍現祥瑞; 發展."],
  // ䷢: 火地晉 (Hexagram 35)
  ["䷣", "地火明夷", "傷也. 傷害. 憂患, 疾病, 暗淡, 光明受損. \n荊棘滿道之象: 荊棘滿途; 憂鬱, 黑暗."],
  // ䷣: 地火明夷 (Hexagram 36)
  ["䷤", "風火家人", "同也. 繁衍. 家屬, 同伴, 同志, 生長, 開發. \n開花結子之象: 開花結果; 繁衍, 人事."],
  // ䷤: 風火家人 (Hexagram 37)
  ["䷥", "火澤睽", "乖也. 輔助. 背離, 乖異, 互利, 變通. \n狐假虎威之象: 狐假虎威; 依託, 虛假."],
  // ䷥: 火澤睽 (Hexagram 38)
  ["䷦", "水山蹇", "難也. 阻礙. 艱難, 停止, 遲緩, 跛足. \n不能進者之象: 無法前進, 停止."],
  // ䷦: 水山蹇 (Hexagram 39)
  ["䷧", "雷水解", "散也. 緩解. 解脫, 釋放, 流通, 赦免. \n雷雨作解之象: 雷雨舒解; 散開, 解脫."],
  // ䷧: 雷水解 (Hexagram 40)
  ["䷨", "山澤損", "失也. 損害. 損失, 減少, 虧損, 損下益上. \n防人暗算之象: 提防暗算, 耗損."],
  // ䷨: 山澤損 (Hexagram 41)
  ["䷩", "風雷益", "益也. 進益. 增益, 幫助, 昇進, 飛躍. \n鴻鵠衝霄之象: 鴻鵠高飛; 增加, 獲利."],
  // ䷩: 風雷益 (Hexagram 42)
  ["䷪", "澤天夬", "決也. 決斷. 終止, 邊界, 決定, 決裂. \n益之極則決之象: 盈極必缺; 斷裂."],
  // ䷪: 澤天夬 (Hexagram 43)
  ["䷫", "天風姤", "遇也. 相遇. 邂逅, 結合, 勾結, 柔遇剛. \n風雲不測之象: 意外相遇; 通謀, 相連."],
  // ䷫: 天風姤 (Hexagram 44)
  ["䷬", "澤地萃", "聚也. 聚集. 集合, 群聚, 匯集. \n龍雲際會之象: 龍雲交會; 聚會, 集中."],
  // ䷬: 澤地萃 (Hexagram 45)
  ["䷭", "地風升", "進也. 升騰. 晉升, 直接, 飛升, 升遷. \n扶搖直上之象: 扶搖直上, 騰飛."],
  // ䷭: 地風升 (Hexagram 46)
  ["䷮", "澤水困", "危也. 困頓. 窮困, 憂慮, 疲憊, 險難. \n守己待時之象: 守位待時, 困境."],
  // ䷮: 澤水困 (Hexagram 47)
  ["䷯", "水風井", "靜也. 沉靜. 定位, 深入, 沉靜, 水井. \n乾坤匹之象: 天地配合; 靜止, 安穩."],
  // ䷯: 水風井 (Hexagram 48)
  ["䷰", "澤火革", "改也. 改編. 變革, 創新, 轉換, 脫胎換骨. \n天淵懸隔之象: 天淵之別; 改革, 改變."],
  // ䷰: 澤火革 (Hexagram 49)
  ["䷱", "火風鼎", "定也. 鼎新. 立定, 鎔煉, 穩固, 約定. \n煉藥成丹之象: 煉丹成藥; 承諾, 安定."],
  // ䷱: 火風鼎 (Hexagram 50)
  ["䷲", "震為雷", "動也. 變動. 震動, 驚恐, 奮發, 萌芽. \n重重震驚之象: 全面震動, 聲音."],
  // ䷲: 震為雷 (Hexagram 51)
  ["䷳", "艮為山", "止也. 停止. 阻止, 居住, 靜止, 束之高閣. \n守舊待時之象: 守舊待時, 休息."],
  // ䷳: 艮為山 (Hexagram 52)
  ["䷴", "風山漸", "進也. 漸進. 循序, 緩慢, 階梯, 逐步. \n福祿同臨之象: 福祿齊至; 進程."],
  // ䷴: 風山漸 (Hexagram 53)
  ["䷵", "雷澤歸妹", "亂也. 混亂. 災難, 混雜, 糾葛, 嫁妹. \n惡鬼為寵之象: 魔怪騷擾; 愚昧."],
  // ䷵: 雷澤歸妹 (Hexagram 54)
  ["䷶", "雷火豐", "盛也. 盛大. 豐富, 豐收, 協力. \n志同道合之象: 同心協力; 繁榮."],
  // ䷶: 雷火豐 (Hexagram 55)
  ["䷷", "火山旅", "客也. 羈旅. 寄居, 旅客, 漂泊, 暫住. \n依人作嫁之象: 依附他人; 暫時."],
  // ䷷: 火山旅 (Hexagram 56)
  ["䷸", "巽為風", "入也. 滲透. 柔順, 進入, 隨風, 隱伏. \n陰陽升降之象: 陰陽交合; 深入."],
  // ䷸: 巽為風 (Hexagram 57)
  ["䷹", "兌為澤", "悅也. 喜悅. 悅人, 言談, 破損, 理論. \n喜溢眉宇之象: 喜形於色; 言辭."],
  // ䷹: 兌為澤 (Hexagram 58)
  ["䷺", "風水渙", "離也. 渙散. 傳播, 飄浮, 逃避, 疏遠. \n水遇風則渙之象: 風吹水散; 分離."],
  // ䷺: 風水渙 (Hexagram 59)
  ["䷻", "水澤節", "止也. 節制. 節度, 約束, 減少, 溢出. \n澤上有水之象: 澤水節制; 適度."],
  // ䷻: 水澤節 (Hexagram 60)
  ["䷼", "風澤中孚", "信也. 誠信. 信任, 威望, 內在, 中心. \n柔在內而得中之象: 誠信感物; 中庸."],
  // ䷼: 風澤中孚 (Hexagram 61)
  ["䷽", "雷山小過", "過也. 卑微. 憂慮, 狹隘, 脆弱, 不足. \n上下屯邅之象: 艱辛跋涉; 不足."],
  // ䷽: 雷山小過 (Hexagram 62)
  ["䷾", "水火既濟", "合也. 既成. 成就, 完成, 現實, 合作. \n亨小者之象: 小事成就; 完成."],
  // ䷾: 水火既濟 (Hexagram 63)
  ["䷿", "火水未濟", "失也. 未成. 失敗, 遺憾, 中止, 半途. \n憂中望喜之象: 憂中望喜; 未完."]
  // ䷿: 火水未濟 (Hexagram 64)
];
const ICHING_EN = [
  [
    "䷀",
    "The Creative / Heaven",
    "Power. Primary. Strong, dry, vast, healthy, unceasing virtue. \nImage of Great Success: The start, growth, fulfillment, and transformation of all things; self, front, forward."
  ],
  // ䷀: Pure Heaven (Hexagram 1)
  [
    "䷁",
    "The Receptive / Earth",
    "Devotion. Softness. Obedience, flexibility, yielding for gain, harmony, receiving, attaining. \nImage of Docility: Knowing when to follow, yin energy, obscurity."
  ],
  // ䷁: Pure Earth (Hexagram 2)
  [
    "䷂",
    "Difficulty at the Beginning",
    'Hardship. Initial struggle. Weakness, lack of strength, hesitation, labor, needing support. \nImage of "Bad first, good later": Initial difficulty; struggle, entanglement.'
  ],
  // ䷂: Water over Thunder (Hexagram 3)
  [
    "䷃",
    "Youthful Folly",
    "Obscurity. Unclear. Dark, dim, ambiguous, covered, ignorant, naive. \nImage of the Heavenly Net: Secret plots, traps, illusions, the unknown."
  ],
  // ䷃: Mountain over Water (Hexagram 4)
  [
    "䷄",
    "Waiting (Nourishment)",
    "Compliance. Gathering. Waiting before danger, following, assembling, investigating, researching. \nImage of the Superior Man’s Banquet: Gathering for joy while waiting; meeting friends."
  ],
  // ䷄: Water over Heaven (Hexagram 5)
  [
    "䷅",
    "Conflict",
    "Dispute. Discord. Argument, litigation, calculation, quarreling, debate. \nImage of Great and Small Discord: Lack of harmony; displeasure, disagreement, instability."
  ],
  // ䷅: Heaven over Water (Hexagram 6)
  [
    "䷆",
    "The Army",
    "Multitude. Support. Masses, teacher and friend, mutual learning, supporting through hardship. \nImage of People Following: Masses supporting each other; leader, head of an organization."
  ],
  // ䷆: Earth over Water (Hexagram 7)
  [
    "䷇",
    "Holding Together (Union)",
    "Selection. Affinity. Close connection, filtering, intimacy, private possession, team leader, choosing, returning to the source. \nImage of Discarding Slander: Choosing the worthy; relatives, extraction."
  ],
  // ䷇: Water over Earth (Hexagram 8)
  [
    "䷈",
    "Small Taming",
    "Obstruction. Difference. Blockage, disagreement, solitude, harboring resentment, small-mindedness. \nImage of Discordant Instruments: Unusual, special, small, petty."
  ],
  // ䷈: Wind over Heaven (Hexagram 9)
  [
    "䷉",
    "Treading (Conduct)",
    "Ritual. Progress. Etiquette, moderation, standard, walking carefully, legal system. \nImage of Tiger on the Road: Danger on the path. Logic, travel, vehicles."
  ],
  // ䷉: Heaven over Lake (Hexagram 10)
  [
    "䷊",
    "Peace (Prosperity)",
    "Communication. Harmony. Understanding, thoroughness, familiarity, acquaintance. \nImage of Heaven and Earth in Harmony: Balance, shared information, knowing oneself and others."
  ],
  // ䷊: Earth over Heaven (Hexagram 11)
  [
    "䷋",
    "Standstill (Stagnation)",
    "Obstruction. Separation. Blockage, lack of communication, misfortune, slander, going separate ways. \nImage of Chaos: Confusion between high and low; end of path, failure."
  ],
  // ䷋: Heaven over Earth (Hexagram 12)
  [
    "䷌",
    "Fellowship with Men",
    "Affinity. Friendliness. Unity of mind, shared interests, same group of people. \nImage of Combined Effort: Close connection, similarity, partnership, team."
  ],
  // ䷌: Heaven over Fire (Hexagram 13)
  [
    "䷍",
    "Possession in Great Measure",
    "Abundance. Great wealth. Having much, leisure, tolerance. Magnanimity, virtue, great light. \nImage of Gold and Jade filling the house: Wealth, plurality, friends."
  ],
  // ䷍: Fire over Heaven (Hexagram 14)
  [
    "䷎",
    "Modesty",
    "Retreat. Hiding. Humility, yielding, resigning, withdrawing inward, keeping to oneself. \nImage of Confusion: Bewilderment; behind, stepping back."
  ],
  // ䷎: Earth over Mountain (Hexagram 15)
  [
    "䷏",
    "Enthusiasm",
    "Joy. Harmonious action. Preparation, precaution, vigilance, early joy. \nImage of Mutual Delight: Waiting, hesitation, movement in the dark; caution."
  ],
  // ䷏: Thunder over Earth (Hexagram 16)
  [
    "䷐",
    "Following",
    "Compliance. Movement. Following along, without specific aim, yielding, transfer, movement like a car. \nImage of Constant Change: Action still in progress, moving."
  ],
  // ䷐: Lake over Thunder (Hexagram 17)
  [
    "䷑",
    "Work on what has been spoiled",
    "Event. Change. Incident, internal unease, doubt, making a mistake, correcting past errors. \nImage of Linked Harms: Reparation, damage."
  ],
  // ䷑: Mountain over Wind (Hexagram 18)
  [
    "䷒",
    "Approach",
    "Greatness. Management. Growing, major task, education, teacher, supervisor, descending. \nImage of Teaching and Protecting: Master, director, learning."
  ],
  // ䷒: Earth over Lake (Hexagram 19)
  [
    "䷓",
    "Contemplation (View)",
    "Observation. Inspection. Seeing, scenery, inspection, military review, browsing, painting, cleaning. \nImage of Floating Clouds: Gathering and dispersing, seeing, guest."
  ],
  // ䷓: Wind over Earth (Hexagram 20)
  [
    "䷔",
    "Biting Through",
    "Cleansing. Biting. Union, grabbing, chewing, interviewing, inquiring (learning). \nImage of Weakness: Unable to run, scratching, trampling."
  ],
  // ䷔: Fire over Thunder (Hexagram 21)
  [
    "䷕",
    "Grace (Adornment)",
    "Decoration. Brilliance. Adornment, reflection, repair, makeup, clarity, endoscopy. \nImage of Clear Communication: Brightness, thoroughness; expression."
  ],
  // ䷕: Mountain over Fire (Hexagram 22)
  [
    "䷖",
    "Splitting Apart",
    "Fall. Desolation. Stripping away, robbery, unfavorable, falling, separation, loneliness, sadness. \nImage of Estranged Relatives: Removal, loss, alienation."
  ],
  // ䷖: Mountain over Earth (Hexagram 23)
  [
    "䷗",
    "Return (The Turning Point)",
    "Reversal. Recovery. Recurrence, returning, revival, turning back, restoration. \nImage of Mountain beyond Mountain: Betrayal, counter-attack, initial movement."
  ],
  // ䷗: Earth over Thunder (Hexagram 24)
  [
    "䷘",
    "Innocence (The Unexpected)",
    "Natural disaster. Intrusion. Accident, mistake, lack of order, acting recklessly, opposition. \nImage of External Strength: Acting blindly, disappointment, vanity."
  ],
  // ䷘: Heaven over Thunder (Hexagram 25)
  [
    "䷙",
    "The Great Taming",
    "Accumulation. Storage. Accumulating, saving, stockpiling, reserve. \nImage of Harmonious Gathering: Local gathering, assembly, meeting within a faction."
  ],
  // ䷙: Mountain over Heaven (Hexagram 26)
  [
    "䷚",
    "Providing Nourishment",
    "Nourishment. Care. Maintenance, eating and drinking, nutrition, the Sage nourishing people. \nImage of the Dragon in the Abyss: Resting, waiting, nurturing."
  ],
  // ䷚: Mountain over Thunder (Hexagram 27)
  [
    "䷛",
    "Preponderance of the Great",
    "Calamity. Over-excess. Excess leads to disaster, beyond normal limits, internal rigidity. \nImage of Tender Grass in Frost: Excessive, too much."
  ],
  // ䷛: Lake over Wind (Hexagram 28)
  [
    "䷜",
    "The Abysmal (Water)",
    'Entrapment. Danger. Falling into, deep penetration, closing doors, difficulty, constraint. \nImage of "Sweetness after Bitterness": Being stuck, darkness, danger, intuition.'
  ],
  // ䷜: Pure Water (Hexagram 29)
  [
    "䷝",
    "The Clinging (Fire)",
    "Brightness. Radiance. Shining, empty, spreading, clinging to, attachment, showing off. \nImage of Unrestful House: Misfortune, ill omen."
  ],
  // ䷝: Pure Fire (Hexagram 30)
  [
    "䷞",
    "Influence (Wooing)",
    "Feeling. Reception. Sensation, resonance, receiving, hearing, thinking of, emotion. \nImage of Mutual Attraction: Sensitivity, awareness."
  ],
  // ䷞: Lake over Mountain (Hexagram 31)
  [
    "䷟",
    "Duration",
    "Permanence. Longevity. Long time, slow, eternal bond like marriage, old friendship. \nImage of Everlasting Meaning: Daily routine, habit, no change."
  ],
  // ䷟: Thunder over Wind (Hexagram 32)
  [
    "䷠",
    "Retreat",
    "Withdrawal. Hiding. Retreating, concealing, avoiding the world, deceit, hiding the face. \nImage of the Leopard in Southern Mountain: Gone, fake object."
  ],
  // ䷠: Heaven over Mountain (Hexagram 33)
  [
    "䷡",
    "The Power of the Great",
    "Will. Self-strength. Ambition, aspiration, strength, high position, standing one’s ground. \nImage of the Phoenix on the Mountain: Independence, personal task."
  ],
  // ䷡: Thunder over Heaven (Hexagram 34)
  [
    "䷢",
    "Progress",
    "Advancement. Manifestation. Moving forward, approaching, rising above ground, displaying. \nImage of the Dragon’s Omen: Development, success."
  ],
  // ䷢: Fire over Earth (Hexagram 35)
  [
    "䷣",
    "Darkening of the Light",
    "Injury. Pain. Wounded, illness, sorrow, light being harmed. \nImage of Thorns on the Road: Depression, disappearance, darkness."
  ],
  // ䷣: Earth over Fire (Hexagram 36)
  [
    "䷤",
    "The Family",
    "Unity. Growth. Family members, household, same race, colleague, reproduction, expansion. \nImage of Flowering and Fruiting: Childhood, secondary task, human resources."
  ],
  // ䷤: Wind over Fire (Hexagram 37)
  [
    "䷥",
    "Opposition",
    "Deviation. Support. Separation, mutual exploitation, flexibility like a bow and arrow. \nImage of the Fox and the Tiger: Borrowed power, fake, unfinished business."
  ],
  // ䷥: Fire over Lake (Hexagram 38)
  [
    "䷦",
    "Obstruction",
    "Difficulty. Barrier. Stopping, prevention, slowness, lameness, hardship. \nImage of Being Unable to Advance: Halting, stopping."
  ],
  // ䷦: Water over Mountain (Hexagram 39)
  [
    "䷧",
    "Deliverance",
    "Dispersion. Everywhere. Dissolving danger, liberation, dispersal, circulation, amnesty. \nImage of Thunder and Rain: Breaking open, release."
  ],
  // ䷧: Thunder over Water (Hexagram 40)
  [
    "䷨",
    "Decrease",
    "Loss. Damage. Loss, reduction, losing the bottom to benefit the top. \nImage of Fearing Secret Harm: Depletion, loss."
  ],
  // ䷨: Mountain over Lake (Hexagram 41)
  [
    "䷩",
    "Increase",
    "Benefit. Progress. Gaining advantage, help, widespread fame, leaping forward. \nImage of the Swan reaching the Sky: Speed, adding profit, advancing."
  ],
  // ䷩: Wind over Thunder (Hexagram 42)
  [
    "䷪",
    "Break-through (Resoluteness)",
    "Decision. Decisiveness. Ending, boundary, resolution, shares, cutting off. \nImage of Benefit reaching the Limit: Breaking, snapping."
  ],
  // ䷪: Lake over Heaven (Hexagram 43)
  [
    "䷫",
    "Coming to Meet",
    "Encounter. Connection. Meeting, coupling, connecting, soft meeting hard. \nImage of Unpredictable Wind: Sudden encounter, collusion, attachment."
  ],
  // ䷫: Heaven over Wind (Hexagram 44)
  [
    "䷬",
    "Gathering Together (Massing)",
    "Assembly. Collection. Gathering, protest, piling up, massing together. \nImage of Dragon and Clouds meeting: Reunion, collection."
  ],
  // ䷬: Lake over Earth (Hexagram 45)
  [
    "䷭",
    "Pushing Upward",
    "Progress. Advancement. Rising, direct, moving fast, ascending to the sky, promotion. \nImage of Soaring High: Climbing up, rising."
  ],
  // ䷭: Earth over Wind (Hexagram 46)
  [
    "䷮",
    "Oppression (Exhaustion)",
    "Danger. Worry. Hardship, being trapped, anxiety, exhaustion, emergency. \nImage of Waiting for the Time: Holding oneself, distress."
  ],
  // ䷮: Lake over Water (Hexagram 47)
  [
    "䷯",
    "The Well",
    "Quietude. Calm. Staying in place, going deep, abyss with water, the well. \nImage of Heaven and Earth Pairing: Silence, immobility, peace, stability."
  ],
  // ䷯: Water over Wind (Hexagram 48)
  [
    "䷰",
    "Revolution (Molt)",
    "Change. Transformation. Discarding the old, reform, changing wings. \nImage of the Great Gap: Change, turning away, distance."
  ],
  // ䷰: Lake over Fire (Hexagram 49)
  [
    "䷱",
    "The Caldron",
    "Stability. Forging. Standing firm, cooking, tempering, training, commitment. \nImage of Forging the Elixir: Promise, study, stability."
  ],
  // ䷱: Fire over Wind (Hexagram 50)
  [
    "䷲",
    "The Arousing (Thunder)",
    "Movement. Action. Vibration, fear due to shock, excitement, eruption, germination. \nImage of Repeated Shocks: Sound, opening, emotion."
  ],
  // ䷲: Pure Thunder (Hexagram 51)
  [
    "䷳",
    "Keeping Still (Mountain)",
    "Restraint. Stopping. Keeping, staying, pausing, prohibiting. \nImage of Keeping the Old: Waiting for the time, resting."
  ],
  // ䷳: Pure Mountain (Hexagram 52)
  [
    "䷴",
    "Development (Gradual Progress)",
    "Advancement. Sequence. Slowly, gradual arrival, stairs, chewing small. \nImage of Fortune Arriving: Proceeding, process, order."
  ],
  // ䷴: Wind over Mountain (Hexagram 53)
  [
    "䷵",
    "The Marrying Maiden",
    "Calamity. Turmoil. Disaster, confusion, messy, a girl getting married. \nImage of Evil Spirits: Confusion, ignorance, obscurity."
  ],
  // ䷵: Thunder over Lake (Hexagram 54)
  [
    "䷶",
    "Abundance",
    "Greatness. Harmony. Large, good harvest, collective effort. \nImage of Shared Vision: Unity, blooming."
  ],
  // ䷶: Thunder over Fire (Hexagram 55)
  [
    "䷷",
    "The Wanderer",
    "Guest. Secondary. Lodging, stranger, temporary stay, wandering, few relatives. \nImage of Relying on Others: Temporary, marginal, auxiliary."
  ],
  // ䷷: Fire over Mountain (Hexagram 56)
  [
    "䷸",
    "The Gentle (Wind)",
    "Penetration. Compliance. Permeating, following up and down, hidden things inside. \nImage of Rising and Falling Energies: Income, entering, gathering."
  ],
  // ䷸: Pure Wind (Hexagram 57)
  [
    "䷹",
    "The Joyous (Lake)",
    "Delight. Beauty. Pleasure, smiling, talking, theory, broken/chipped. \nImage of Joy on the Face: Speech, broken, outlet."
  ],
  // ䷹: Pure Lake (Hexagram 58)
  [
    "䷺",
    "Dispersion (Dissolution)",
    "Scattering. Separation. Spreading, floating, escaping, losing hearts. \nImage of Water meeting Wind: Dissolution, separation, going far."
  ],
  // ䷺: Wind over Water (Hexagram 59)
  [
    "䷻",
    "Limitation",
    "Restraint. Reduction. Prevention, moderation, curbing, overflowing. \nImage of Water over the Lake: Restricting, leaking but retaining."
  ],
  // ䷻: Water over Lake (Hexagram 60)
  [
    "䷼",
    "Inner Truth",
    "Faith. Honesty. Sincerity, prestige, internal, center. \nImage of Softness within: Sincerity, internal spirit, middle-aged."
  ],
  // ䷼: Wind over Lake (Hexagram 61)
  [
    "䷽",
    "Preponderance of the Small",
    "Calamity. Insufficiency. Petty, small, mean, lack of strength. \nImage of Struggle: Hardship, sadness, pressure."
  ],
  // ䷽: Thunder over Mountain (Hexagram 62)
  [
    "䷾",
    "After Completion",
    "Union. Manifested union. Meeting, finished, reality, small benefit. \nImage of Small Success: Accomplishment, cooperation, completion."
  ],
  // ䷾: Water over Fire (Hexagram 63)
  [
    "䷿",
    "Before Completion",
    "Loss. Failure. Misplaced, unfinished, half-way. \nImage of Hope in Sorrow: Half success, half failure, misfortune."
  ]
  // ䷿: Fire over Water (Hexagram 64)
];
const ICHING_NUMBER = [
  "111111",
  // ䷀: Thuần Càn (Hexagram 1)
  "000000",
  // ䷁: Thuần Khôn (Hexagram 2)
  "010001",
  // ䷂: Thủy Lôi Truân (Hexagram 3)
  "100010",
  // ䷃: Sơn Thủy Mông (Hexagram 4)
  "010111",
  // ䷄: Thủy Thiên Nhu (Hexagram 5)
  "111010",
  // ䷅: Thiên Thủy Tụng (Hexagram 6)
  "000010",
  // ䷆: Địa Thủy Sư (Hexagram 7)
  "010000",
  // ䷇: Thủy Địa Tỷ (Hexagram 8)
  "110111",
  // ䷈: Phong Thiên Tiểu Súc (Hexagram 9)
  "111011",
  // ䷉: Thiên Trạch Lý (Hexagram 10)
  "000111",
  // ䷊: Địa Thiên Thái (Hexagram 11)
  "111000",
  // ䷋: Thiên Địa Bĩ (Hexagram 12)
  "111101",
  // ䷌: Thiên Hỏa Đồng Nhân (Hexagram 13)
  "101111",
  // ䷍: Hỏa Thiên Đại Hữu (Hexagram 14)
  "000100",
  // ䷎: Địa Sơn Khiêm (Hexagram 15)
  "001000",
  // ䷏: Lôi Địa Dự (Hexagram 16)
  "011001",
  // ䷐: Trạch Lôi Tùy (Hexagram 17)
  "100110",
  // ䷑: Sơn Phong Cổ (Hexagram 18)
  "000011",
  // ䷒: Địa Trạch Lâm (Hexagram 19)
  "110000",
  // ䷓: Phong Địa Quan (Hexagram 20)
  "101001",
  // ䷔: Hỏa Lôi Phệ Hạp (Hexagram 21)
  "100101",
  // ䷕: Sơn Hỏa Bí (Hexagram 22)
  "100000",
  // ䷖: Sơn Địa Bác (Hexagram 23)
  "000001",
  // ䷗: Địa Lôi Phục (Hexagram 24)
  "111001",
  // ䷘: Thiên Lôi Vô Vọng (Hexagram 25)
  "100111",
  // ䷙: Sơn Thiên Đại Súc (Hexagram 26)
  "100001",
  // ䷚: Sơn Lôi Di (Hexagram 27)
  "011110",
  // ䷛: Trạch Phong Đại Quá (Hexagram 28)
  "010010",
  // ䷜: Thuần Khảm (Hexagram 29)
  "101101",
  // ䷝: Thuần Ly (Hexagram 30)
  "011100",
  // ䷞: Trạch Sơn Hàm (Hexagram 31)
  "001110",
  // ䷟: Lôi Phong Hằng (Hexagram 32)
  "111100",
  // ䷠: Thiên Sơn Độn (Hexagram 33)
  "001111",
  // ䷡: Lôi Thiên Đại Tráng (Hexagram 34)
  "101000",
  // ䷢: Hỏa Địa Tấn (Hexagram 35)
  "000101",
  // ䷣: Địa Hỏa Minh Di (Hexagram 36)
  "110101",
  // ䷤: Phong Hỏa Gia Nhân (Hexagram 37)
  "101011",
  // ䷥: Hỏa Trạch Khuê (Hexagram 38)
  "010100",
  // ䷦: Thủy Sơn Kiển (Hexagram 39)
  "001010",
  // ䷧: Lôi Thủy Giải (Hexagram 40)
  "100011",
  // ䷨: Sơn Trạch Tổn (Hexagram 41)
  "110001",
  // ䷹: Phong Lôi Ích (Hexagram 42)
  "011111",
  // ䷺: Trạch Thiên Quải (Hexagram 43)
  "111110",
  // ䷻: Thiên Phong Cấu (Hexagram 44)
  "011000",
  // ䷼: Trạch Địa Tụy (Hexagram 45)
  "000110",
  // ䷽: Địa Phong Thăng (Hexagram 46)
  "011010",
  // ䷾: Trạch Thủy Khốn (Hexagram 47)
  "010110",
  // ䷿: Thủy Phong Tỉnh (Hexagram 48)
  "011101",
  // ䷰: Trạch Hỏa Cách (Hexagram 49)
  "101110",
  // ䷱: Hỏa Phong Đỉnh (Hexagram 50)
  "001001",
  // ䷲: Thuần Chấn (Hexagram 51)
  "100100",
  // ䷳: Thuần Cấn (Hexagram 52)
  "110100",
  // ䷴: Phong Sơn Tiệm (Hexagram 53)
  "001011",
  // ䷵: Lôi Trạch Quy Muội (Hexagram 54)
  "001101",
  // ䷶: Lôi Hỏa Phong (Hexagram 55)
  "101100",
  // ䷷: Hỏa Sơn Lữ (Hexagram 56)
  "110110",
  // ䷸: Thuần Tốn (Hexagram 57)
  "011011",
  // ䷹: Thuần Đoài (Hexagram 58)
  "110010",
  // ䷺: Phong Thủy Hoán (Hexagram 59)
  "010011",
  // ䷻: Thủy Trạch Tiết (Hexagram 60)
  "110011",
  // ䷼: Phong Trạch Trung Phu (Hexagram 61)
  "001100",
  // ䷽: Lôi Sơn Tiểu Quá (Hexagram 62)
  "010101",
  // ䷾: Thủy Hỏa Ký Tế (Hexagram 63)
  "101010"
  // ䷿: Hỏa Thủy Vị Tế (Hexagram 64)
];

export { ICHING_NUMBER as I, ICHING as a, ICHING_EN as b, ICHING_CN as c };
