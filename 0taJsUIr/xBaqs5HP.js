const id="markdown-elements-demo-post.mdx",collection="post",slug="markdown-elements-demo-post",body="\nimport Logo from '~/components/Logo.astro';\nimport { YouTube, Tweet, Vimeo } from 'astro-embed';\n\nTử Vi và Kinh Dịch là hai môn học cổ xưa của phương Đông, đã tồn tại và phát triển qua hàng nghìn năm lịch sử. Những môn học này không chỉ là công cụ bói toán đơn thuần mà còn chứa đựng triết lý nhân sinh sâu sắc của người xưa.\n\n## <a name=\"Headings\"></a>Tổng Quan Về Tử Vi\n\nTử Vi là một môn khoa học cổ xưa nghiên cứu về vận mệnh con người dựa trên thời gian sinh (năm, tháng, ngày, giờ) theo âm lịch. Môn học này sử dụng các sao, cung và các mối quan hệ giữa chúng để luận đoán về cuộc đời một người.\n\n## Các Khái Niệm Cơ Bản Trong Tử Vi\n\nTrong Tử Vi có nhiều khái niệm quan trọng cần nắm vững như Thập Can, Thập Nhị Chi, các cung mệnh, các sao chính tinh và phụ tinh. Mỗi yếu tố đều mang những ý nghĩa riêng và tác động đến vận mệnh con người.\n\n### Thập Can và Thập Nhị Chi\n\nThập Can bao gồm: Giáp, Ất, Bính, Đinh, Mậu, Kỷ, Canh, Tân, Nhâm, Quý\nThập Nhị Chi gồm: Tý, Sửu, Dần, Mão, Thìn, Tỵ, Ngọ, Mùi, Thân, Dậu, Tuất, Hợi\n\n\n## <a name=\"Code\"></a>Ví Dụ Về Cách Tính Mệnh\n\n```python\ndef tinh_menh(nam_sinh, thang_sinh, ngay_sinh, gio_sinh):\n    # Tính can chi năm sinh\n    can = (nam_sinh - 4) % 10\n    chi = (nam_sinh - 4) % 12\n    \n    # Xác định cung mệnh\n    cung_menh = (nam_sinh + thang_sinh + ngay_sinh + gio_sinh) % 8\n    return cung_menh\n```\n\n## Kinh Dịch Và Các Quẻ\n\nKinh Dịch bao gồm 64 quẻ, mỗi quẻ là sự kết hợp của 6 hào âm dương. Mỗi quẻ đều mang những ý nghĩa và lời giải đoán riêng về các khía cạnh của cuộc sống.\n\n![Bát Quái Đồ](https://placehold.co/600x400/000000/FFFFFF/png)\n\n_Bát quái là nền tảng của Kinh Dịch, bao gồm 8 quẻ đơn: Càn, Khảm, Cấn, Chấn, Tốn, Ly, Khôn, Đoài_\n",data={publishDate:new Date(16726176e5),title:"Tìm Hiểu Về Tử Vi và Kinh Dịch",excerpt:"Khám phá những kiến thức cơ bản về Tử Vi và Kinh Dịch, hai môn học huyền bí trong văn hóa phương Đông.",tags:["tử vi","kinh dịch","văn hóa á đông"]},_internal={type:"content",filePath:"/root/code/tmd_astro/src/content/post/markdown-elements-demo-post.mdx",rawData:void 0};export{_internal,body,collection,data,id,slug};