import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from '../sfYYkhPc/4CUkstck.js';
import 'kleur/colors';
import { $ as $$MarkdownLayout } from '../sfYYkhPc/f8ufx_ZI.js';
export { renderers } from '../renderers.mjs';

const html = "<p><em>Cập nhật lần cuối</em>: Ngày 15 tháng 3, 2024</p>\n<h2 id=\"điều-khoản-cơ-bản\">Điều Khoản Cơ Bản</h2>\n<h3 id=\"về-chúng-tôi\">Về Chúng Tôi</h3>\n<ul>\n<li>Website này cung cấp các thông tin và kiến thức về huyền học, tâm linh</li>\n<li>Mọi thông tin được cung cấp miễn phí, chỉ mang tính chất tham khảo</li>\n</ul>\n<h3 id=\"quy-định-sử-dụng\">Quy Định Sử Dụng</h3>\n<ol>\n<li>Bạn phải từ 18 tuổi trở lên để sử dụng website</li>\n<li>Không sử dụng thông tin để gây hại cho người khác</li>\n<li>Khi chia sẻ thông tin liên quan tool ghi rõ nguồn từ TinhMenhDo.com</li>\n<li>Chúng tôi không chịu trách nhiệm về việc áp dụng thông tin từ website</li>\n<li>Các thông tin lá mẫu và học thuật được sưu tầm và từ các nguồn công khai</li>\n<li>Một số thông tin học thuật liên quan đến Huyền Minh Group nếu bạn dùng cần lưu ý check lại với các hội viên Huyền Minh Group</li>\n</ol>\n<h3 id=\"bản-quyền-và-chia-sẻ\">Bản Quyền và Chia Sẻ</h3>\n<ul>\n<li>Tinh Mệnh Đồ hỗ trợ xây dựng các tool học thuật</li>\n<li>Bạn được phép sử dụng miễn phí với đieukien ghi rõ nguồn từ TinhMenhDo.com:\n<ul>\n<li>Ghi rõ nguồn “Nguồn: TinhMenhDo.com”</li>\n<li>Kèm đường dẫn về website TinhMenhDo.com</li>\n</ul>\n</li>\n</ul>\n<h2 id=\"liên-hệ\">Liên Hệ</h2>\n<p>Mọi thắc mắc xin liên hệ:</p>\n<ul>\n<li>Email: <a href=\"tinhmenhdo@gmail.com\">TinhMenhDo@gmail.com</a></li>\n</ul>";

				const frontmatter = {"title":"Điều Khoản và Điều Kiện","layout":"~/layouts/MarkdownLayout.astro","readingTime":1};
				const file = "/root/code/tmd_astro/src/pages/terms.md";
				const url = "/terms";
				function rawContent() {
					return "\n_Cập nhật lần cuối_: Ngày 15 tháng 3, 2024\n\n## Điều Khoản Cơ Bản\n\n### Về Chúng Tôi\n\n- Website này cung cấp các thông tin và kiến thức về huyền học, tâm linh\n- Mọi thông tin được cung cấp miễn phí, chỉ mang tính chất tham khảo\n\n### Quy Định Sử Dụng\n\n1. Bạn phải từ 18 tuổi trở lên để sử dụng website\n2. Không sử dụng thông tin để gây hại cho người khác\n3. Khi chia sẻ thông tin liên quan tool ghi rõ nguồn từ TinhMenhDo.com\n4. Chúng tôi không chịu trách nhiệm về việc áp dụng thông tin từ website\n5. Các thông tin lá mẫu và học thuật được sưu tầm và từ các nguồn công khai\n6. Một số thông tin học thuật liên quan đến Huyền Minh Group nếu bạn dùng cần lưu ý check lại với các hội viên Huyền Minh Group\n\n### Bản Quyền và Chia Sẻ\n\n- Tinh Mệnh Đồ hỗ trợ xây dựng các tool học thuật\n- Bạn được phép sử dụng miễn phí với đieukien ghi rõ nguồn từ TinhMenhDo.com:\n  - Ghi rõ nguồn \"Nguồn: TinhMenhDo.com\"\n  - Kèm đường dẫn về website TinhMenhDo.com\n\n## Liên Hệ\n\nMọi thắc mắc xin liên hệ:\n\n- Email: [TinhMenhDo@gmail.com](tinhmenhdo@gmail.com)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"điều-khoản-cơ-bản","text":"Điều Khoản Cơ Bản"},{"depth":3,"slug":"về-chúng-tôi","text":"Về Chúng Tôi"},{"depth":3,"slug":"quy-định-sử-dụng","text":"Quy Định Sử Dụng"},{"depth":3,"slug":"bản-quyền-và-chia-sẻ","text":"Bản Quyền và Chia Sẻ"},{"depth":2,"slug":"liên-hệ","text":"Liên Hệ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
