import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useRef, useEffect, useMemo, useState } from 'react';
import { S as SEOInternalLinksReact } from './DvMfp_bk.js';
import { I as ICHING_NUMBER, a as ICHING, b as ICHING_EN, c as ICHING_CN } from './CCSl11Jl.js';
import { G as GEMINI_AI_LINKS } from './Dks9rDWI.js';

const LanguageSwitcher = ({
  currentLang,
  // basePath = 'gieo-que-kinh-dich',
  languageUrls: customUrls
}) => {
  const languageUrls = customUrls || {
    vi: "/gieo-que-kinh-dich",
    zh: "/yijing-zhan-gua",
    en: "/i-ching-divination"
  };
  if (!languageUrls.zh && !languageUrls.en) {
    return null;
  }
  const languages = [
    { code: "vi", label: "Tiếng Việt", flag: "🇻🇳", path: languageUrls.vi },
    { code: "zh", label: "简体中文", flag: "🇨🇳", path: languageUrls.zh },
    { code: "en", label: "English", flag: "🇬🇧", path: languageUrls.en }
  ];
  return /* @__PURE__ */ jsx("div", { className: "fixed top-20 right-2 z-50 flex flex-col gap-2 md:top-24 md:right-2", children: languages.map((lang) => /* @__PURE__ */ jsxs(
    "a",
    {
      href: lang.path,
      className: `group flex items-center gap-2 rounded-lg border px-3 py-2 font-serif text-sm font-medium shadow-sm transition-all hover:scale-105 hover:shadow-md ${currentLang === lang.code ? "border-amber-400 bg-linear-to-r from-amber-100 to-amber-50 text-amber-900" : "border-gray-300 bg-white text-gray-700 hover:border-amber-300 hover:bg-amber-50"}`,
      title: lang.label,
      hrefLang: lang.code,
      children: [
        /* @__PURE__ */ jsx("span", { className: "text-lg transition-transform group-hover:scale-125", children: lang.flag }),
        /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: lang.label })
      ]
    },
    lang.code
  )) });
};

const drawCoin = ({ ctx, x, y, radius, isFaceUp, scale = 1, rotationX = 0, opacity = 1 }) => {
  ctx.save();
  ctx.translate(x, y);
  const scaleY = Math.abs(Math.cos(rotationX));
  ctx.scale(scale, scale * scaleY);
  ctx.globalAlpha = opacity;
  const FRONT_BASE_LIGHT = "#fceabb";
  const FRONT_BASE_DARK = "#d4af37";
  const BACK_BASE_LIGHT = "#c5a065";
  const BACK_BASE_DARK = "#705025";
  const BRONZE_LIGHT = isFaceUp ? FRONT_BASE_LIGHT : BACK_BASE_LIGHT;
  const BRONZE_DARK = isFaceUp ? FRONT_BASE_DARK : BACK_BASE_DARK;
  const TEXT_COLOR = isFaceUp ? "#4a320a" : "#3e2b14";
  const BORDER_COLOR = isFaceUp ? "#5c4014" : "#3e2b14";
  const grad = ctx.createRadialGradient(-radius * 0.3, -radius * 0.3, radius * 0.1, 0, 0, radius);
  grad.addColorStop(0, BRONZE_LIGHT);
  grad.addColorStop(1, BRONZE_DARK);
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.92, 0, Math.PI * 2);
  ctx.strokeStyle = isFaceUp ? "rgba(100, 70, 20, 0.1)" : "rgba(80, 60, 30, 0.2)";
  ctx.lineWidth = 1;
  ctx.stroke();
  const holeSize = radius * 0.22;
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.rect(-holeSize, -holeSize, holeSize * 2, holeSize * 2);
  ctx.fill();
  ctx.globalCompositeOperation = "source-over";
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.strokeStyle = BORDER_COLOR;
  ctx.lineWidth = radius * 0.06;
  ctx.stroke();
  ctx.beginPath();
  ctx.rect(-holeSize, -holeSize, holeSize * 2, holeSize * 2);
  ctx.strokeStyle = BORDER_COLOR;
  ctx.lineWidth = radius * 0.04;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.85, 0, Math.PI * 2);
  ctx.strokeStyle = isFaceUp ? "rgba(92, 64, 20, 0.4)" : "rgba(62, 43, 20, 0.6)";
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = TEXT_COLOR;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const fontSize = radius * 0.38;
  ctx.font = `bold ${fontSize}px "Times New Roman", serif`;
  ctx.shadowColor = "rgba(255, 255, 255, 0.3)";
  ctx.shadowOffsetX = 0.5;
  ctx.shadowOffsetY = 0.5;
  ctx.shadowBlur = 0;
  if (isFaceUp) {
    const offset = radius * 0.55;
    ctx.fillText("星", 0, -offset);
    ctx.fillText("命", 0, offset);
    ctx.fillText("真", offset, 0);
    ctx.fillText("圖", -offset, 0);
  } else {
    const offset = radius * 0.55;
    ctx.fillText("武", 0, -offset);
    ctx.fillText("心", 0, offset);
  }
  ctx.shadowColor = "transparent";
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  const shine = ctx.createLinearGradient(-radius, -radius, radius, radius);
  shine.addColorStop(0, "rgba(255,255,255,0.3)");
  shine.addColorStop(0.4, "transparent");
  shine.addColorStop(0.6, "transparent");
  shine.addColorStop(1, "rgba(0,0,0,0.2)");
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.95, 0, Math.PI * 2);
  ctx.fillStyle = shine;
  ctx.fill();
  ctx.restore();
};

function CoinFace({ type, size = 32, className = "" }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, size, size);
    const radius = size / 2;
    drawCoin({
      ctx,
      x: radius,
      y: radius,
      radius: radius * 0.95,
      // Leave small margin
      isFaceUp: type === "N",
      scale: 1,
      rotationX: 0
      // Full roundness
    });
  }, [type, size]);
  return /* @__PURE__ */ jsx("canvas", { ref: canvasRef, style: { width: size, height: size }, className });
}

