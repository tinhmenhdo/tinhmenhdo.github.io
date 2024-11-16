import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute, a as renderComponent, F as Fragment, _ as __astro_tag_component__, n as createVNode } from './4CUkstck.js';
import { $ as $$Image } from './BCzj0W3d.js';
import 'kleur/colors';
import 'clsx';
import { $ as $$Icon } from './CXYkg3Co.js';
import { U as UI } from './B3zkKQ2I.js';

const $$Astro$1 = createAstro("https://tinhmenhdo.github.io");
const $$DListItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DListItem;
  const { dt } = Astro2.props;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${maybeRenderHead()}<h6>${unescapeHTML(dt)}</h6> <div class="dd ml-8">${unescapeHTML(content)}</div>`;
}, "/root/code/tmd_astro/src/components/ui/DListItem.astro", void 0);

const $$Astro = createAstro("https://tinhmenhdo.github.io");
const $$ToggleTheme = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ToggleTheme;
  const {
    label = "Toggle between Dark and Light mode",
    class: className = "text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center",
    iconClass = "w-6 h-6",
    iconName = "tabler:sun"
  } = Astro2.props;
  return renderTemplate`${!(UI.theme.endsWith(":only")) && renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-color-scheme>${renderComponent($$result, "Icon", $$Icon, { "name": iconName, "class": iconClass })}</button>`}`;
}, "/root/code/tmd_astro/src/components/common/ToggleTheme.astro", void 0);

