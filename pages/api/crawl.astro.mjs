import * as cheerio from 'cheerio';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const { url } = await request.json();
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        Connection: "keep-alive",
        "Upgrade-Insecure-Requests": "1"
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    const $ = cheerio.load(html);
    console.log("Received HTML length:", html.length);
    console.log("Contains AA rating:", html.includes("Rodden Rating AA"));
    if (!html.includes("Rodden Rating AA")) {
      return new Response(JSON.stringify({ error: "Không tìm thấy Rating AA" }), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const basicInfo = {
      name: $('td:contains("Birthname") + td').text().trim() || $('td:contains("Name") + td').text().trim(),
      birthDate: $('td:contains("born on") + td').text().trim(),
      birthPlace: $('td:contains("Place") + td').text().trim(),
      biography: $(".biography p").text().trim()
      // Thử lấy tiểu sử trực tiếp từ trang
    };
    console.log("Crawled data:", basicInfo);
    return new Response(JSON.stringify(basicInfo), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Crawl error:", error);
    return new Response(
      JSON.stringify({
        error: "Lỗi khi crawl dữ liệu",
        details: error.message
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