function CoinFlipAnimation({ isFlipping, onAnimationComplete, results }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (!isFlipping || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const GRAVITY = 3e3;
    const RESTITUTION = 0.4;
    const FRICTION = 0.75;
    const COIN_RADIUS = 25;
    const INITIAL_TOSS_FORCE = -1500;
    const MIN_BOUNCES = 2;
    const MAX_BOUNCES = 4;
    const MAX_SCALE = 1.8;
    const MIN_SCALE = 0.9;
    const FINAL_SCALE = 1.2;
    const INITIAL_ROTATION_SPEED = 200;
    const RESULT_DISPLAY_TIME = 500;
    const GROUND_HEIGHT = 350;
    const coins = results.map((result, index) => {
      const totalWidth = canvas.width;
      const spacing = totalWidth / 4;
      const startX = spacing * (index + 1);
      return {
        x: startX,
        // Bắt đầu từ vị trí đích dự kiến để dễ theo dõi
        y: canvas.height / 2,
        // Bắt đầu từ giữa
        velocityX: (Math.random() - 0.5) * 50,
        // Giảm velocityX để ít bay lung tung ngang
        velocityY: INITIAL_TOSS_FORCE * (1 + Math.random() * 0.2),
        // Giữ nguyên lực tung lên
        scale: MAX_SCALE,
        isSettled: false,
        result,
        bounceCount: 0,
        rotationX: 0,
        rotationSpeed: INITIAL_ROTATION_SPEED * (1 + Math.random() * 0.5),
        maxBounces: MIN_BOUNCES + Math.floor(Math.random() * (MAX_BOUNCES - MIN_BOUNCES + 1))
      };
    });
    const drawCoin$1 = (coin) => {
      ctx.save();
      ctx.translate(coin.x, coin.y);
      const shadowY = GROUND_HEIGHT - coin.y;
      const shadowScale = Math.max(0.1, 1 - shadowY / (canvas.height / 2));
      ctx.translate(0, shadowY);
      ctx.scale(coin.scale * shadowScale, coin.scale * shadowScale);
      ctx.beginPath();
      ctx.ellipse(0, 0, COIN_RADIUS, COIN_RADIUS * 0.25, 0, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 0, 0, ${0.3 * shadowScale})`;
      ctx.fill();
      ctx.restore();
      drawCoin({
        ctx,
        x: coin.x,
        y: coin.y,
        radius: COIN_RADIUS,
        isFaceUp: Math.cos(coin.rotationX) > 0,
        scale: coin.scale,
        rotationX: coin.rotationX
      });
    };
    let lastTime = performance.now();
    const animate = (currentTime) => {
      const deltaTime = (currentTime - lastTime) / 1e3;
      lastTime = currentTime;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let allSettled = true;
      coins.forEach((coin) => {
        if (!coin.isSettled) {
          coin.velocityY += GRAVITY * deltaTime;
          coin.y += coin.velocityY * deltaTime;
          coin.x += coin.velocityX * deltaTime;
          const heightFactor = Math.max(0, (canvas.height / 2 - coin.y) / (canvas.height / 2));
          coin.rotationX += (coin.rotationSpeed + heightFactor * 20) * deltaTime;
          if (coin.y > GROUND_HEIGHT - COIN_RADIUS * coin.scale) {
            coin.y = GROUND_HEIGHT - COIN_RADIUS * coin.scale;
            if (coin.bounceCount < coin.maxBounces) {
              const bounceRandomness = 1 + (Math.random() * 0.3 - 0.15);
              coin.velocityY = -Math.abs(coin.velocityY) * RESTITUTION * bounceRandomness;
              coin.velocityX *= FRICTION * (1 + (Math.random() * 0.2 - 0.1));
              coin.bounceCount++;
              coin.rotationSpeed *= FRICTION * (0.8 + Math.random() * 0.4);
              const scaleRandomness = 1 + (Math.random() * 0.2 - 0.1);
              coin.scale = (MIN_SCALE + (FINAL_SCALE - MIN_SCALE) * (1 - coin.bounceCount / coin.maxBounces)) * scaleRandomness;
            } else {
              coin.isSettled = true;
              coin.scale = FINAL_SCALE;
              coin.velocityX = 0;
              coin.velocityY = 0;
              coin.rotationSpeed = 0;
              coin.rotationX = coin.result === "N" ? 0 : Math.PI;
            }
          }
          if (coin.x < COIN_RADIUS * coin.scale) {
            coin.x = COIN_RADIUS * coin.scale;
            coin.velocityX = Math.abs(coin.velocityX) * FRICTION;
          } else if (coin.x > canvas.width - COIN_RADIUS * coin.scale) {
            coin.x = canvas.width - COIN_RADIUS * coin.scale;
            coin.velocityX = -Math.abs(coin.velocityX) * FRICTION;
          }
          if (coin.bounceCount === 0) {
            const heightProgress = (coin.y - canvas.height / 2) / (canvas.height * 0.3);
            coin.scale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * (1 - Math.min(1, Math.max(0, heightProgress)));
          }
          allSettled = false;
        }
        drawCoin$1(coin);
      });
      coins.forEach((coin1, i) => {
        coins.slice(i + 1).forEach((coin2) => {
          const dx = coin2.x - coin1.x;
          const dy = coin2.y - coin1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const minDistance = COIN_RADIUS * 2 * Math.max(coin1.scale, coin2.scale);
          if (distance < minDistance) {
            const angle = Math.atan2(dy, dx);
            const pushForce = (minDistance - distance) * 0.2;
            if (!coin1.isSettled) {
              coin1.x -= Math.cos(angle) * pushForce;
            }
            if (!coin2.isSettled) {
              coin2.x += Math.cos(angle) * pushForce;
            }
          }
        });
      });
      if (!allSettled) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(onAnimationComplete, RESULT_DISPLAY_TIME);
      }
    };
    requestAnimationFrame(animate);
  }, [isFlipping, onAnimationComplete, results]);
  return /* @__PURE__ */ jsx("canvas", { ref: canvasRef, width: 400, height: 400, className: "mx-auto" });
}

function copyToClipboard(content, btnId, successText, failedText) {
  const btnCopy = document.getElementById(btnId);
  if (!btnCopy) return;
  const originalText = btnCopy.textContent;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(content).then(() => {
      btnCopy.textContent = successText;
      setTimeout(() => {
        btnCopy.textContent = originalText;
      }, 2e3);
    }).catch((err) => {
      console.warn("Clipboard API failed, trying fallback:", err);
      fallbackCopyTextToClipboard(content, btnCopy, originalText, successText, failedText);
    });
  } else {
    fallbackCopyTextToClipboard(content, btnCopy, originalText, successText, failedText);
  }
}
function fallbackCopyTextToClipboard(text, btnElement, originalText, successText, failedText) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.top = "-9999px";
  textArea.style.left = "-9999px";
  textArea.style.width = "1px";
  textArea.style.height = "1px";
  textArea.style.opacity = "0";
  textArea.style.border = "none";
  textArea.style.outline = "none";
  textArea.style.resize = "none";
  textArea.style.overflow = "hidden";
  document.body.appendChild(textArea);
  setTimeout(() => {
    try {
      textArea.focus();
      textArea.select();
      textArea.setSelectionRange(0, text.length);
      const successful = document.execCommand("copy");
      if (successful) {
        btnElement.textContent = successText;
        setTimeout(() => {
          btnElement.textContent = originalText;
        }, 2e3);
      } else {
        if (navigator.userAgent.match(/ipad|iphone/i)) {
          const tempDiv = document.createElement("div");
          tempDiv.innerText = text;
          tempDiv.style.position = "absolute";
          tempDiv.style.left = "-9999px";
          document.body.appendChild(tempDiv);
          const range = document.createRange();
          range.selectNodeContents(tempDiv);
          const selection = window.getSelection();
          if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
            const iosSuccess = document.execCommand("copy");
            selection.removeAllRanges();
            if (iosSuccess) {
              btnElement.textContent = successText;
              setTimeout(() => {
                btnElement.textContent = originalText;
              }, 2e3);
            } else {
              throw new Error("iOS copy failed");
            }
          }
          document.body.removeChild(tempDiv);
        } else {
          throw new Error("Copy command failed");
        }
      }
    } catch (err) {
      console.error("Fallback copy error:", err);
      btnElement.textContent = failedText;
      setTimeout(() => {
        btnElement.textContent = originalText;
      }, 2e3);
    }
    if (document.body.contains(textArea)) {
      document.body.removeChild(textArea);
    }
  }, 0);
}

const gieoMotLan = (haoNumber) => {
  const getRandomCoin = () => {
    const array = new Uint8Array(1);
    crypto.getRandomValues(array);
    return array[0] < 128 ? "N" : "S";
  };
  const coins = Array.from({ length: 3 }).fill(null).map(() => getRandomCoin());
  const ngua = coins.filter((c) => c === "N").length;
  let type;
  let symbol;
  let trangThai = "";
  if (ngua === 3) {
    type = "amDong";
    symbol = "— —";
    trangThai = "(X)";
  } else if (ngua === 0) {
    type = "duongDong";
    symbol = "———";
    trangThai = "(O)";
  } else if (ngua === 2) {
    type = "duong";
    symbol = "———";
    trangThai = "";
  } else {
    type = "am";
    symbol = "— —";
    trangThai = "";
  }
  return { id: haoNumber, coins, type, symbol, trangThai, haoNumber };
};
const taoQueBien = (haoResults, ichingData) => {
  const coHaoDong = haoResults.some((hao) => hao.type === "amDong" || hao.type === "duongDong");
  if (!coHaoDong) return null;
  const haoBien = haoResults.map((hao) => ({
    ...hao,
    type: hao.type === "amDong" ? "duong" : hao.type === "duongDong" ? "am" : hao.type,
    symbol: hao.type === "amDong" ? "———" : hao.type === "duongDong" ? "— —" : hao.symbol
  }));
  return xacDinhQue(haoBien, ichingData);
};
const xacDinhQue = (haoResults, ichingData) => {
  const sortedHao = [...haoResults].sort((a, b) => a.haoNumber - b.haoNumber);
  const binaryStr = sortedHao.reverse().map((hao) => {
    if (hao.type === "duong" || hao.type === "duongDong") {
      return "1";
    } else if (hao.type === "am" || hao.type === "amDong") {
      return "0";
    }
    return "0";
  }).join("");
  const queIndex = ICHING_NUMBER.findIndex((binary) => binary === binaryStr);
  if (queIndex !== -1) {
    const queGoc = {
      queIcon: ichingData[queIndex][0],
      queTen: ichingData[queIndex][1],
      queMeaning: ichingData[queIndex][2]
    };
    const queBien = taoQueBien(haoResults, ichingData);
    return {
      ...queGoc,
      queBien
    };
  }
  return null;
};

const translations = {
  vi: {
    title: "Gieo Quẻ Kinh Dịch",
    subtitle: "易經占卦",
    intro1: "Đây là nơi bạn có thể tìm đến khi đứng trước những băn khoăn chưa có lời giải, hoặc ngay cả khi không rõ mình đang cần điều gì. Qua 64 quẻ Kinh Dịch – hệ thống dự đoán uyên thâm nhất của nhân loại, bạn có thể khám phá những thông điệp sâu sắc, mở ra hướng đi tiềm năng hoặc tìm thấy sự sáng tỏ trong tâm trí.",
    intro2: "Không cần chuẩn bị không gian đặc biệt, bạn chỉ cần",
    intro2Strong: "tĩnh tâm",
    intro2Continue: ", thả lỏng, buông bỏ mọi suy nghĩ và tập trung hoàn toàn vào từng lần tung quẻ. Bạn có thể thực hiện việc này ở bất kỳ đâu, bất kỳ lúc nào. Kinh Dịch không đòi hỏi bạn phải có một câu hỏi cụ thể, mà đôi khi chính những quẻ ngẫu nhiên lại là cách để bạn khám phá những điều chưa từng nghĩ đến, mang đến những góc nhìn mới mẻ cho những vấn đề tiềm ẩn trong cuộc sống.",
    intro3: "Hãy nhớ rằng, tung quẻ không chỉ là để tìm kiếm câu trả lời, mà còn là cách",
    intro3Strong: "kết nối với dòng chảy tự nhiên của vũ trụ",
    intro3Continue: ". Tuy nhiên, hãy sử dụng quẻ một cách cân nhắc, tránh việc thực hiện quá nhiều lần liên tiếp để đảm bảo độ chính xác và sự linh ứng. Hãy để mỗi lần tung quẻ là một khoảnh khắc bạn dừng lại, lắng nghe và cảm nhận những chỉ dẫn mà Kinh Dịch dành riêng cho bạn.",
    coinFront: "Mặt Ngửa",
    coinBack: "Mặt Sấp",
    instruction: "Ấn vào Tung Đồng Xu ở dưới màn hình để gieo quẻ",
    instructionSub: "Cần tung 6 lần",
    queChu: "Quẻ Chủ",
    haoDong: "Hào Động",
    haoDongSub: "Hào Động",
    amDong: "Âm Động",
    duongDong: "Dương Động",
    noHaoDong: "Không có hào động",
    queBien: "Quẻ Biến",
    copyTitle: "Kết quả Gieo Quẻ dùng cho AI",
    copyButton: "Copy",
    copySuccess: "Đã copy",
    copyFailed: "Copy thất bại",
    aiInstruction1: "Ấn",
    aiInstruction2: "Copy",
    aiInstruction3: "lấy kết quả bên trên và mở trợ lý bên dưới để gửi kết quả đến trợ lý.",
    aiButton: "Mở trợ lý Tinh Mệnh Đồ - Kinh Dịch & Dự Đoán",
    aiInstruction4: "trên nền tảng",
    aiInstruction5: "Gemini",
    aiInstruction6: "để đặt câu hỏi.",
    aiFallback: "Nếu không copy bằng nút được có thể",
    aiFallbackStrong: "bôi đen",
    aiFallback2: "rồi",
    aiFallbackStrong2: "copy",
    aiFallback3: "dữ liệu trong kết quả.",
    helpLink: "Xem quẻ trên Tinh Mệnh Đồ như thế nào?",
    buttonTung: "Tung Xu",
    buttonTungActive: "...Tung...",
    buttonNew: "Gieo mới",
    copyQueChu: "=== QUẺ CHỦ ===",
    copyQueSo: "Quẻ số:",
    copyTenQue: "Tên quẻ:",
    copyBieuTuong: "Biểu tượng:",
    copyYNghia: "Ý nghĩa:",
    copyHaoDong: "=== HÀO ĐỘNG ===",
    copyHao: "Hào",
    copyQueBien: "=== QUẺ BIẾN ===",
    copyKhongCoQueBien: "Không có quẻ biến"
  },
  zh: {
    title: "易经占卦",
    subtitle: "易经占卦",
    intro1: "当您面对未解的困惑，或甚至不清楚自己需要什么时，这里是您可以寻求指引的地方。透过64卦易经——人类最深奥的预测系统，您可以探索深刻的讯息，开启潜在的方向，或在心中找到清晰。",
    intro2: "无需准备特殊空间，您只需要",
    intro2Strong: "静心",
    intro2Continue: "，放松，放下所有思绪，完全专注于每一次掷卦。您可以在任何地方、任何时候进行。易经不要求您必须有具体问题，有时随机的卦象正是您探索未曾想过之事的方式，为生活中潜在的问题带来新的视角。",
    intro3: "请记住，掷卦不仅是为了寻找答案，更是",
    intro3Strong: "与宇宙自然流动连结",
    intro3Continue: "的方式。然而，请谨慎使用卦象，避免连续进行太多次，以确保准确性和灵验性。让每次掷卦成为您停下脚步、聆听和感受易经为您准备的指引的时刻。",
    coinFront: "阳面",
    coinBack: "阴面",
    instruction: "点击掷筊部分进行占卦",
    instructionSub: "须行六次",
    queChu: "主卦",
    haoDong: "动爻",
    haoDongSub: "动爻",
    amDong: "阴动",
    duongDong: "阳动",
    noHaoDong: "无动爻",
    queBien: "变卦",
    copyTitle: "卦象结果 • 供AI使用",
    copyButton: "复制",
    copySuccess: "已复制",
    copyFailed: "复制失败",
    aiInstruction1: "点击",
    aiInstruction2: "复制",
    aiInstruction3: "取得上方结果，并开启下方助手以发​​送结果给助手。",
    aiButton: "开启天命图 - 易经与预测助手",
    aiInstruction4: "在",
    aiInstruction5: "Gemini",
    aiInstruction6: "平台上提问。",
    aiFallback: "如果无法使用按钮复制，可以",
    aiFallbackStrong: "选取",
    aiFallback2: "然后",
    aiFallbackStrong2: "复制",
    aiFallback3: "结果中的资料。",
    helpLink: "如何在天命图上查看卦象？",
    buttonTung: "掷筊",
    buttonTungActive: "掷筊中",
    buttonNew: "新卦",
    copyQueChu: "=== 主卦 ===",
    copyQueSo: "卦号：",
    copyTenQue: "卦名：",
    copyBieuTuong: "符号：",
    copyYNghia: "意义：",
    copyHaoDong: "=== 动爻 ===",
    copyHao: "爻",
    copyQueBien: "=== 变卦 ===",
    copyKhongCoQueBien: "无变卦"
  },
  en: {
    title: "I Ching Divination",
    subtitle: "易經占卦",
    intro1: "This is where you can turn when facing unresolved concerns, or even when you are not sure what you need. Through the 64 hexagrams of I Ching – the most profound divination system of humanity, you can explore deep messages, open potential directions, or find clarity in your mind.",
    intro2: "No special space preparation is needed, you only need to",
    intro2Strong: "calm your mind",
    intro2Continue: ", relax, let go of all thoughts, and focus completely on each divination. You can do this anywhere, anytime. I Ching does not require you to have a specific question, and sometimes random hexagrams are exactly how you explore things you have never thought of, bringing new perspectives to potential issues in life.",
    intro3: "Remember that divination is not only to seek answers, but also a way to",
    intro3Strong: "connect with the natural flow of the universe",
    intro3Continue: ". However, use divination wisely, avoid doing it too many times in a row to ensure accuracy and effectiveness. Let each divination be a moment when you pause, listen, and feel the guidance that I Ching has prepared for you.",
    coinFront: "Yang Side",
    coinBack: "Yin Side",
    instruction: "Click the Coin Toss section to cast hexagrams",
    instructionSub: "Must perform 6 times",
    queChu: "Main Hexagram",
    haoDong: "Moving Lines",
    haoDongSub: "動爻",
    amDong: "Yin Moving",
    duongDong: "Yang Moving",
    noHaoDong: "No Moving Lines",
    queBien: "Changed Hexagram",
    copyTitle: "Hexagram Result • For AI Use",
    copyButton: "Copy",
    copySuccess: "Copied",
    copyFailed: "Copy Failed",
    aiInstruction1: "Click",
    aiInstruction2: "Copy",
    aiInstruction3: "to get the result above and open the assistant below to send the result to the assistant.",
    aiButton: "Open Tinh Mệnh Đồ - I Ching & Prediction Assistant",
    aiInstruction4: "on the",
    aiInstruction5: "Gemini",
    aiInstruction6: "platform to ask questions.",
    aiFallback: "If you cannot copy using the button, you can",
    aiFallbackStrong: "select",
    aiFallback2: "and then",
    aiFallbackStrong2: "copy",
    aiFallback3: "the data in the result.",
    helpLink: "How to read hexagrams on Tinh Mệnh Đồ?",
    buttonTung: "擲筊",
    buttonTungActive: "擲筊中",
    buttonNew: "New Hexagram",
    copyQueChu: "=== MAIN HEXAGRAM ===",
    copyQueSo: "Hexagram Number:",
    copyTenQue: "Hexagram Name:",
    copyBieuTuong: "Symbol:",
    copyYNghia: "Meaning:",
    copyHaoDong: "=== MOVING LINES ===",
    copyHao: "Line",
    copyQueBien: "=== CHANGED HEXAGRAM ===",
    copyKhongCoQueBien: "No Changed Hexagram"
  }
};

const createCx = (themeColor) => (classes) => classes.replace(/amber/g, themeColor);

function toBase64(str) {
  try {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) => String.fromCharCode(parseInt(p1, 16))));
  } catch (e) {
    return "";
  }
}

const DONG_STYLE = "bg-linear-to-r from-red-800 via-red-500 to-red-800 shadow-[0_0_15px_rgba(220,38,38,0.6),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.3)]";
const NORMAL_STYLE = "bg-linear-to-r from-slate-900 via-slate-700 to-slate-900 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.4)]";
const HaoTable = ({ sortedHaoResults, lang, themeColor = "amber" }) => {
  const cx = createCx(themeColor);
  const isDong = (type) => type === "amDong" || type === "duongDong";
  const isDuong = (type) => type === "duong" || type === "duongDong";
  const haoLabel = (n) => {
    if (lang === "zh") return `第${n}爻`;
    if (lang === "en") return `Line ${n}`;
    return `Hào ${n}`;
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      id: "ket-qua-gieo-que",
      className: cx("mx-auto flex w-full flex-col-reverse gap-0.5 px-3 py-4 md:w-auto md:px-6 md:py-6"),
      children: sortedHaoResults.map((hao) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 py-0.5 md:gap-3", children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: cx(
              "min-w-[40px] shrink-0 font-serif text-xs font-bold tracking-wider text-amber-800 md:min-w-[50px] md:text-sm"
            ),
            children: haoLabel(hao.haoNumber)
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex w-[110px] shrink-0 items-center justify-center md:w-[180px]", children: isDuong(hao.type) ? /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `h-5 w-full rounded-sm transition-colors duration-500 md:h-7 ${isDong(hao.type) ? DONG_STYLE : NORMAL_STYLE}`
            }
          ),
          isDong(hao.type) && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-sm bg-linear-to-t from-transparent via-red-300/20 to-transparent" })
        ] }) : /* @__PURE__ */ jsx("div", { className: "flex w-full justify-between gap-2.5 md:gap-4", children: [0, 1].map((i) => /* @__PURE__ */ jsxs("div", { className: "relative w-[45%]", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `h-5 w-full rounded-sm transition-colors duration-500 md:h-7 ${isDong(hao.type) ? DONG_STYLE : NORMAL_STYLE}`
            }
          ),
          isDong(hao.type) && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-sm bg-linear-to-t from-transparent via-red-300/20 to-transparent" })
        ] }, i)) }) }),
        /* @__PURE__ */ jsx("div", { className: "flex shrink-0 items-center gap-0.5 md:gap-1.5", children: hao.coins.map((coin, idc) => /* @__PURE__ */ jsx(CoinFace, { type: coin, size: 22 }, `${hao.id}-${idc}-${coin}`)) })
      ] }, hao.id))
    }
  );
};

const CopySection = ({
  title,
  content,
  btnId,
  copyButtonText,
  onCopy,
  themeColor = "amber"
}) => {
  const cx = createCx(themeColor);
  return /* @__PURE__ */ jsx("div", { className: "mt-6 px-3 md:mt-8", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: cx(
        "overflow-hidden rounded-xl border border-amber-300 bg-white shadow-sm"
      ),
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cx(
              "flex h-12 items-center justify-between bg-linear-to-r from-amber-100 via-amber-50 to-amber-100 px-6 py-3 font-serif text-sm font-medium text-amber-900 select-none"
            ),
            children: [
              /* @__PURE__ */ jsx("span", { className: "tracking-wider", children: title }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  className: cx(
                    "flex items-center gap-2 rounded-lg border border-amber-400 bg-white px-3 py-1.5 shadow-sm transition-all hover:scale-105 hover:border-amber-500 hover:shadow-md active:scale-95"
                  ),
                  onClick: () => onCopy(content, btnId),
                  children: [
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 18,
                        height: 18,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        className: "icon-sm",
                        children: /* @__PURE__ */ jsx(
                          "path",
                          {
                            fill: "currentColor",
                            fillRule: "evenodd",
                            d: "M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z",
                            clipRule: "evenodd"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { id: btnId, className: "cursor-pointer font-serif text-sm font-medium tracking-wide", children: copyButtonText })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          "textarea",
          {
            className: cx(
              "h-30 w-full resize-none overflow-y-auto border-none bg-white p-5 text-left font-mono text-xs leading-relaxed text-gray-700 focus:bg-amber-50/30 focus:outline-none md:h-35"
            ),
            readOnly: true,
            value: content
          }
        ) })
      ]
    }
  ) });
};

const HexagramResultDisplay = ({
  queResult,
  sortedHaoResults,
  copyContent,
  lang,
  t,
  themeColor,
  onCopy
}) => {
  const cx = createCx(themeColor);
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-8 w-full bg-white/50", children: [
    /* @__PURE__ */ jsx(HaoTable, { sortedHaoResults, lang, themeColor }),
    /* @__PURE__ */ jsx("div", { className: cx("relative mt-6 w-full bg-amber-50/30 px-6 pt-8 pb-6"), children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: `grid place-items-center gap-8 ${queResult.queBien ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1 lg:grid-cols-2"}`,
        children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: cx(
                "relative overflow-hidden rounded-xl border border-amber-300 bg-linear-to-br from-amber-50 via-white to-amber-50 p-8 text-center shadow-sm transition-all hover:shadow-md"
              ),
              children: [
                /* @__PURE__ */ jsx("div", { className: cx("absolute -top-10 -right-10 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl") }),
                /* @__PURE__ */ jsx("div", { className: cx("absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl") }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cx(
                      "relative z-10 mb-2 font-serif text-xs font-bold tracking-[0.3em] text-amber-800 uppercase"
                    ),
                    children: t.queChu
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "relative z-10 mb-6", children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cx(
                      "mb-4 font-serif text-6xl font-bold text-amber-900 md:text-8xl lg:text-9xl"
                    ),
                    children: queResult.queIcon
                  }
                ) }),
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: cx(
                      "relative z-10 mb-4 font-serif text-2xl font-bold tracking-wider text-amber-800 uppercase"
                    ),
                    children: queResult.queTen
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "relative z-10 text-left font-serif text-base leading-relaxed text-gray-700 italic", children: queResult.queMeaning })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-red-300 bg-linear-to-br from-red-50 via-white to-red-50 p-6 shadow-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-10 -right-10 h-40 w-40 rounded-full bg-red-300/10 blur-3xl" }),
            /* @__PURE__ */ jsx("div", { className: "absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-red-400/10 blur-3xl" }),
            /* @__PURE__ */ jsxs("h4", { className: "relative z-10 mb-6 text-center font-serif text-2xl font-bold tracking-[0.3em] text-red-700 uppercase", children: [
              t.haoDong,
              lang !== "vi" ? ` • ${t.haoDongSub}` : ""
            ] }),
            /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto mb-3 flex w-full flex-col gap-3 md:w-auto", children: (() => {
              const haoDong = queResult.haoResults.filter((hao) => hao.type === "amDong" || hao.type === "duongDong");
              const sortedHaoDong = [...haoDong].sort((a, b) => b.haoNumber - a.haoNumber);
              if (sortedHaoDong.length > 0) {
                return /* @__PURE__ */ jsx("div", { className: "w-full space-y-3", children: sortedHaoDong.map((hao) => /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "rounded-lg border border-red-200 bg-white p-3 shadow-sm sm:p-4",
                    children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between font-serif text-sm font-medium text-gray-800 sm:text-base", children: [
                      /* @__PURE__ */ jsxs("span", { className: "font-bold tracking-wider", children: [
                        t.copyHao,
                        " ",
                        hao.haoNumber,
                        "："
                      ] }),
                      /* @__PURE__ */ jsx("span", { className: "font-bold tracking-wider uppercase", children: hao.type === "amDong" ? /* @__PURE__ */ jsxs("span", { className: "text-gray-700", children: [
                        t.amDong,
                        lang !== "vi" ? " • 陰動" : ""
                      ] }) : /* @__PURE__ */ jsxs("span", { className: "text-red-700 drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]", children: [
                        t.duongDong,
                        lang !== "vi" ? " • 陽動" : ""
                      ] }) })
                    ] })
                  },
                  hao.haoNumber
                )) });
              } else {
                return /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-gray-100 p-6 font-serif text-base text-gray-500 italic", children: [
                  t.noHaoDong,
                  lang !== "vi" ? " • 無動爻" : ""
                ] });
              }
            })() })
          ] }),
          queResult.queBien && /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-xl border border-orange-300 bg-linear-to-br from-orange-50 via-white to-orange-50 p-8 text-center shadow-sm transition-all hover:shadow-md", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-10 -right-10 h-40 w-40 rounded-full bg-orange-300/20 blur-3xl" }),
            /* @__PURE__ */ jsx("div", { className: "absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-orange-400/20 blur-3xl" }),
            /* @__PURE__ */ jsx("div", { className: "relative z-10 mb-2 font-serif text-xs font-bold tracking-[0.3em] text-orange-800 uppercase", children: t.queBien }),
            /* @__PURE__ */ jsx("div", { className: "relative z-10 mb-6", children: /* @__PURE__ */ jsx("div", { className: "mb-4 font-serif text-6xl font-bold text-orange-900 md:text-8xl lg:text-9xl", children: queResult.queBien.queIcon }) }),
            /* @__PURE__ */ jsx("h3", { className: "relative z-10 mb-4 font-serif text-2xl font-bold tracking-wider text-orange-800 uppercase", children: queResult.queBien.queTen }),
            /* @__PURE__ */ jsx("p", { className: "relative z-10 text-left font-serif text-base leading-relaxed text-gray-700 italic", children: queResult.queBien.queMeaning })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(
      CopySection,
      {
        title: t.copyTitle,
        content: copyContent,
        btnId: "btnCopyGieoQue",
        copyButtonText: t.copyButton,
        onCopy,
        themeColor
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-6 w-full px-3 text-center font-serif", children: [
      /* @__PURE__ */ jsxs("p", { className: "mb-3 text-sm leading-relaxed text-gray-700", children: [
        t.aiInstruction1,
        " ",
        /* @__PURE__ */ jsx("strong", { className: cx("text-amber-800"), children: t.aiInstruction2 }),
        " ",
        t.aiInstruction3
      ] }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: GEMINI_AI_LINKS.GIEO_QUE,
          target: "_blank",
          className: "fire-btn mx-auto my-4 inline-block w-full max-w-sm rounded-lg px-4 py-3 font-serif text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 md:px-8 md:py-4 md:text-base",
          children: t.aiButton
        }
      ),
      /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm leading-relaxed text-gray-700", children: [
        t.aiInstruction4,
        " ",
        /* @__PURE__ */ jsx("strong", { className: cx("text-amber-800"), children: t.aiInstruction5 }),
        " ",
        t.aiInstruction6
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-2 text-xs text-gray-500 italic", children: [
        t.aiFallback,
        " ",
        /* @__PURE__ */ jsx("strong", { children: t.aiFallbackStrong }),
        " ",
        t.aiFallback2,
        " ",
        /* @__PURE__ */ jsx("strong", { children: t.aiFallbackStrong2 }),
        " ",
        t.aiFallback3
      ] })
    ] })
  ] });
};

