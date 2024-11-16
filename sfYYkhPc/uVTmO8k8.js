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
const TKN = [
  /*0*/
  "Tiểu Hàn",
  // Tháng 12
  /*1*/
  "Đại Hàn",
  /*2*/
  "Lập Xuân",
  // Tháng 1
  /*3*/
  "Vũ Thủy",
  /*4*/
  "Kinh Trập",
  // Tháng 2
  /*5*/
  "Xuân Phân",
  /*6*/
  "Thanh Minh",
  // Tháng 3
  /*7*/
  "Cốc Vũ",
  /*8*/
  "Lập Hạ",
  // Tháng 4
  /*9*/
  "Tiểu Mãn",
  /*10*/
  "Mang Chủng",
  // Tháng 5
  /*11*/
  "Hạ Chí",
  /*12*/
  "Tiểu Thử",
  // Tháng 6
  /*13*/
  "Đại Thử",
  /*14*/
  "Lập Thu",
  // Tháng 7
  /*15*/
  "Xử Thử",
  /*16*/
  "Bạch Lộ",
  // Tháng 8
  /*17*/
  "Thu Phân",
  /*18*/
  "Hàn Lộ",
  // Tháng 9
  /*19*/
  "Sương Giáng",
  /*20*/
  "Lập Đông",
  // Tháng 10
  /*21*/
  "Tiểu Tuyết",
  /*22*/
  "Đại Tuyết",
  // Tháng 11
  /*23*/
  "Đông Chí"
];
const TKN_PN = [
  [0, 2],
  // 0
  [0, 2],
  // 1
  [2, 4],
  // 2
  [2, 4],
  // 3
  [4, 6],
  // 4
  [4, 6],
  // 5
  [6, 8],
  // 6
  [6, 8],
  // 7
  [8, 10],
  // 8
  [8, 10],
  // 9
  [10, 12],
  // 10
  [10, 12],
  // 11
  [12, 14],
  // 12
  [12, 14],
  // 13
  [14, 16],
  // 14
  [14, 16],
  // 15
  [16, 18],
  // 16
  [16, 18],
  // 17
  [18, 20],
  // 18
  [18, 20],
  // 19
  [20, 22],
  // 20
  [20, 22],
  // 21
  [22, 0],
  // 22
  [22, 0]
  // 23
];
const LTHG = [
  "Giáp Tý",
  // 4,
  "Ất Sửu",
  // 4,
  "Bính Dần",
  // 6,
  "Đinh Mão",
  // 6,
  "Mậu Thìn",
  // 3,
  "Kỷ Tị",
  // 3,
  "Canh Ngọ",
  // 5,
  "Tân Mùi",
  // 5,
  "Nhâm Thân",
  // 4,
  "Quý Dậu",
  // 4,
  "Giáp Tuất",
  // 6,
  "Ất Hợi",
  // 6,
  "Bính Tý",
  // 2,
  "Đinh Sửu",
  // 2,
  "Mậu Dần",
  // 5,
  "Kỷ Mão",
  // 5,
  "Canh Thìn",
  // 4,
  "Tân Tị",
  // 4,
  "Nhâm Ngọ",
  // 3,
  "Quý Mùi",
  // 3,
  "Giáp Thân",
  // 2,
  "Ất Dậu",
  // 2,
  "Bính Tuất",
  // 5,
  "Đinh Hợi",
  // 5,
  "Mậu Tý",
  // 6,
  "Kỷ Sửu",
  // 6,
  "Canh Dần",
  // 3,
  "Tân Mão",
  // 3,
  "Nhâm Thìn",
  // 2,
  "Quý Tị",
  // 2,
  "Giáp Ngọ",
  // 4,
  "Ất Mùi",
  // 4,
  "Bính Thân",
  // 6,
  "Đinh Dậu",
  // 6,
  "Mậu Tuất",
  // 3,
  "Kỷ Hợi",
  // 3,
  "Canh Tý",
  // 5,
  "Tân Sửu",
  // 5,
  "Nhâm Dần",
  // 4,
  "Quý Mão",
  // 4,
  "Giáp Thìn",
  // 6,
  "Ất Tị",
  // 6,
  "Bính Ngọ",
  // 2,
  "Đinh Mùi",
  // 2,
  "Mậu Thân",
  // 5,
  "Kỷ Dậu",
  // 5,
  "Canh Tuất",
  // 4,
  "Tân Hợi",
  // 4,
  "Nhâm Tý",
  // 3,
  "Quý Sửu",
  // 3,
  "Giáp Dần",
  // 2,
  "Ất Mão",
  // 2,
  "Bính Thìn",
  // 5,
  "Đinh Tị",
  // 5,
  "Mậu Ngọ",
  // 6,
  "Kỷ Mùi",
  // 6,
  "Canh Thân",
  // 3,
  "Tân Dậu",
  // 3,
  "Nhâm Tuất",
  // 2,
  "Quý Hợi"
  // 2,
];
const LTHG_HH = [
  4,
  4,
  6,
  6,
  3,
  3,
  5,
  5,
  4,
  4,
  6,
  6,
  2,
  2,
  5,
  5,
  4,
  4,
  3,
  3,
  2,
  2,
  5,
  5,
  6,
  6,
  3,
  3,
  2,
  2,
  4,
  4,
  6,
  6,
  3,
  3,
  5,
  5,
  4,
  4,
  6,
  6,
  2,
  2,
  5,
  5,
  4,
  4,
  3,
  3,
  2,
  2,
  5,
  5,
  6,
  6,
  3,
  3,
  2,
  2
];
const CAN = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
const CAN_HH = [4, 4, 2, 2, 3, 3, 6, 6, 5, 5];
const CAN_AD = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
const CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tị", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
const CHI_AD = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
const CHI_CAN = {
  0: [3],
  1: [9, 3, 1],
  2: [4, 6, 8],
  3: [5],
  4: [8, 5, 3],
  5: [6, 8, 0],
  6: [7, 9],
  7: [9, 7, 5],
  8: [0, 2, 8],
  9: [1],
  10: [8, 1, 7],
  11: [2, 4]
};
const xtngl = {
  0: {
    x: 6,
    t: [4, 8],
    n: 1,
    g: [11, 1],
    l: 7
  },
  1: {
    x: 7,
    t: [5, 9],
    n: 0,
    g: [0, 2],
    l: 6
  },
  2: {
    x: 8,
    t: [6, 10],
    n: 11,
    g: [1, 3],
    l: 5
  },
  3: {
    x: 9,
    t: [7, 11],
    n: 10,
    g: [2, 4],
    l: 4
  },
  4: {
    x: 10,
    t: [8, 0],
    n: 9,
    g: [3, 5],
    l: 3
  },
  5: {
    x: 11,
    t: [9, 1],
    n: 8,
    g: [4, 6],
    l: 2
  },
  6: {
    x: 0,
    t: [10, 2],
    n: 7,
    g: [5, 7],
    l: 1
  },
  7: {
    x: 1,
    t: [11, 3],
    n: 6,
    g: [6, 8],
    l: 0
  },
  8: {
    x: 2,
    t: [0, 4],
    n: 5,
    g: [7, 9],
    l: 11
  },
  9: {
    x: 3,
    t: [1, 5],
    n: 4,
    g: [8, 10],
    l: 10
  },
  10: {
    x: 4,
    t: [2, 6],
    n: 3,
    g: [9, 11],
    l: 9
  },
  11: {
    x: 5,
    t: [3, 7],
    n: 2,
    g: [10, 0],
    l: 8
  }
};
const AREA_NAME = ["MỆNH", "BÀO", "PHỐI", "TỬ", "TÀI", "TẬT", "DI", "NÔ", "QUAN", "ĐIỀN", "PHÚC", "PHỤ"];
const SKB = {
  5: "Mệnh Cục tì hòa",
  3: "Cục sinh mệnh",
  4: "Mệnh sinh Cục",
  6: "Mệnh khắc cục",
  7: "Cục khắc mệnh"
};
const ADTN = ["Âm dương nghịch lý", "Âm dương thuận lý"];
const HH = {
  2: "Thủy",
  3: "Mộc",
  4: "Kim",
  5: "Thổ",
  6: "Hỏa"
};
const HH_THAP = {
  2: {
    2: [8, 9],
    3: [6, 7],
    4: [4, 5],
    6: [2, 3],
    5: [0, 1]
  },
  3: {
    3: [8, 9],
    6: [6, 7],
    2: [4, 5],
    5: [2, 3],
    4: [0, 1]
  },
  4: {
    4: [8, 9],
    2: [6, 7],
    5: [4, 5],
    3: [2, 3],
    6: [0, 1]
  },
  5: {
    5: [8, 9],
    4: [6, 7],
    6: [4, 5],
    2: [2, 3],
    3: [0, 1]
  },
  6: {
    6: [8, 9],
    5: [6, 7],
    3: [4, 5],
    4: [2, 3],
    2: [0, 1]
  }
};
const SM = [
  {
    name: "Tử Vi",
    id: 1,
    hh: 5,
    isht: 1,
    sht: "Tử",
    ad: -1,
    grp: 1,
    type: "Quý",
    lvl: { 6: "M", 7: "M", 3: "M", 9: "M", 5: "V", 11: "V", 2: "Đ", 8: "Đ" },
    nn: [1, 0]
  },
  {
    name: "Thiên Cơ",
    id: 2,
    hh: 3,
    isht: 1,
    sht: "Cơ",
    ad: -1,
    grp: 1,
    type: "Thọ,Phúc",
    lvl: {
      5: "M",
      11: "M",
      4: "M",
      10: "M",
      6: "V",
      9: "V",
      1: "Đ",
      7: "Đ",
      2: "Đ",
      8: "Đ",
      3: "H",
      12: "H"
    },
    nn: [0, 1]
  },
  {
    name: "Thái Dương",
    id: 3,
    hh: 6,
    isht: 1,
    sht: "Nhật",
    ad: 1,
    grp: 1,
    type: "Quý",
    htg: "Mắt trái",
    lvl: {
      6: "M",
      7: "M",
      3: "M",
      4: "M",
      5: "M",
      2: "Đ",
      8: "Đ",
      9: "H",
      10: "H",
      11: "H",
      12: "H",
      1: "H"
    },
    nn: [1, 1]
  },
  {
    name: "Vũ Khúc",
    id: 4,
    hh: 4,
    isht: 1,
    sht: "Vũ",
    ad: -1,
    grp: 1,
    type: "Tài",
    htg: "Vú trái/Nốt ruồi",
    lvl: {
      5: "M",
      11: "M",
      2: "M",
      8: "M",
      3: "V",
      9: "V",
      1: "V",
      7: "V",
      4: "Đ",
      10: "Đ",
      6: "H",
      12: "H"
    },
    nn: [0, 0],
    good: [5, 11, 2, 8],
    bad: [6, 12, 4],
    good_pos: [4, 9]
  },
  {
    name: "Thiên Đồng",
    id: 5,
    hh: 2,
    isht: 1,
    sht: "Đồng",
    ad: 1,
    grp: 1,
    type: "Thọ,Phúc",
    htg: "Bộ máy tiêu hóa",
    lvl: {
      3: "M",
      9: "M",
      1: "V",
      4: "Đ",
      6: "Đ",
      12: "Đ",
      7: "H",
      10: "H",
      5: "H",
      11: "H",
      2: "H",
      8: "H"
    },
    nn: [1, 1],
    bad: [2, 8, 7],
    good_pos: [1, 3]
  },
  {
    name: "Liêm Trinh",
    id: 6,
    hh: 6,
    isht: 1,
    sht: "Liêm",
    ad: -1,
    grp: 1,
    type: "Hình",
    lvl: {
      5: "M",
      11: "M",
      1: "V",
      7: "V",
      3: "V",
      9: "V",
      2: "Đ",
      8: "Đ",
      6: "H",
      12: "H",
      4: "H",
      10: "H"
    },
    nn: [0, 0]
  },
  {
    name: "Thiên Phủ",
    id: 7,
    hh: 5,
    isht: 1,
    sht: "Phủ",
    ad: 1,
    grp: 2,
    type: "Tài",
    lvl: {
      3: "M",
      9: "M",
      1: "M",
      7: "M",
      5: "V",
      11: "V",
      6: "Đ",
      12: "Đ",
      8: "Đ",
      4: "B",
      10: "B",
      2: "B"
    },
    nn: [1, 1]
  },
  {
    name: "Thái Âm",
    id: 8,
    hh: 2,
    isht: 1,
    sht: "Nguyệt",
    ad: -1,
    grp: 2,
    type: "Tài",
    htg: "Mắt phải",
    lvl: {
      10: "M",
      11: "M",
      12: "M",
      9: "V",
      1: "V",
      2: "Đ",
      8: "Đ",
      3: "H",
      4: "H",
      5: "H",
      6: "H",
      7: "H"
    },
    nn: [0, 0]
  },
  {
    name: "Tham Lang",
    id: 9,
    hh: 3,
    isht: 1,
    sht: "Tham",
    ad: 1,
    grp: 2,
    type: "Dâm",
    htg: "Nách/Vết bớt",
    lvl: {
      2: "M",
      8: "M",
      5: "V",
      11: "V",
      3: "Đ",
      9: "Đ",
      6: "H",
      12: "H",
      1: "H",
      7: "H",
      4: "H",
      10: "H"
    },
    nn: [0, 1]
  },
  {
    name: "Cự Môn",
    id: 10,
    hh: 2,
    isht: 1,
    sht: "Cự",
    ad: -1,
    grp: 2,
    type: "Ám",
    htg: "Mồm/Nhân trung",
    lvl: {
      4: "M",
      10: "M",
      1: "V",
      7: "V",
      3: "V",
      9: "Đ",
      12: "Đ",
      5: "H",
      11: "H",
      2: "H",
      8: "H",
      6: "H"
    },
    nn: [0, 0]
  },
  {
    name: "Thiên Tướng",
    id: 11,
    hh: 2,
    isht: 1,
    sht: "Tướng",
    ad: 1,
    grp: 2,
    type: "Quyền",
    htg: "Mặt",
    lvl: {
      3: "M",
      9: "M",
      5: "V",
      11: "V",
      1: "V",
      7: "V",
      2: "Đ",
      8: "Đ",
      6: "Đ",
      12: "Đ",
      4: "H",
      10: "H"
    },
    nn: [1, 1]
  },
  {
    name: "Thiên Lương",
    id: 12,
    hh: 5,
    isht: 1,
    sht: "Lương",
    ad: 1,
    grp: 2,
    type: "Thọ,Phúc",
    lvl: {
      7: "M",
      5: "M",
      11: "M",
      1: "V",
      4: "V",
      3: "V",
      9: "V",
      2: "Đ",
      8: "Đ",
      10: "H",
      6: "H",
      12: "H"
    },
    nn: [0, 1],
    good: [1, 7, 4, 5, 2, 8],
    bad: [9, 6, 12, 10],
    good_pos: [1, 13, 3, 6]
  },
  {
    name: "Thất Sát",
    id: 13,
    hh: 4,
    isht: 1,
    sht: "Sát",
    ad: 1,
    grp: 2,
    type: "Quyền",
    lvl: {
      3: "M",
      9: "M",
      1: "M",
      7: "M",
      6: "V",
      12: "V",
      2: "Đ",
      8: "Đ",
      4: "H",
      10: "H",
      5: "H",
      11: "H"
    },
    nn: [1, 1],
    good: [3, 9],
    good_pos: [1, 3]
  },
  {
    name: "Phá Quân",
    id: 14,
    hh: 2,
    isht: 1,
    sht: "Phá",
    ad: -1,
    grp: 2,
    type: "Quyền",
    lvl: {
      1: "M",
      7: "M",
      2: "V",
      8: "V",
      5: "Đ",
      11: "Đ",
      4: "H",
      10: "H",
      3: "H",
      9: "H",
      6: "H",
      12: "H"
    },
    nn: [0, 0]
  },
  {
    name: "Thiên Không",
    id: 15,
    hh: 6,
    isht: 1,
    sht: "Th.Không",
    ad: 0,
    ans: 1,
    sort: 10,
    type: "Hung",
    typ: 2,
    zone: 1
  },
  {
    name: "Thái Tuế",
    id: 16,
    hh: 6,
    isht: 1,
    sht: "Tuế",
    ad: 0,
    ans: 1,
    sort: 101,
    cir: "vtt",
    cirTp: 2,
    type: "Hình",
    typ: 1,
    zone: 3
  },
  {
    name: "Thiếu Dương",
    id: 17,
    hh: 6,
    isht: 1,
    sht: "Dương",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 2,
    type: "Phúc",
    typ: 1,
    zone: 3
  },
  {
    name: "Tang Môn",
    id: 18,
    hh: 3,
    isht: 1,
    sht: "Tang",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 3,
    grp: 5,
    type: "Bại",
    typ: 2,
    zone: 3,
    lvl: {
      "3": "Đ",
      "4": "Đ",
      "9": "Đ",
      "10": "Đ"
    }
  },
  {
    name: "Thiếu Âm",
    id: 19,
    hh: 2,
    isht: 1,
    sht: "Âm",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 4,
    type: "Phúc",
    typ: 1,
    zone: 3
  },
  {
    name: "Quan Phù",
    id: 20,
    hh: 6,
    isht: 1,
    sht: "Phù",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 1,
    typ: 2,
    zone: 3
  },
  {
    name: "Tử Phù",
    id: 21,
    hh: 6,
    isht: 1,
    sht: "Tử.P",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 2,
    typ: 1,
    zone: 3
  },
  {
    name: "Tuế Phá",
    id: 22,
    hh: 6,
    isht: 1,
    sht: "Tuế.P",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 3,
    typ: 2,
    zone: 3,
    htg: "Răng"
  },
  {
    name: "Long Đức",
    id: 23,
    hh: 2,
    isht: 1,
    sht: "Long.Đ",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 4,
    typ: 1,
    zone: 3
  },
  {
    name: "Bạch Hổ",
    id: 24,
    hh: 4,
    isht: 1,
    sht: "Hổ",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 1,
    grp: 5,
    type: "Bại",
    typ: 2,
    zone: 3,
    htg: "Xương, máu",
    lvl: {
      "3": "Đ",
      "4": "Đ",
      "9": "Đ",
      "10": "Đ"
    }
  },
  {
    name: "Phúc Đức",
    id: 25,
    hh: 5,
    isht: 1,
    sht: "P.Đức",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 2,
    typ: 1,
    zone: 3
  },
  {
    name: "Điếu Khách",
    id: 26,
    hh: 6,
    isht: 1,
    sht: "Điếu",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 3,
    typ: 2,
    zone: 3
  },
  {
    name: "Trực Phù",
    id: 27,
    hh: 6,
    isht: 1,
    sht: "Trực.P",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 4,
    typ: 2,
    zone: 3
  },
  {
    name: "Lộc Tồn",
    id: 28,
    hh: 5,
    isht: 1,
    sht: "Lộc.T",
    iptt: true,
    ad: 1,
    ans: 0,
    sort: 10,
    type: "Tài",
    typ: 1,
    zone: 1
  },
  {
    name: "Bác Sĩ",
    id: 29,
    hh: 2,
    isht: 1,
    sht: "Bác.S",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 1,
    typ: 1,
    zone: 3
  },
  {
    name: "Lực Sĩ",
    id: 30,
    hh: 6,
    isht: 1,
    sht: "Lực",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 2,
    typ: 1,
    zone: 3
  },
  {
    name: "Thanh Long",
    id: 31,
    hh: 2,
    isht: 1,
    sht: "T.Long",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 3,
    type: "Hỉ",
    typ: 1,
    zone: 3
  },
  {
    name: "Tiểu Hao",
    id: 32,
    hh: 6,
    isht: 1,
    sht: "T.Hao",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 4,
    grp: 5,
    type: "Bại",
    typ: 2,
    zone: 3,
    lvl: {
      "3": "Đ",
      "4": "Đ",
      "9": "Đ",
      "10": "Đ"
    }
  },
  {
    name: "Tướng Quân",
    id: 33,
    hh: 3,
    isht: 1,
    sht: "Tướng",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 1,
    type: "Quyền",
    typ: 2,
    zone: 3
  },
  {
    name: "Tấu Thư",
    id: 34,
    hh: 4,
    isht: 1,
    sht: "Tấu",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 2,
    type: "Quý",
    typ: 1,
    zone: 3
  },
  {
    name: "Phi Liêm",
    id: 35,
    hh: 6,
    isht: 1,
    sht: "Phi",
    ans: 1,
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 3,
    typ: 2,
    zone: 3,
    htg: "Tóc"
  },
  {
    name: "Hỉ Thần",
    id: 36,
    hh: 6,
    isht: 1,
    sht: "Hỉ.T",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 4,
    type: "Hỉ",
    typ: 1,
    zone: 3,
    htg: "Hậu môn"
  },
  {
    name: "Bệnh Phù",
    id: 37,
    hh: 5,
    isht: 1,
    sht: "Bệnh.P",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 1,
    typ: 2,
    zone: 3
  },
  {
    name: "Đại Hao",
    id: 38,
    hh: 6,
    isht: 1,
    sht: "Đ.Hao",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 2,
    grp: 5,
    type: "Bại",
    typ: 2,
    zone: 3,
    lvl: {
      "3": "Đ",
      "4": "Đ",
      "9": "Đ",
      "10": "Đ"
    }
  },
  {
    name: "Phục Binh",
    id: 39,
    hh: 6,
    isht: 1,
    sht: "Phục",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 3,
    typ: 2,
    zone: 3
  },
  {
    name: "Quan Phủ",
    id: 40,
    hh: 6,
    isht: 1,
    sht: "Q.Phủ",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 4,
    typ: 2,
    zone: 3
  },
  {
    name: "Trường Sinh",
    id: 41,
    hh: 2,
    isht: 1,
    sht: "Sinh",
    ad: 0,
    cir: "vts",
    cirTp: 1,
    type: "Thọ",
    typ: 1,
    zone: 0
  },
  {
    name: "Mộc Dục",
    id: 42,
    hh: 2,
    isht: 1,
    sht: "Mộc",
    ad: 0,
    cir: "vts",
    cirTp: 2,
    type: "Dâm",
    typ: 1,
    zone: 0
  },
  {
    name: "Quan Đới",
    id: 43,
    hh: 2,
    // 4
    isht: 1,
    sht: "Đới",
    ad: 0,
    cir: "vts",
    cirTp: 3,
    type: "Quyền",
    typ: 1,
    zone: 0
  },
  {
    name: "Lâm Quan",
    id: 44,
    hh: 2,
    // 4
    isht: 1,
    sht: "Lâm",
    ad: 0,
    cir: "vts",
    cirTp: 4,
    typ: 1,
    zone: 0,
    htg: "Cổ"
  },
  {
    name: "Đế Vượng",
    id: 45,
    hh: 2,
    // 4
    isht: 1,
    sht: "Vượng",
    ad: 0,
    cir: "vts",
    cirTp: 1,
    type: "Thọ",
    typ: 1,
    zone: 0,
    htg: "Lưng"
  },
  {
    name: "Suy",
    id: 46,
    hh: 2,
    isht: 1,
    sht: "Suy",
    ad: 0,
    cir: "vts",
    cirTp: 2,
    type: "Bại",
    typ: 1,
    zone: 0
  },
  {
    name: "Bệnh",
    id: 47,
    hh: 2,
    // 6
    isht: 1,
    sht: "Bệnh",
    ad: 0,
    cir: "vts",
    cirTp: 3,
    type: "Bại",
    typ: 1,
    zone: 0
  },
  {
    name: "Tử",
    id: 48,
    hh: 2,
    isht: 1,
    sht: "Tử",
    ad: 0,
    cir: "vts",
    cirTp: 4,
    type: "Bại",
    typ: 1,
    zone: 0
  },
  {
    name: "Mộ",
    id: 49,
    hh: 2,
    // 5
    isht: 1,
    sht: "Mộ",
    ad: 0,
    cir: "vts",
    cirTp: 1,
    type: "Bại",
    typ: 1,
    zone: 0,
    htg: "Nhọt, u bướu"
  },
  {
    name: "Tuyệt",
    id: 50,
    hh: 2,
    // 5
    isht: 1,
    sht: "Tuyệt",
    ad: 0,
    cir: "vts",
    cirTp: 2,
    type: "Bại",
    typ: 1,
    zone: 0
  },
  {
    name: "Thai",
    id: 51,
    hh: 2,
    // 5
    isht: 1,
    sht: "Thai",
    ad: 0,
    cir: "vts",
    cirTp: 3,
    type: "Dâm",
    typ: 1,
    zone: 0,
    htg: "Rốn, chỗ kín phụ nữ"
  },
  {
    name: "Dưỡng",
    id: 52,
    hh: 2,
    // 3
    isht: 1,
    sht: "Dưỡng",
    ad: 0,
    cir: "vts",
    cirTp: 4,
    typ: 1,
    zone: 0
  },
  {
    name: "Địa Không",
    id: 53,
    hh: 6,
    isht: 1,
    sht: "Không",
    iptt: true,
    ans: 2,
    sort: 1,
    grp: 4,
    ad: 1,
    type: "Hung",
    typ: 2,
    zone: 1,
    lvl: {
      "1": "H",
      "2": "H",
      "3": "Đ",
      "4": "H",
      "5": "H",
      "6": "Đ",
      "7": "H",
      "8": "H",
      "9": "Đ",
      "10": "H",
      "11": "H",
      "12": "Đ"
    }
  },
  {
    name: "Địa Kiếp",
    id: 54,
    hh: 6,
    isht: 1,
    sht: "Kiếp",
    iptt: true,
    ans: 2,
    sort: 1,
    grp: 4,
    ad: -1,
    type: "Hung",
    typ: 2,
    zone: 1,
    lvl: {
      "1": "H",
      "2": "H",
      "3": "Đ",
      "4": "H",
      "5": "H",
      "6": "Đ",
      "7": "H",
      "8": "H",
      "9": "Đ",
      "10": "H",
      "11": "H",
      "12": "Đ"
    }
  },
  {
    name: "Hỏa Tinh",
    id: 55,
    hh: 6,
    isht: 1,
    sht: "Hỏa",
    iptt: true,
    ans: 1,
    sort: 1,
    grp: 4,
    ad: 1,
    type: "Hung",
    typ: 2,
    zone: 1,
    lvl: {
      "1": "H",
      "2": "H",
      "3": "Đ",
      "4": "Đ",
      "5": "Đ",
      "6": "Đ",
      "7": "Đ",
      "8": "H",
      "9": "H",
      "10": "H",
      "11": "H",
      "12": "H"
    }
  },
  {
    name: "Linh Tinh",
    id: 56,
    hh: 6,
    isht: 1,
    sht: "Linh",
    iptt: true,
    ans: 1,
    sort: 1,
    grp: 4,
    ad: -1,
    type: "Hung",
    typ: 2,
    zone: 1,
    lvl: {
      "1": "H",
      "2": "H",
      "3": "Đ",
      "4": "Đ",
      "5": "Đ",
      "6": "Đ",
      "7": "Đ",
      "8": "H",
      "9": "H",
      "10": "H",
      "11": "H",
      "12": "H"
    }
  },
  {
    name: "Kình Dương",
    id: 57,
    hh: 4,
    isht: 1,
    sht: "Kình",
    iptt: true,
    ans: 0,
    sort: 1,
    grp: 4,
    ad: 1,
    type: "Hung",
    typ: 2,
    zone: 1,
    htg: "Dương vật",
    lvl: {
      "1": "H",
      "2": "Đ",
      "3": "H",
      "4": "H",
      "5": "Đ",
      "6": "H",
      "7": "H",
      "8": "Đ",
      "9": "H",
      "10": "H",
      "11": "Đ",
      "12": "H"
    }
  },
  {
    name: "Đà La",
    id: 58,
    hh: 4,
    isht: 1,
    sht: "Đà",
    iptt: true,
    ans: 0,
    sort: 1,
    grp: 4,
    ad: -1,
    type: "Hung",
    typ: 2,
    zone: 1,
    htg: "Chân tay",
    lvl: {
      "1": "H",
      "2": "Đ",
      "3": "H",
      "4": "H",
      "5": "Đ",
      "6": "H",
      "7": "H",
      "8": "Đ",
      "9": "H",
      "10": "H",
      "11": "Đ",
      "12": "H"
    }
  },
  {
    name: "Thiên Khôi",
    id: 59,
    hh: 6,
    isht: 1,
    sht: "Khôi",
    iptt: true,
    ans: 0,
    sort: 1,
    grp: 3,
    ad: 1,
    type: "Văn",
    typ: 1,
    zone: 1,
    htg: "Đầu"
  },
  {
    name: "Thiên Việt",
    id: 60,
    hh: 6,
    isht: 1,
    sht: "Việt",
    iptt: true,
    ans: 0,
    sort: 1,
    grp: 3,
    ad: -1,
    type: "Văn",
    typ: 1,
    zone: 1,
    htg: "Hai vai"
  },
  {
    name: "Tả Phụ",
    id: 61,
    hh: 5,
    isht: 1,
    sht: "Tả",
    iptt: true,
    ans: 2,
    sort: 1,
    grp: 3,
    ad: 1,
    type: "Trợ",
    typ: 1,
    zone: 1,
    htg: "Lông mày trái",
    nn: [-1e3, 1]
  },
  {
    name: "Hữu Bật",
    id: 62,
    hh: 2,
    isht: 1,
    sht: "Hữu",
    iptt: true,
    ans: 2,
    sort: 1,
    grp: 3,
    ad: -1,
    type: "Trợ",
    typ: 1,
    zone: 1,
    htg: "Lông mày phải",
    nn: [-1e3, -1]
  },
  {
    name: "Văn Xương",
    id: 63,
    hh: 4,
    isht: 1,
    sht: "Xương",
    iptt: true,
    ans: 2,
    sort: 1,
    grp: 3,
    ad: 1,
    type: "Văn",
    typ: 1,
    zone: 1,
    htg: "Thính giác",
    lvl: {
      "1": "H",
      "2": "Đ",
      "3": "H",
      "4": "H",
      "5": "Đ",
      "6": "Đ",
      "7": "H",
      "8": "Đ",
      "9": "H",
      "10": "H",
      "11": "Đ",
      "12": "Đ"
    },
    nn: [-1e3, 1]
  },
  {
    name: "Văn Khúc",
    id: 64,
    hh: 2,
    isht: 1,
    sht: "Khúc",
    iptt: true,
    ans: 2,
    sort: 1,
    grp: 3,
    ad: -1,
    type: "Văn",
    typ: 1,
    zone: 1,
    htg: "Vú phải",
    lvl: {
      "2": "Đ",
      "5": "Đ",
      "6": "Đ",
      "8": "Đ",
      "11": "Đ",
      "12": "Đ"
    },
    nn: [-1e3, -1]
  },
  {
    name: "Hóa Lộc",
    id: 65,
    hh: 3,
    isht: 1,
    sht: "Lộc",
    iptt: true,
    ans: 0,
    sort: 300,
    grp: 6,
    ad: 0,
    type: "Tài",
    typ: 1,
    zone: 1,
    htg: "Râu",
    colorpt: "#18b248"
  },
  {
    name: "Hóa Quyền",
    id: 66,
    hh: 3,
    isht: 1,
    sht: "Quyền",
    iptt: true,
    ans: 0,
    sort: 300,
    grp: 6,
    ad: 0,
    type: "Quyền",
    typ: 1,
    zone: 1,
    htg: "Gò má",
    notshow: false,
    colorpt: "#982b8b"
  },
  {
    name: "Hóa Khoa",
    id: 67,
    hh: 2,
    isht: 1,
    sht: "Khoa",
    iptt: true,
    ans: 0,
    sort: 300,
    grp: 6,
    ad: 0,
    type: "Văn,Phúc",
    typ: 1,
    zone: 1,
    notshow: false,
    colorpt: "#00c6da"
  },
  {
    name: "Hóa Kị",
    id: 68,
    hh: 2,
    isht: 1,
    sht: "Kị",
    iptt: true,
    ans: 0,
    sort: 300,
    grp: 7,
    ad: 0,
    type: "Ám",
    typ: 2,
    zone: 1,
    htg: "Lưỡi",
    notshow: false,
    colorpt: "#222222",
    lvl: {
      "1": "H",
      "2": "Đ",
      "3": "H",
      "4": "H",
      "5": "Đ",
      "6": "H",
      "7": "H",
      "8": "Đ",
      "9": "H",
      "10": "H",
      "11": "Đ",
      "12": "H"
    }
  },
  {
    name: "Ân Quang",
    id: 69,
    hh: 3,
    isht: 1,
    sht: "Quang",
    sort: 2,
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 1,
    grp: 8
  },
  {
    name: "Thiên Quý",
    id: 70,
    hh: 5,
    isht: 1,
    sht: "Quý",
    sort: 2,
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 1,
    grp: 8
  },
  {
    name: "Tam Thai",
    id: 71,
    hh: 2,
    isht: 1,
    sht: "Thai",
    ans: 2,
    sort: 2,
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 1,
    htg: "Trán",
    grp: 8
  },
  {
    name: "Bát Tọa",
    id: 72,
    hh: 3,
    isht: 1,
    sht: "Tọa",
    ans: 2,
    sort: 2,
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 1,
    htg: "Cằm",
    grp: 8
  },
  {
    name: "Thai Phụ",
    id: 73,
    hh: 4,
    isht: 1,
    sht: "T.Phụ",
    ad: 0,
    type: "Văn",
    typ: 1,
    zone: 2,
    grp: 8
  },
  {
    name: "Phong Cáo",
    id: 74,
    hh: 5,
    isht: 1,
    sht: "Cáo",
    ad: 0,
    type: "Văn",
    typ: 1,
    zone: 2,
    grp: 8
  },
  {
    name: "Quốc Ấn",
    id: 75,
    hh: 5,
    isht: 1,
    sht: "Ấn",
    ad: 0,
    type: "Quyền",
    typ: 1,
    zone: 2
  },
  {
    name: "Đường Phù",
    id: 76,
    hh: 3,
    isht: 1,
    sht: "Đường",
    ad: 0,
    typ: 1,
    zone: 2
  },
  {
    name: "Long Trì",
    id: 77,
    hh: 2,
    isht: 1,
    sht: "Long",
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 2,
    htg: "Mũi",
    grp: 11
  },
  {
    name: "Phượng Các",
    id: 78,
    hh: 3,
    isht: 1,
    sht: "Phượng",
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 2,
    htg: "Tai"
  },
  {
    name: "Hoa Cái",
    id: 79,
    hh: 4,
    isht: 1,
    sort: 120,
    sht: "Cái",
    cir: "vtt2",
    cirTp: 5,
    ans: 1,
    ad: 0,
    typ: 1,
    zone: 2,
    grp: 11
  },
  {
    name: "Thiên Mã",
    id: 80,
    hh: 6,
    isht: 1,
    sht: "Mã",
    ans: 1,
    sort: 4,
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 1,
    htg: "Chân tay",
    lvl: {
      "3": "Đ",
      "6": "Đ"
    }
  },
  {
    name: "Thiên Khốc",
    id: 81,
    hh: 2,
    isht: 1,
    sht: "Khốc",
    ans: 1,
    sort: 4,
    ad: 0,
    grp: 5,
    type: "Bại",
    typ: 2,
    zone: 1,
    lvl: {
      "1": "Đ",
      "2": "Đ",
      "4": "Đ",
      "7": "Đ",
      "8": "Đ",
      "10": "Đ"
    }
  },
  {
    name: "Thiên Hư",
    id: 82,
    hh: 2,
    isht: 1,
    sht: "Hư",
    ans: 1,
    sort: 4,
    ad: 0,
    grp: 5,
    type: "Bại",
    typ: 2,
    zone: 1,
    lvl: {
      "1": "Đ",
      "2": "Đ",
      "4": "Đ",
      "7": "Đ",
      "8": "Đ",
      "10": "Đ"
    }
  },
  {
    name: "Đào Hoa",
    id: 83,
    hh: 3,
    sort: 100,
    ans: 1,
    isht: 1,
    sht: "Đào",
    cir: "vtt2",
    ad: 0,
    type: "Dâm",
    typ: 1,
    zone: 1
  },
  {
    name: "Hồng Loan",
    id: 84,
    hh: 2,
    ans: 1,
    isht: 1,
    sht: "Hồng",
    ad: 0,
    type: "Dâm",
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Hỉ",
    id: 85,
    hh: 2,
    ans: 1,
    isht: 1,
    sht: "Hỉ",
    ad: 0,
    type: "Hỉ",
    typ: 1,
    zone: 2
  },
  {
    name: "Cô Thần",
    id: 86,
    hh: 5,
    ans: 1,
    isht: 1,
    sht: "Cô",
    ad: 0,
    type: "Bại",
    typ: 2,
    zone: 2
  },
  {
    name: "Quả Tú",
    id: 87,
    hh: 5,
    ans: 1,
    isht: 1,
    sht: "Quả",
    ad: 0,
    type: "Bại",
    typ: 2,
    zone: 2
  },
  {
    name: "Thiên Hình",
    id: 88,
    hh: 6,
    isht: 1,
    iptt: true,
    sht: "Hình",
    ans: 2,
    sort: 3,
    ad: 0,
    type: "Hình",
    typ: 2,
    zone: 1,
    htg: "Da hay vết sẹo",
    lvl: {
      "3": "Đ",
      "4": "Đ",
      "9": "Đ",
      "10": "Đ"
    }
  },
  {
    name: "Thiên Diêu",
    id: 89,
    hh: 2,
    isht: 1,
    sht: "Diêu",
    ans: 2,
    sort: 3,
    ad: 0,
    type: "Dâm",
    typ: 2,
    zone: 1,
    htg: "Lông, tóc, bộ ngực",
    lvl: {
      "3": "Đ",
      "4": "Đ",
      "10": "Đ",
      "11": "Đ"
    }
  },
  {
    name: "Thiên Y",
    id: 90,
    hh: 2,
    isht: 1,
    sht: "Y",
    ad: 0,
    typ: 1,
    zone: 2
  },
  {
    name: "Lưu Hà",
    id: 91,
    hh: 2,
    isht: 1,
    sht: "Hà",
    ans: 0,
    ad: 0,
    type: "Hung",
    typ: 2,
    zone: 2
  },
  {
    name: "Kiếp Sát",
    id: 92,
    hh: 6,
    isht: 1,
    sht: "K.Sát",
    cir: "vtt2",
    sort: 120,
    cirTp: 5,
    ans: 1,
    ad: 0,
    type: "Hung",
    typ: 2,
    zone: 2
  },
  {
    name: "Phá Toái",
    id: 93,
    hh: 6,
    isht: 1,
    sht: "Toái",
    ans: 1,
    ad: 0,
    type: "Hung",
    typ: 1,
    zone: 2,
    htg: "Cuống họng"
  },
  {
    name: "Thiên Quan",
    id: 94,
    hh: 6,
    isht: 1,
    sht: "Quan",
    ad: 0,
    ans: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Phúc",
    id: 95,
    hh: 5,
    isht: 1,
    sht: "TPhúc",
    ad: 0,
    ans: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Văn Tinh",
    id: 96,
    hh: 6,
    isht: 1,
    sht: "Văn.T",
    ad: 0,
    type: "Tài",
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Trù",
    id: 97,
    hh: 5,
    isht: 1,
    sht: "TTrù",
    ad: 0,
    ans: 0,
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Đức",
    id: 98,
    hh: 6,
    isht: 1,
    sht: "Th.Đức",
    ad: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Nguyệt Đức",
    id: 99,
    hh: 6,
    isht: 1,
    sht: "Ng.Đức",
    ad: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Giải",
    id: 100,
    hh: 6,
    isht: 1,
    sht: "T.Giải",
    ad: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Địa Giải",
    id: 101,
    hh: 5,
    isht: 1,
    sht: "Đ.Giải",
    ad: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Giải Thần",
    id: 102,
    hh: 3,
    isht: 1,
    sht: "G.Thần",
    ad: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Tài",
    id: 103,
    hh: 5,
    isht: 1,
    sht: "Tài",
    ad: 0,
    type: "Trợ",
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Thọ",
    id: 104,
    hh: 5,
    isht: 1,
    sht: "Thọ",
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 2
  },
  {
    name: "Đẩu Quân",
    id: 105,
    hh: 6,
    isht: 1,
    sht: "Đẩu.Q",
    ad: 0,
    type: "Phúc",
    typ: 2,
    zone: 2
  },
  {
    name: "Thiên Thương",
    id: 106,
    hh: 5,
    isht: 1,
    sht: "Thương",
    ad: 0,
    typ: 2,
    zone: 2
  },
  {
    name: "Thiên Sứ",
    id: 107,
    hh: 2,
    isht: 1,
    sht: "Sứ",
    ad: 0,
    typ: 2,
    zone: 2
  },
  {
    name: "Thiên La",
    id: 108,
    hh: 5,
    isht: 1,
    sht: "La",
    ad: 0,
    typ: 2,
    zone: 2
  },
  {
    name: "Địa Võng",
    id: 109,
    hh: 5,
    isht: 1,
    sht: "Võng",
    ad: 0,
    typ: 2,
    zone: 2
  },
  {
    name: "Tướng Tinh",
    id: 110,
    hh: 5,
    isht: 1,
    sht: "T.Tinh",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 2,
    zone: 3,
    htg: ""
  },
  {
    name: "Phan An",
    id: 111,
    hh: 4,
    isht: 1,
    sht: "P.An",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 3,
    htg: ""
  },
  {
    name: "Tuế Dịch",
    id: 112,
    hh: 6,
    isht: 1,
    sht: "T.Dịch",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 3,
    htg: ""
  },
  {
    name: "Tức Thần",
    id: 113,
    hh: 3,
    isht: 1,
    sht: "T.Thần",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 2,
    zone: 3,
    htg: ""
  },
  {
    name: "Tai Sát",
    id: 114,
    hh: 3,
    isht: 1,
    sht: "Tai.S",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 2,
    zone: 3,
    htg: ""
  },
  {
    name: "Thiên Sát",
    id: 115,
    hh: 3,
    isht: 1,
    sht: "Thiên.S",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 2,
    zone: 3,
    htg: ""
  },
  {
    name: "Chỉ Bối",
    id: 116,
    hh: 3,
    isht: 1,
    sht: "Chỉ.B",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 3,
    htg: ""
  },
  {
    name: "Nguyệt Sát",
    id: 117,
    hh: 3,
    isht: 1,
    sht: "Nguyệt.S",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 2,
    zone: 3,
    htg: ""
  },
  {
    name: "Vong Thần",
    id: 118,
    hh: 3,
    isht: 1,
    sht: "Vong.T",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 2,
    zone: 3,
    htg: ""
  },
  {
    name: "Niên Giải",
    id: 119,
    hh: 2,
    isht: 1,
    sht: "Niên.G",
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 2,
    htg: ""
  },
  {
    name: "Nguyệt Giải",
    id: 120,
    hh: 3,
    isht: 1,
    sht: "Nguyệt.G",
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 2,
    htg: ""
  },
  {
    name: "Thiên Vu",
    id: 121,
    hh: 3,
    isht: 1,
    sht: "Thiên.V",
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 3,
    htg: ""
  },
  {
    name: "Thiên Nguyệt",
    id: 122,
    hh: 3,
    isht: 1,
    sht: "Thiên.N",
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 2,
    htg: ""
  },
  {
    name: "Âm Sát",
    id: 123,
    hh: 2,
    isht: 1,
    sht: "Âm.S",
    sort: 120,
    ad: 0,
    type: "Hung",
    typ: 2,
    zone: 2,
    htg: ""
  },
  {
    name: "Dương Sát",
    id: 124,
    hh: 2,
    isht: 1,
    sht: "Dương.S",
    sort: 120,
    ad: 0,
    type: "Hung",
    typ: 2,
    zone: 2,
    htg: ""
  },
  {
    name: "Âm Đức",
    id: 125,
    hh: 5,
    isht: 1,
    sht: "Âm.Đ",
    sort: 120,
    ad: 0,
    type: "Hung",
    typ: 1,
    zone: 2,
    htg: ""
  },
  {
    name: "Dương Đức",
    id: 126,
    hh: 5,
    isht: 1,
    sht: "Dương.Đức",
    sort: 120,
    ad: 0,
    type: "Hung",
    typ: 1,
    zone: 2,
    htg: ""
  }
];
const TUHOAID = [64, 65, 66, 67];
const STAR_RULE = [87, 88];
const STAR_SIGN = [68, 69, 70, 71, 72, 73, 93, 94];
const STAR_LOCMA = [27, 79];
const ASSASSIN6 = [52, 53, 54, 55, 56, 57];
const BUFF6 = [58, 59, 60, 61, 62, 63];
const FAILURE6 = [17, 23, 31, 37, 80, 81];
const CR_TS = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
const STARSTRONG = [...TUHOAID, ...STAR_RULE, ...STAR_LOCMA, ...ASSASSIN6, ...BUFF6];
const CAN_HOA = {
  4: [5, 13, 3, 2],
  // Giap 'Liêm Trinh', 'Phá Quân', 'Vũ Khúc', 'Thái Dương'
  5: [1, 11, 0, 7],
  // At 'Thiên Cơ', 'Thiên Lương', 'Tử Vi', 'Thái Âm'
  6: [4, 1, 62, 5],
  // Binh 'Thiên Đồng', 'Thiên Cơ', 'Văn Xương', 'Liêm Trinh'
  7: [7, 4, 1, 9],
  // Dinh 'Thái Âm', 'Thiên Đồng', 'Thiên Cơ', 'Cự Môn'
  8: [8, 7, 61, 1],
  // Mau 'Tham Lang', 'Thái Âm', 'Hữu Bật', 'Thiên Cơ'
  9: [3, 8, 11, 63],
  // Ky 'Vũ Khúc', 'Tham Lang', 'Thiên Lương', 'Văn Khúc'
  0: [2, 3, 4, 7],
  // Canh 'Thái Dương', 'Vũ Khúc',  'Thiên Đồng','Thái Âm',
  1: [9, 2, 63, 62],
  // Tan 'Cự Môn', 'Thái Dương', 'Văn Khúc', 'Văn Xương'
  2: [11, 0, 60, 3],
  // Nham 'Thiên Lương', 'Tử Vi', 'Tả Phụ', 'Vũ Khúc'
  3: [13, 9, 7, 8]
  // Quy 'Phá Quân', 'Cự Môn', 'Thái Âm', 'Tham Lang'
};
const GETHOA = (tcan = 1) => {
  let myCan = {};
  myCan = { ...CAN_HOA };
  if (tcan === 0) {
    myCan[0] = [2, 3, 7, 4];
  }
  if (tcan === 2) {
    myCan[0] = [2, 3, 6, 4];
    myCan[8] = [8, 7, 2, 1];
    myCan[2] = [11, 0, 6, 3];
  }
  if (tcan === 3) {
    myCan[0] = [2, 3, 4, 10];
  }
  if (tcan === 4) {
    myCan[0] = [2, 3, 8, 4];
  }
  return myCan;
};
function findAllPositionsOfValue(obj, value) {
  const positions = [];
  for (const key of Object.keys(obj)) {
    obj[Number(key)].forEach((item, index) => {
      if (item === value) {
        positions.push({ parentKey: key, key: index });
      }
    });
  }
  return positions;
}
function getAllUniqueValues(obj) {
  const allValues = Object.values(obj).flat();
  const uniqueValues = [...new Set(allValues)];
  return uniqueValues;
}
const StarUseHoa = (objHoa) => {
  return getAllUniqueValues(objHoa);
};
const StarToHoaCan = (objHoa) => {
  const arrObj = {};
  const listStar = getAllUniqueValues(objHoa);
  listStar.forEach((idSTAR) => {
    arrObj[Number(idSTAR)] = [[], [], [], []];
    const positions = findAllPositionsOfValue(objHoa, idSTAR);
    positions.forEach((item) => {
      arrObj[Number(idSTAR)][Number(item.key)].push(Number(item.parentKey));
    });
  });
  return arrObj;
};
const CAN_TSTB = [
  [7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6],
  // Canh ts
  [0, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  // Tân ts
  [4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3],
  // Nhâm ts
  [3, 2, 1, 0, 11, 10, 9, 8, 7, 6, 5, 4],
  // Quý ts
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0],
  // Giáp ts
  [6, 5, 4, 3, 2, 1, 0, 11, 10, 9, 8, 7],
  // Ất ts
  [10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  // Bính ts
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 11, 10],
  // Đinh ts
  [10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  // Mậu ts
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 11, 10]
  // Kỷ ts
];
function buildDateInfo(lnInfo) {
  const data = {
    sn: {
      y: lnInfo.sun.year(),
      m: lnInfo.sun.month() + 1,
      d: lnInfo.sun.date(),
      h: lnInfo.sun.hour(),
      i: lnInfo.sun.minute()
    },
    ln: { y: lnInfo.y, m: lnInfo.m, d: lnInfo.d, h: lnInfo.h, mt: lnInfo.stcc.ml, yt: lnInfo.stcc.yl },
    bs: {
      y: [CAN.indexOf(lnInfo.ycc[0]), CHI.indexOf(lnInfo.ycc[1]), LTHG.indexOf(lnInfo.ycc.join(" "))],
      m: [CAN.indexOf(lnInfo.mcc[0]), CHI.indexOf(lnInfo.mcc[1]), LTHG.indexOf(lnInfo.mcc.join(" "))],
      d: [CAN.indexOf(lnInfo.dcc[0]), CHI.indexOf(lnInfo.dcc[1]), LTHG.indexOf(lnInfo.dcc.join(" "))],
      h: [
        CAN.indexOf(lnInfo.h12cc[lnInfo.h][0]),
        CHI.indexOf(lnInfo.h12cc[lnInfo.h][1]),
        LTHG.indexOf(lnInfo.h12cc[lnInfo.h].join(" "))
      ]
    },
    tk: {
      y: [CAN.indexOf(lnInfo.stcc.ycc[0]), CHI.indexOf(lnInfo.stcc.ycc[1]), LTHG.indexOf(lnInfo.stcc.ycc.join(" "))],
      m: [CAN.indexOf(lnInfo.stcc.mcc[0]), CHI.indexOf(lnInfo.stcc.mcc[1]), LTHG.indexOf(lnInfo.stcc.mcc.join(" "))],
      d: [CAN.indexOf(lnInfo.dcc[0]), CHI.indexOf(lnInfo.dcc[1]), LTHG.indexOf(lnInfo.dcc.join(" "))],
      h: [
        CAN.indexOf(lnInfo.h12cc[lnInfo.h][0]),
        CHI.indexOf(lnInfo.h12cc[lnInfo.h][1]),
        LTHG.indexOf(lnInfo.h12cc[lnInfo.h].join(" "))
      ]
    },
    m12: parse12ToIdx(lnInfo.m12cc),
    h12: parse12ToIdx(lnInfo.h12cc),
    m12k: parse12ToIdx(lnInfo.stcc.m12cc),
    tki: lnInfo.tk
  };
  return data;
}
function parse12ToIdx(data) {
  const obj12data = [];
  for (let i = 0; i < 12; i += 1) {
    obj12data[i] = [CAN.indexOf(data[i][0]), CHI.indexOf(data[i][1])];
  }
  return obj12data;
}

export { AREA_NAME as A, CHI as C, FAILURE6 as F, GETHOA as G, HH as H, ICHING_NUMBER as I, LTHG_HH as L, SM as S, TKN as T, CAN as a, ADTN as b, SKB as c, HH_THAP as d, CAN_HH as e, CAN_TSTB as f, CAN_AD as g, LTHG as h, TKN_PN as i, CHI_AD as j, CAN_HOA as k, buildDateInfo as l, StarToHoaCan as m, StarUseHoa as n, STARSTRONG as o, STAR_SIGN as p, CR_TS as q, CHI_CAN as r, ICHING as s, xtngl as x };