const frontmatter = {
  "publishDate": "2023-07-17T00:00:00.000Z",
  "title": "Giới Thiệu Chi Tiết Về Tử Vi",
  "excerpt": "Tử Vi là một môn huyền học phức tạp, sử dụng bản mệnh của con người để dự đoán các khía cạnh quan trọng trong cuộc sống. Trang này cung cấp tài liệu về các yếu tố cốt lõi trong Tử Vi.",
  "image": "https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1651&q=80",
  "category": "Huyền học",
  "tags": ["tử vi", "phong thủy", "huyền học"],
  "metadata": {
    "canonical": "https://tinhmenhdo.github.io/gioi-thieu-ve-tu-vi"
  },
  "readingTime": 3
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "tổng-quan",
    "text": "Tổng Quan"
  }, {
    "depth": 2,
    "slug": "các-yếu-tố-cơ-bản",
    "text": "Các Yếu Tố Cơ Bản"
  }, {
    "depth": 3,
    "slug": "hệ-thống-sao",
    "text": "Hệ Thống Sao"
  }, {
    "depth": 3,
    "slug": "tử-vi-ứng-dụng",
    "text": "Tử Vi Ứng Dụng"
  }, {
    "depth": 2,
    "slug": "cách-lập-lá-số-tử-vi",
    "text": "Cách Lập Lá Số Tử Vi"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "tổng-quan",
      children: "Tổng Quan"
    }), "\n", createVNode(_components.p, {
      children: "Tử Vi là một hệ thống dự đoán vận mệnh dựa trên ngày tháng năm sinh, can chi và ngũ hành. Môn học này mang lại cho con người một cái nhìn toàn diện về số mệnh và các mối quan hệ quan trọng trong cuộc sống, từ sự nghiệp, gia đình, tài lộc, đến tình duyên."
    }), "\n", createVNode(_components.p, {
      children: "Trang này sẽ giúp bạn khám phá các yếu tố cốt lõi của Tử Vi, bao gồm các cung, sao, và cách lập lá số. Dùng nó như một hướng dẫn để nắm bắt các khía cạnh quan trọng hoặc ứng dụng các kỹ thuật vào việc tìm hiểu số mệnh của bạn."
    }), "\n", createVNode(_components.h2, {
      id: "các-yếu-tố-cơ-bản",
      children: "Các Yếu Tố Cơ Bản"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Tử Vi"
      }), " dựa vào các yếu tố ngũ hành, âm dương và 12 cung trong lá số. Các yếu tố này cung cấp nền tảng để hiểu và phân tích các sao chiếu mệnh cũng như vận hạn của mỗi cá nhân."]
    }), "\n", createVNode(_components.p, {
      children: "Cơ chế của Tử Vi bao gồm các yếu tố sau (tất cả các thuật ngữ đều được giải thích chi tiết trong tài liệu đi kèm):"
    }), "\n", createVNode($$DListItem, {
      dt: "Ngũ hành",
      children: createVNode(_components.p, {
        children: "Ngũ hành là nền tảng của Tử Vi, chia thành năm yếu tố: Kim, Mộc, Thủy, Hỏa, và Thổ. Mỗi hành đều có tính chất riêng,\nảnh hưởng tới từng cung và sao trong lá số."
      })
    }), "\n", createVNode($$DListItem, {
      dt: "12 cung mệnh",
      children: createVNode(_components.p, {
        children: "Lá số Tử Vi bao gồm 12 cung đại diện cho các khía cạnh khác nhau của cuộc sống: Mệnh, Phúc Đức, Phụ Mẫu, Điền Trạch,\nQuan Lộc, Nô Bộc, Thiên Di, Tật Ách, Tài Bạch, Tử Tức, Phu Thê, và Huynh Đệ."
      })
    }), "\n", createVNode($$DListItem, {
      dt: "Các sao chính",
      children: createVNode(_components.p, {
        children: "Các sao như Thái Dương, Thái Âm, Tử Vi, Thiên Tướng, và Liêm Trinh có ảnh hưởng sâu sắc đến vận mệnh. Mỗi sao mang ý\nnghĩa riêng và kết hợp với các cung để tạo thành các dự đoán chính xác."
      })
    }), "\n", createVNode(_components.h3, {
      id: "hệ-thống-sao",
      children: "Hệ Thống Sao"
    }), "\n", createVNode(_components.p, {
      children: "Hệ thống sao trong Tử Vi bao gồm nhiều sao với các tính chất khác nhau, và chúng được phân bố trong 12 cung dựa trên giờ sinh. Cách sắp xếp này sẽ ảnh hưởng đến cuộc đời và vận mệnh của mỗi người."
    }), "\n", createVNode(_components.h3, {
      id: "tử-vi-ứng-dụng",
      children: "Tử Vi Ứng Dụng"
    }), "\n", createVNode(_components.p, {
      children: "Việc hiểu các yếu tố này cho phép bạn tạo ra lá số cá nhân và từ đó dự đoán các khía cạnh quan trọng trong cuộc sống. Từ đó, bạn có thể hiểu rõ hơn về bản thân và cách mà vận mệnh ảnh hưởng đến các mối quan hệ xung quanh bạn."
    }), "\n", createVNode(_components.h2, {
      id: "cách-lập-lá-số-tử-vi",
      children: "Cách Lập Lá Số Tử Vi"
    }), "\n", createVNode(_components.p, {
      children: "Lập lá số Tử Vi yêu cầu một số thông tin cơ bản, bao gồm ngày tháng năm sinh, giờ sinh và giới tính. Bạn có thể sử dụng phần mềm hoặc hướng dẫn chi tiết để lập và phân tích lá số."
    }), "\n", createVNode(_components.p, {
      children: "Bằng cách khám phá những yếu tố này, bạn sẽ hiểu rõ hơn về các chu kỳ vận hạn trong cuộc sống và cách tối ưu hóa các giai đoạn quan trọng trong năm."
    }), "\n", createVNode(_components.p, {
      children: "Đây là một môn học đầy chiều sâu, đòi hỏi sự kiên nhẫn và tinh thần học hỏi. Hy vọng tài liệu này sẽ giúp bạn trên hành trình khám phá bản mệnh và cuộc sống của mình."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/post/gioi-thieu-ve-tu-vi.mdx";
const file = "/root/code/tmd_astro/src/content/post/gioi-thieu-ve-tu-vi.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/root/code/tmd_astro/src/content/post/gioi-thieu-ve-tu-vi.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