const LightningEffect = ({ isVisible }) => {
  if (!isVisible) return null;
  return /* @__PURE__ */ jsxs("div", { className: "pointer-events-none fixed inset-0 z-50 animate-[lightning_0.5s_ease-out_forwards] overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/30 mix-blend-overlay" }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes lightning {
          0% { opacity: 0; }
          10% { opacity: 1; filter: brightness(2) contrast(2); }
          20% { opacity: 0; }
          30% { opacity: 0.8; filter: brightness(1.5) contrast(1.5); }
          40% { opacity: 0; }
          50% { opacity: 0.5; }
          100% { opacity: 0; }
        }
      ` })
  ] });
};

function GieoQueKinhDich({
  lang = "vi",
  prefixContent = "",
  languageUrls,
  themeColor = "amber",
  showIntro = false
} = {}) {
  const t = translations[lang];
  const cx = createCx(themeColor);
  const ichingData = useMemo(() => {
    switch (lang) {
      case "zh":
        return ICHING_CN;
      case "en":
        return ICHING_EN;
      default:
        return ICHING;
    }
  }, [lang]);
  const [haoResults, setHaoResults] = useState([]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [queResult, setQueResult] = useState(null);
  const [currentKetQua, setCurrentKetQua] = useState(null);
  const [copyContent, setCopyContent] = useState("");
  const [showLightning, setShowLightning] = useState(false);
  useEffect(() => {
    setHaoResults([]);
    setQueResult(null);
    setCurrentKetQua(null);
    setCopyContent("");
  }, [lang]);
  const triggerShake = () => {
    document.body.classList.add("animate-[shake_0.5s_ease-in-out]");
    setShowLightning(true);
    setTimeout(() => {
      document.body.classList.remove("animate-[shake_0.5s_ease-in-out]");
      setShowLightning(false);
    }, 500);
  };
  useEffect(() => {
    if (queResult) {
      let content = "";
      if (prefixContent) content += prefixContent + "\n\n";
      const queGocIndex = ichingData.findIndex((q) => q[0] === queResult.queIcon);
      content += `${t.copyQueChu}
`;
      content += `${t.copyQueSo} ${queGocIndex + 1}
`;
      content += `${t.copyTenQue} ${queResult.queTen}
`;
      content += `${t.copyBieuTuong} ${queResult.queIcon}
`;
      content += `${t.copyYNghia} ${queResult.queMeaning}

`;
      content += `${t.copyHaoDong}
`;
      const haoDong = queResult.haoResults.filter((hao) => hao.type === "amDong" || hao.type === "duongDong");
      if (haoDong.length > 0) {
        haoDong.forEach((hao) => {
          content += `${t.copyHao} ${hao.haoNumber}: ${hao.type === "amDong" ? t.amDong : t.duongDong}
`;
        });
      } else {
        content += `${t.noHaoDong}
`;
      }
      content += `
`;
      content += `${t.copyQueBien}
`;
      if (queResult.queBien) {
        const queBienIndex = ichingData.findIndex((q) => q[0] === queResult.queBien?.queIcon);
        content += `${t.copyQueSo} ${queBienIndex + 1}
`;
        content += `${t.copyTenQue} ${queResult.queBien.queTen}
`;
        content += `${t.copyBieuTuong} ${queResult.queBien.queIcon}
`;
        content += `${t.copyYNghia} ${queResult.queBien.queMeaning}
`;
      } else {
        content += `${t.copyKhongCoQueBien}
`;
      }
      setCopyContent(toBase64(content));
    } else {
      setCopyContent("");
    }
  }, [queResult, t, ichingData, prefixContent]);
  const handleCopyClick = (content, btnId) => {
    copyToClipboard(content, btnId, t.copySuccess, t.copyFailed);
  };
  const tungXu = async () => {
    if (isFlipping || haoResults.length >= 6) return;
    const ketQua = gieoMotLan(haoResults.length + 1);
    setIsFlipping(true);
    setCurrentKetQua(ketQua);
  };
  const handleAnimationComplete = () => {
    if (!currentKetQua) return;
    const newHaoResults = [...haoResults, currentKetQua];
    setHaoResults(newHaoResults);
    setIsFlipping(false);
    setCurrentKetQua(null);
    if (currentKetQua.type === "amDong" || currentKetQua.type === "duongDong") {
      triggerShake();
    }
    if (newHaoResults.length === 6) {
      const queKetQua = xacDinhQue(newHaoResults, ichingData);
      if (queKetQua) {
        setQueResult({
          haoResults: newHaoResults,
          queIcon: queKetQua.queIcon,
          queTen: queKetQua.queTen,
          queMeaning: queKetQua.queMeaning,
          queBien: queKetQua.queBien
        });
      }
    }
  };
  const resetQue = () => {
    setHaoResults([]);
    setQueResult(null);
  };
  const sortedHaoResults = [...haoResults].sort((a, b) => a.haoNumber - b.haoNumber);
  return /* @__PURE__ */ jsxs("div", { className: "relative z-10 my-8 mt-4 mb-96 pt-10 font-serif", children: [
    /* @__PURE__ */ jsx(LanguageSwitcher, { currentLang: lang, basePath: "gieo-que-kinh-dich", languageUrls }),
    /* @__PURE__ */ jsx(LightningEffect, { isVisible: showLightning }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        @keyframes mystical-glow {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(180, 83, 9, 0.5),
                         0 0 20px rgba(180, 83, 9, 0.3),
                         0 0 30px rgba(180, 83, 9, 0.2),
                         2px 2px 4px rgba(0,0,0,0.3);
          }
          50% { 
            text-shadow: 0 0 20px rgba(180, 83, 9, 0.8),
                         0 0 30px rgba(180, 83, 9, 0.5),
                         0 0 40px rgba(180, 83, 9, 0.3),
                         2px 2px 4px rgba(0,0,0,0.3);
          }
        }
        @keyframes border-glow {
          0%, 100% { 
            box-shadow: 0 0 5px rgba(180, 83, 9, 0.3),
                        0 0 10px rgba(180, 83, 9, 0.2),
                        inset 0 0 10px rgba(180, 83, 9, 0.1);
          }
          50% { 
            box-shadow: 0 0 15px rgba(180, 83, 9, 0.5),
                        0 0 25px rgba(180, 83, 9, 0.3),
                        inset 0 0 15px rgba(180, 83, 9, 0.2);
          }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      ` }),
    showIntro && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs(
        "h1",
        {
          className: cx(
            "relative mt-10 mb-5 text-center font-serif text-4xl font-bold text-amber-800 uppercase md:text-4xl"
          ),
          children: [
            /* @__PURE__ */ jsxs("span", { className: "relative z-10", children: [
              " ",
              t.title,
              " ",
              (/* @__PURE__ */ new Date()).getFullYear()
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: cx(
                  "absolute top-1/2 left-1/2 -z-10 h-20 w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-2xl"
                )
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 mb-5", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: cx(
            "mx-auto w-full bg-amber-50/30 p-3 text-justify text-lg leading-relaxed text-gray-700 italic md:text-center"
          ),
          children: [
            /* @__PURE__ */ jsx("p", { className: "mb-4", children: t.intro1 }),
            /* @__PURE__ */ jsxs("p", { className: "my-2", children: [
              t.intro2,
              " ",
              /* @__PURE__ */ jsx("strong", { className: cx("text-amber-800"), children: t.intro2Strong }),
              t.intro2Continue
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              t.intro3,
              " ",
              /* @__PURE__ */ jsx("strong", { className: cx("text-amber-800"), children: t.intro3Strong }),
              t.intro3Continue
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cx(
          "relative mx-3 my-6 max-w-lg border border-amber-900/40 bg-[#faf7f2] p-1 md:mx-auto md:my-10"
        ),
        children: /* @__PURE__ */ jsxs("div", { className: "relative border border-amber-800/25 px-4 py-5 md:px-8 md:py-7", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-px -left-px h-4 w-4 border-t border-l border-amber-900/60" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -top-px -right-px h-4 w-4 border-t border-r border-amber-900/60" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-px -left-px h-4 w-4 border-b border-l border-amber-900/60" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -right-px -bottom-px h-4 w-4 border-r border-b border-amber-900/60" }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4 text-center md:mb-5", children: [
            /* @__PURE__ */ jsx(
              "p",
              {
                className: cx(
                  "font-serif text-base font-bold tracking-wider text-amber-950 md:text-lg"
                ),
                children: t.instruction
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: cx(
                  "mt-0.5 font-serif text-xs tracking-widest text-amber-800/60 md:text-sm"
                ),
                children: t.instructionSub
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-5 md:gap-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(CoinFace, { type: "N", size: 72 }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: cx(
                    "font-serif text-xs font-bold tracking-wider text-amber-950/80 md:text-sm"
                  ),
                  children: t.coinFront
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1", children: [
              /* @__PURE__ */ jsx("div", { className: "h-px w-3.5 bg-amber-900/30" }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-0.5", children: [
                /* @__PURE__ */ jsx("div", { className: "h-px w-1.5 bg-amber-900/30" }),
                /* @__PURE__ */ jsx("div", { className: "h-px w-1.5 bg-amber-900/30" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-px w-3.5 bg-amber-900/30" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(CoinFace, { type: "S", size: 72 }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: cx(
                    "font-serif text-xs font-bold tracking-wider text-amber-950/80 md:text-sm"
                  ),
                  children: t.coinBack
                }
              )
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-full flex-col", children: [
      haoResults.length > 0 && queResult && /* @__PURE__ */ jsx(
        HexagramResultDisplay,
        {
          queResult,
          sortedHaoResults,
          copyContent,
          lang,
          t,
          themeColor,
          onCopy: handleCopyClick
        }
      ),
      !queResult && /* @__PURE__ */ jsx("div", { className: "mx-auto mt-6 w-full", children: /* @__PURE__ */ jsx("div", { className: cx("mx-auto flex w-full flex-col-reverse gap-0.5 px-3 py-4 md:w-auto md:px-6 md:py-6"), children: [6, 5, 4, 3, 2, 1].map((haoNum) => {
        const hao = sortedHaoResults.find((h) => h.haoNumber === haoNum);
        const label = lang === "zh" ? `第${haoNum}爻` : lang === "en" ? `Line ${haoNum}` : `Hào ${haoNum}`;
        return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 py-0.5 md:gap-3", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: cx(
                `min-w-[40px] shrink-0 font-serif text-xs font-bold tracking-wider md:min-w-[50px] md:text-sm ${hao ? "text-amber-800" : "text-gray-300"}`
              ),
              children: label
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex w-[110px] shrink-0 items-center justify-center md:w-[180px]", children: hao ? (
            /* Real hào */
            hao.type === "duong" || hao.type === "duongDong" ? /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `h-5 w-full rounded-sm transition-colors duration-500 md:h-7 ${hao.type === "duongDong" ? "bg-linear-to-r from-red-800 via-red-500 to-red-800 shadow-[0_0_15px_rgba(220,38,38,0.6),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.3)]" : "bg-linear-to-r from-slate-900 via-slate-700 to-slate-900 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.4)]"}`
                }
              ),
              hao.type === "duongDong" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-sm bg-linear-to-t from-transparent via-red-300/20 to-transparent" })
            ] }) : /* @__PURE__ */ jsx("div", { className: "flex w-full justify-between gap-2.5 md:gap-4", children: [0, 1].map((i) => /* @__PURE__ */ jsxs("div", { className: "relative w-[45%]", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `h-5 w-full rounded-sm transition-colors duration-500 md:h-7 ${hao.type === "amDong" ? "bg-linear-to-r from-red-800 via-red-500 to-red-800 shadow-[0_0_15px_rgba(220,38,38,0.6),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.3)]" : "bg-linear-to-r from-slate-900 via-slate-700 to-slate-900 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.4)]"}`
                }
              ),
              hao.type === "amDong" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-sm bg-linear-to-t from-transparent via-red-300/20 to-transparent" })
            ] }, i)) })
          ) : (
            /* Skeleton placeholder */
            /* @__PURE__ */ jsx("div", { className: "h-5 w-full rounded-sm bg-gray-200/60 md:h-7" })
          ) }),
          /* @__PURE__ */ jsx("div", { className: "flex shrink-0 items-center gap-0.5 md:gap-1.5", children: hao ? hao.coins.map((coin, idc) => /* @__PURE__ */ jsx(CoinFace, { type: coin, size: 22 }, `${hao.id}-${idc}-${coin}`)) : (
            /* 3 gray placeholder circles */
            [0, 1, 2].map((i) => /* @__PURE__ */ jsx(
              "div",
              {
                className: "h-[22px] w-[22px] rounded-full bg-gray-200/60"
              },
              i
            ))
          ) })
        ] }, haoNum);
      }) }) })
    ] }),
    isFlipping && currentKetQua && /* @__PURE__ */ jsx(
      "div",
      {
        id: "coin-ani",
        className: "fixed inset-0 z-40 flex items-center justify-center bg-white/80 backdrop-blur-sm",
        children: /* @__PURE__ */ jsx(
          CoinFlipAnimation,
          {
            isFlipping,
            onAnimationComplete: handleAnimationComplete,
            results: currentKetQua.coins
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("div", { className: cx("relative mx-3 mt-16 mb-8 max-w-lg overflow-hidden text-center xl:mx-auto"), children: /* @__PURE__ */ jsx(
      "a",
      {
        href: "/cach-gieo-que-hoi-viec-chuan-xac",
        className: cx(
          "relative z-10 font-serif text-lg font-medium tracking-wide text-amber-700 transition-all hover:text-amber-900"
        ),
        target: "_blank",
        children: t.helpLink
      }
    ) }),
    haoResults.length < 6 ? /* @__PURE__ */ jsxs("div", { className: "pointer-events-none fixed right-0 bottom-0 left-0 z-50 flex items-center justify-center pt-6 pb-20", children: [
      /* @__PURE__ */ jsx("div", { className: "pointer-events-auto absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: tungXu,
          disabled: isFlipping,
          className: "group pointer-events-auto relative font-serif transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50",
          children: /* @__PURE__ */ jsx("div", { className: "relative flex h-[96px] w-[96px] items-center justify-center rounded-full border border-amber-500/40 bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-[0_0_25px_rgba(217,119,6,0.3),inset_0_4px_10px_rgba(255,255,255,0.5)]", children: /* @__PURE__ */ jsxs("div", { className: "relative flex h-[82px] w-[82px] items-center justify-center rounded-full bg-gradient-to-tr from-[#fffdf8] via-[#fbf3e0] to-[#fceabe] shadow-[inset_0_3px_12px_rgba(180,83,9,0.4)]", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-1.5 rounded-full border-[1px] border-amber-700/20" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-[10px] rounded-full border-[1.5px] border-dashed border-amber-700/30" }),
            /* @__PURE__ */ jsx("div", { className: "relative z-10 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-110", children: isFlipping ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("span", { className: "block text-[10px] font-medium tracking-widest text-amber-800/80", children: [
                "...",
                t.copyHao,
                " ",
                haoResults.length + 1,
                "..."
              ] }),
              /* @__PURE__ */ jsx("span", { className: "mt-0.5 block text-xs font-bold tracking-[0.1em] text-amber-950 drop-shadow-sm", children: t.buttonTungActive })
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("span", { className: "block text-[10px] font-medium tracking-widest text-amber-800/80", children: [
                t.copyHao,
                " ",
                haoResults.length + 1
              ] }),
              /* @__PURE__ */ jsx("span", { className: "mt-0.5 block text-xs font-bold tracking-[0.1em] text-amber-950 drop-shadow-sm", children: t.buttonTung })
            ] }) })
          ] }) })
        }
      )
    ] }) : /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: resetQue,
        className: "group fixed right-4 bottom-22 z-50 font-serif transition-all active:scale-95",
        children: /* @__PURE__ */ jsx("div", { className: "relative flex h-[68px] w-[68px] items-center justify-center rounded-full border border-orange-500/40 bg-gradient-to-br from-orange-300 via-orange-500 to-orange-700 shadow-[0_0_15px_rgba(234,88,12,0.3),inset_0_3px_8px_rgba(255,255,255,0.5)]", children: /* @__PURE__ */ jsxs("div", { className: "relative flex h-[58px] w-[58px] items-center justify-center rounded-full bg-gradient-to-tr from-[#fff8f5] via-[#ffecd6] to-[#ffe0bc] shadow-[inset_0_2px_8px_rgba(194,65,12,0.4)]", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-1.5 rounded-full border-[1px] border-orange-700/20" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-2.5 rounded-full border-[1.5px] border-dashed border-orange-700/30" }),
          /* @__PURE__ */ jsx("div", { className: "relative z-10 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-110", children: lang === "zh" ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { className: "block text-sm font-bold tracking-wider text-orange-950 drop-shadow-sm", children: "新卦" }),
            /* @__PURE__ */ jsx("span", { className: "block text-[8px] font-medium tracking-widest text-orange-800/80", children: t.buttonNew })
          ] }) : lang === "en" ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { className: "block text-sm font-bold tracking-wider text-orange-950 drop-shadow-sm", children: "New" }),
            /* @__PURE__ */ jsx("span", { className: "block text-[8px] font-medium tracking-widest text-orange-800/80", children: "Hexagram" })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { className: "block text-sm font-bold tracking-wider text-orange-950 drop-shadow-sm", children: t.buttonNew }),
            /* @__PURE__ */ jsx("span", { className: "block pr-0.5 text-[8px] font-medium tracking-widest text-orange-800/80", children: "Gieo lại" })
          ] }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx(SEOInternalLinksReact, {})
  ] });
}

export { GieoQueKinhDich as G };
