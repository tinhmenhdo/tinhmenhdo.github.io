import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Group } from 'konva/lib/Group.js';
import { Layer } from 'konva/lib/Layer.js';
import { Arrow } from 'konva/lib/shapes/Arrow.js';
import { Circle } from 'konva/lib/shapes/Circle.js';
import { Stage } from 'konva/lib/Stage.js';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { S as SEOInternalLinksReact } from './DvMfp_bk.js';
import { a as ICHING, I as ICHING_NUMBER } from './CCSl11Jl.js';
import Konva from 'konva';
import { Animation } from 'konva/lib/Animation.js';
import { Arc } from 'konva/lib/shapes/Arc.js';
import { Line } from 'konva/lib/shapes/Line.js';
import { Text } from 'konva/lib/shapes/Text.js';
import { G as GEMINI_AI_LINKS } from './C-2XUs_Y.js';

function gieoMotLan(vi_tri) {
  const getRandomCoin = () => {
    const array = new Uint8Array(1);
    crypto.getRandomValues(array);
    return array[0] < 128 ? "N" : "S";
  };
  const coins = Array.from({ length: 3 }).fill(null).map(() => getRandomCoin());
  const ngua = coins.filter((c) => c === "N").length;
  let type;
  if (ngua === 3)
    type = "laoAm";
  else if (ngua === 0)
    type = "laoDuong";
  else if (ngua === 2)
    type = "thieuDuong";
  else type = "thieuAm";
  const isYang = ngua === 0 || ngua === 2;
  return {
    type,
    vi_tri,
    isYang
    // true là dương, false là âm
  };
}
function xacDinhQue(haoResults) {
  const sortedHao = [...haoResults].sort((a, b) => a.vi_tri - b.vi_tri);
  const binaryStr = sortedHao.reverse().map((hao) => {
    return hao.isYang ? "1" : "0";
  }).join("");
  const queIndex = ICHING_NUMBER.findIndex((binary) => binary === binaryStr);
  return queIndex;
}
function taoQueBien(haoResults) {
  const coHaoDong = haoResults.some((hao) => hao.type === "laoAm" || hao.type === "laoDuong");
  if (!coHaoDong) return null;
  const haoBien = haoResults.map((hao) => ({
    type: hao.type === "laoAm" ? "thieuDuong" : hao.type === "laoDuong" ? "thieuAm" : hao.type,
    vi_tri: hao.vi_tri,
    isYang: hao.type === "laoAm" ? true : (
      // Lão âm biến thành dương
      hao.type === "laoDuong" ? false : (
        // Lão dương biến thành âm
        hao.isYang
      )
    )
    // Giữ nguyên nếu không động
  }));
  const queBienIndex = xacDinhQue(haoBien);
  if (queBienIndex === -1) return null;
  return {
    queIcon: ICHING[queBienIndex][0],
    queTen: ICHING[queBienIndex][1],
    queMeaning: ICHING[queBienIndex][2]
  };
}
function gieoQueKinhDich() {
  const haoResults = Array.from({ length: 6 }).fill(null).map((_, index) => gieoMotLan(6 - index));
  const queGocIndex = xacDinhQue(haoResults);
  const queBien = taoQueBien(haoResults);
  const haoDong = haoResults.filter((hao) => hao.type === "laoAm" || hao.type === "laoDuong").sort((a, b) => b.vi_tri - a.vi_tri);
  const sortedHaoResults = [...haoResults].sort((a, b) => b.vi_tri - a.vi_tri);
  return {
    queIcon: ICHING[queGocIndex][0],
    queTen: ICHING[queGocIndex][1],
    queMeaning: ICHING[queGocIndex][2],
    haoResults: sortedHaoResults,
    // Tất cả các hào đã sắp xếp
    haoDong,
    // Chỉ các hào động (laoAm, laoDuong)
    queBien,
    queGocIndex
  };
}

const CONFIG = {
  // Tỷ lệ bán kính cơ sở so với kích thước canvas
  BASE_RADIUS_RATIO: 0.44,
  // Tỷ lệ bán kính các vòng tròn (tỷ lệ so với baseRadius)
  CIRCLE_RATIOS: {
    OUTER_MOST: 1.12,
    // Vòng ngoài cùng (quẻ biến)
    OUTER: 0.95,
    // Vòng ngoài (quẻ chủ)
    HAO_6: 0.77,
    // Vòng hào 6
    HAO_5: 0.685,
    // Vòng hào 5
    HAO_4: 0.602,
    // Vòng hào 4
    HAO_3: 0.52,
    // Vòng hào 3
    HAO_2: 0.44,
    // Vòng hào 2
    HAO_1: 0.36,
    // Vòng hào 1
    INNER: 0.28
    // Vòng trong
  },
  // Cấu hình cho các vòng hào
  HAO_CONFIG: {
    // Cấu hình chung cho các đường tròn hào
    CIRCLES: {
      HAO_6: { LINE_COLOR: "#000", LINE_WIDTH: 1.5, DASH: [] },
      HAO_5: { LINE_COLOR: "#000", LINE_WIDTH: 1.2, DASH: [] },
      HAO_4: { LINE_COLOR: "#000", LINE_WIDTH: 1, DASH: [] },
      HAO_3: { LINE_COLOR: "#000", LINE_WIDTH: 0.8, DASH: [] },
      HAO_2: { LINE_COLOR: "#000", LINE_WIDTH: 0.6, DASH: [] },
      HAO_1: { LINE_COLOR: "#000", LINE_WIDTH: 0.5, DASH: [] }
    },
    ARC_CONFIG: {
      ANGLE_SPAN: 5.625},
    TEXT_CONFIG: {
      FONT_FAMILY: "Arial",
      OFFSET_RATIO: 1 / 3
    },
    SPACING: {
      ROTATION_OFFSET: 90
    }
  },
  // Tỷ lệ vị trí text
  TEXT_POSITIONS: {
    OUTER_HEXAGRAM: 1.05,
    OUTER_NUMBER: 0.985,
    HEXAGRAM: 0.88,
    NUMBER: 0.81
  },
  // Các thông số khác
  ARROW: {
    LENGTH: 0.8,
    POINTER_LENGTH: 21,
    POINTER_WIDTH: 7,
    STROKE_WIDTH: 2
  }
};
const THEMES = {
  default: {
    stroke: "#000000",
    fillBlack: "#000000",
    textBlack: "black",
    textWhite: "white",
    fillWhite: "#ffffff",
    fillGrayLight: "#f5f5f5",
    fillGrayDark: "#e0e0e0",
    background: "transparent"
  },
  tet: {
    stroke: "#D72434",
    // Red stroke
    fillBlack: "#D72434",
    // Red instead of black
    textBlack: "#D72434",
    // Red text
    textWhite: "#FFD700",
    // Gold text on red background
    fillWhite: "#FFF8E7",
    // Cream/off-white
    fillGrayLight: "#FFE4E1",
    // Misty Rose
    fillGrayDark: "#FFA07A",
    // Light Salmon
    background: "transparent"
  }
};
const ROTATION_CONSTANTS = {
  ANGLE_PER_SEGMENT: 5.625,
  EXTRA_ROTATION: 360};

function calculateCanvasSize(screenWidth) {
  let size;
  if (screenWidth < 640) {
    size = Math.min(screenWidth - 32, 400);
  } else if (screenWidth < 1024) {
    size = Math.min(screenWidth - 64, 600);
  } else {
    size = 850;
  }
  return {
    width: size,
    height: size
  };
}
function calculateFontSizes(canvasSize) {
  const ratio = canvasSize / 850;
  return {
    OUTER_HEXAGRAM: Math.max(16, Math.floor(31 * ratio)),
    OUTER_NUMBER: Math.max(10, Math.floor(15 * ratio)),
    INNER_HEXAGRAM: Math.max(14, Math.floor(27 * ratio)),
    INNER_NUMBER: Math.max(8, Math.floor(14 * ratio)),
    HAO_NUMBERS: {
      6: Math.max(7, Math.floor(13 * ratio)),
      5: Math.max(7, Math.floor(12 * ratio)),
      4: Math.max(6, Math.floor(11 * ratio)),
      3: Math.max(6, Math.floor(10 * ratio)),
      2: Math.max(5, Math.floor(9 * ratio)),
      1: Math.max(5, Math.floor(8 * ratio))
    }
  };
}
function calculateTargetAngle(queIndex) {
  const anglePerHexagram = 5.625;
  const numRotations = 10;
  const targetHexagramAngle = 360 - (queIndex * anglePerHexagram + anglePerHexagram / 2);
  return numRotations * 360 + targetHexagramAngle;
}
function calculateHaoStopAngle(haoType, isReverse = false, viTri = 0) {
  const segmentAngle = ROTATION_CONSTANTS.ANGLE_PER_SEGMENT;
  const groupStartIndex = Math.floor(viTri / 4) * 4;
  const groupStartAngle = groupStartIndex * segmentAngle;
  let offsetInGroup;
  switch (haoType) {
    case "laoAm":
      offsetInGroup = 0;
      break;
    case "thieuDuong":
      offsetInGroup = 1;
      break;
    case "laoDuong":
      offsetInGroup = 2;
      break;
    case "thieuAm":
      offsetInGroup = 3;
      break;
  }
  const targetAngle = groupStartAngle + offsetInGroup * segmentAngle + segmentAngle / 2 - segmentAngle;
  const numRotations = 10;
  const extraAngle = haoType === "laoAm" || haoType === "laoDuong" ? ROTATION_CONSTANTS.EXTRA_ROTATION : 0;
  const finalAngle = targetAngle + (isReverse ? -extraAngle : extraAngle);
  let targetRotation;
  if (isReverse) {
    targetRotation = -3600 + finalAngle;
  } else {
    targetRotation = numRotations * 360 + finalAngle;
  }
  const normalizedAngle = (finalAngle % 360 + 360) % 360;
  return {
    position: viTri,
    angle: targetAngle,
    extraAngle,
    targetRotation,
    normalizedAngle,
    isReverse
  };
}

const easeOutQuart$2 = (x) => 1 - Math.pow(1 - x, 4);
function findShapes(group, name) {
  return group.find(name);
}
function interpolateColor$1(color1, color2, factor) {
  const c1 = Konva.Util.getRGB(color1);
  const c2 = Konva.Util.getRGB(color2);
  const r = Math.round(c1.r + factor * (c2.r - c1.r));
  const g = Math.round(c1.g + factor * (c2.g - c1.g));
  const b = Math.round(c1.b + factor * (c2.b - c1.b));
  return `rgb(${r},${g},${b})`;
}
function getRandomNumber(min, max, viTri) {
  const seed = viTri * 1234.56789;
  return min + (max - min) * ((Math.sin(seed) + 1) / 2);
}
function createHaoAnimation(haoGroup, layer, haoResult, colors = THEMES.default, duration = getRandomNumber(5900, 6100, haoResult.viTri || haoResult.vi_tri || 0)) {
  const targetPosition = haoResult.type;
  const viTri = haoResult.viTri ?? haoResult.vi_tri ?? 0;
  const isReverse = viTri % 2 === 0;
  const rotationResult = calculateHaoStopAngle(targetPosition, isReverse, viTri);
  const { normalizedAngle } = rotationResult;
  let lastTime = 0;
  let currentRotation = haoGroup.rotation();
  let currentSpeed = 0;
  const maxSpeed = getRandomNumber(2800, 3200, viTri + 100);
  const laoAmArcs = findShapes(haoGroup, ".lao-am-arc");
  const laoDuongArcs = findShapes(haoGroup, ".lao-duong-arc");
  const colorTransitionDuration = 1200;
  const anim = new Konva.Animation((frame) => {
    if (!frame) return;
    const t = Math.min(frame.time / duration, 1);
    const timeDiff = frame.time - lastTime;
    lastTime = frame.time;
    const colorT = frame.time % (colorTransitionDuration * 2) / colorTransitionDuration;
    let factor = colorT > 1 ? 2 - colorT : colorT;
    factor = Math.max(0, Math.min(1, factor));
    const laoAmColor = interpolateColor$1(colors.fillBlack, colors.fillWhite, factor);
    const laoDuongColor = interpolateColor$1(colors.fillWhite, colors.fillBlack, factor);
    laoAmArcs.forEach((arc) => arc.fill(laoAmColor));
    laoDuongArcs.forEach((arc) => arc.fill(laoDuongColor));
    if (timeDiff < 8 && t < 1) {
      return;
    }
    if (t < 1) {
      let targetSpeed;
      if (t < 0.4) {
        targetSpeed = maxSpeed;
      } else {
        targetSpeed = maxSpeed * easeOutQuart$2(1 - (t - 0.4) / 0.6);
      }
      const easedBlend = easeOutQuart$2(t);
      currentSpeed = currentSpeed * (1 - easedBlend * 0.015) + targetSpeed * (easedBlend * 0.015);
      const rotationAmount = currentSpeed * timeDiff / 1e3;
      currentRotation += isReverse ? -rotationAmount : rotationAmount;
      const currentNormalizedRotation = (currentRotation % 360 + 360) % 360;
      haoGroup.rotation(currentNormalizedRotation);
    } else {
      const finalRotationDiff = normalizedAngle - currentRotation;
      if (Math.abs(finalRotationDiff) > 0.5) {
        currentRotation += finalRotationDiff * 0.15;
        haoGroup.rotation(currentRotation);
      } else {
        haoGroup.rotation(normalizedAngle);
        laoAmArcs.forEach((arc) => arc.fill(colors.fillBlack));
        laoDuongArcs.forEach((arc) => arc.fill(colors.fillWhite));
        anim.stop();
      }
    }
    layer.batchDraw();
  }, layer);
  return anim;
}

const easeOutQuart$1 = (x) => 1 - Math.pow(1 - x, 4);
function createSmoothAnimation(groups, targetAngle, bienTargetAngle, duration = 6e3, onComplete) {
  const { wheelGroup, trigramGroup, outerWheelGroup, layer } = groups;
  wheelGroup.cache();
  trigramGroup.cache();
  outerWheelGroup.cache();
  const startRotation = wheelGroup.rotation();
  let lastTime = 0;
  let currentRotation = startRotation;
  let currentSpeed = 0;
  let currentOuterSpeed = 0;
  const maxSpeed = 3600;
  let resultShown = false;
  const updateOuterOpacity = (opacity) => {
    if (Math.abs(outerWheelGroup.opacity() - opacity) > 1e-3) {
      outerWheelGroup.opacity(opacity);
    }
  };
  const currentOpacity = outerWheelGroup.opacity() ?? 1;
  updateOuterOpacity(currentOpacity);
  const outerFinalAngle = bienTargetAngle !== null ? bienTargetAngle : 0;
  let currentOuterRotation = 0;
  const outerWheelStartDelay = 350;
  let rafId;
  let startTime = null;
  const animate = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const t = Math.min(elapsed / duration, 1);
    const timeDiff = timestamp - lastTime;
    lastTime = timestamp;
    if (timeDiff < 8 && t < 1) {
      rafId = requestAnimationFrame(animate);
      return;
    }
    let targetSpeed;
    if (t < 0.4) {
      targetSpeed = maxSpeed;
    } else {
      targetSpeed = maxSpeed * easeOutQuart$1(1 - (t - 0.4) / 0.6);
    }
    const easedBlend = easeOutQuart$1(t);
    currentSpeed = currentSpeed * (1 - easedBlend * 0.015) + targetSpeed * (easedBlend * 0.015);
    const rotationAmount = currentSpeed * timeDiff / 1e3;
    currentRotation += rotationAmount;
    wheelGroup.rotation(currentRotation);
    trigramGroup.rotation(-currentRotation);
    const elapsedOuter = Math.max(0, elapsed - outerWheelStartDelay);
    if (elapsedOuter > 0) {
      const tOuter = Math.min(elapsedOuter / (duration - outerWheelStartDelay), 1);
      const easedBlendOuter = easeOutQuart$1(tOuter);
      let targetOuterSpeed;
      if (tOuter < 0.4) {
        targetOuterSpeed = -maxSpeed;
      } else {
        targetOuterSpeed = -maxSpeed * easeOutQuart$1(1 - (tOuter - 0.4) / 0.6);
      }
      currentOuterSpeed = currentOuterSpeed * (1 - easedBlendOuter * 0.015) + targetOuterSpeed * (easedBlendOuter * 0.015);
      const outerRotationAmount = currentOuterSpeed * timeDiff / 1e3;
      currentOuterRotation += outerRotationAmount;
      outerWheelGroup.rotation(currentOuterRotation);
      if (tOuter > 0.4) {
        if (bienTargetAngle === null) {
          const fadeOutProgress = Math.min((tOuter - 0.4) / 0.4, 1);
          const easedFadeOut = easeOutQuart$1(fadeOutProgress);
          updateOuterOpacity(Math.max(0, currentOpacity * (1 - easedFadeOut)));
        } else {
          const fadeInProgress = Math.min((tOuter - 0.4) / 0.4, 1);
          const easedFadeIn = easeOutQuart$1(fadeInProgress);
          updateOuterOpacity(Math.min(1, currentOpacity + easedFadeIn));
        }
      }
    }
    const slowSpeedThreshold = 60;
    if (!resultShown && Math.abs(currentSpeed) < slowSpeedThreshold && Math.abs(currentOuterSpeed) < slowSpeedThreshold && t > 0.92) {
      resultShown = true;
      setTimeout(() => {
        onComplete();
      }, 100);
    }
    layer.batchDraw();
    if (t < 1) {
      rafId = requestAnimationFrame(animate);
    } else {
      const finalRotationDiff = targetAngle - currentRotation;
      const finalOuterRotationDiff = outerFinalAngle - currentOuterRotation;
      if (Math.abs(finalRotationDiff) > 0.1 || Math.abs(finalOuterRotationDiff) > 0.1) {
        currentRotation += finalRotationDiff * 0.2;
        currentOuterRotation += finalOuterRotationDiff * 0.2;
        wheelGroup.rotation(currentRotation);
        trigramGroup.rotation(-currentRotation);
        outerWheelGroup.rotation(currentOuterRotation);
        layer.batchDraw();
        rafId = requestAnimationFrame(animate);
      } else {
        wheelGroup.rotation(targetAngle);
        trigramGroup.rotation(-targetAngle);
        outerWheelGroup.rotation(outerFinalAngle);
        wheelGroup.clearCache();
        trigramGroup.clearCache();
        outerWheelGroup.clearCache();
        if (!resultShown) {
          onComplete();
        }
      }
    }
  };
  rafId = requestAnimationFrame(animate);
  return {
    stop: () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        wheelGroup.clearCache();
        trigramGroup.clearCache();
        outerWheelGroup.clearCache();
      }
    }
  };
}

const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);
function findShape(group, name) {
  return group.findOne(`.${name}`);
}
function interpolateColor(color1, color2, factor) {
  const c1 = Konva.Util.getRGB(color1);
  const c2 = Konva.Util.getRGB(color2);
  const r = Math.round(c1.r + factor * (c2.r - c1.r));
  const g = Math.round(c1.g + factor * (c2.g - c1.g));
  const b = Math.round(c1.b + factor * (c2.b - c1.b));
  return `rgb(${r},${g},${b})`;
}
function createYinYangAnimation(group, layer, colors = THEMES.default, speed = 180) {
  let mainAnim = null;
  let stopAnim = null;
  const colorTransitionDuration = 1200;
  const start = () => {
    if (mainAnim) mainAnim.stop();
    if (stopAnim) stopAnim.stop();
    group.rotation(0);
    mainAnim = new Animation((frame) => {
      if (!frame) return;
      const angleDiff = frame.timeDiff * speed / 1e3;
      group.rotate(angleDiff);
      const t = frame.time % (colorTransitionDuration * 2) / colorTransitionDuration;
      const factor = t > 1 ? 2 - t : t;
      const shapes = {
        yin: findShape(group, "yinArc"),
        yang: findShape(group, "yangArc"),
        smallBlack: findShape(group, "smallBlackCircle"),
        smallWhite: findShape(group, "smallWhiteCircle"),
        upperBlack: findShape(group, "upperBlackCircle"),
        lowerWhite: findShape(group, "lowerWhiteCircle")
      };
      if (shapes.yin && shapes.yang && shapes.smallBlack && shapes.smallWhite && shapes.upperBlack && shapes.lowerWhite) {
        shapes.yin.fill(interpolateColor(colors.fillBlack, colors.fillWhite, factor));
        shapes.yang.fill(interpolateColor(colors.fillWhite, colors.fillBlack, factor));
        shapes.smallBlack.fill(interpolateColor(colors.fillBlack, colors.fillWhite, factor));
        shapes.smallWhite.fill(interpolateColor(colors.fillWhite, colors.fillBlack, factor));
        shapes.upperBlack.fill(interpolateColor(colors.fillBlack, colors.fillWhite, factor));
        shapes.lowerWhite.fill(interpolateColor(colors.fillWhite, colors.fillBlack, factor));
      }
    }, layer);
    mainAnim.start();
  };
  const stop = () => {
    if (mainAnim) mainAnim.stop();
    const startRotation = group.rotation();
    const targetRotation = Math.ceil(startRotation / 360) * 360;
    if (targetRotation - startRotation < 1) {
      group.rotation(0);
      return;
    }
    const duration = 1500;
    const shapes = {
      yin: findShape(group, "yinArc"),
      yang: findShape(group, "yangArc"),
      smallBlack: findShape(group, "smallBlackCircle"),
      smallWhite: findShape(group, "smallWhiteCircle"),
      upperBlack: findShape(group, "upperBlackCircle"),
      lowerWhite: findShape(group, "lowerWhiteCircle")
    };
    const startColors = {
      yin: shapes.yin?.fill() || colors.fillBlack,
      yang: shapes.yang?.fill() || colors.fillWhite,
      smallBlack: shapes.smallBlack?.fill() || colors.fillBlack,
      smallWhite: shapes.smallWhite?.fill() || colors.fillWhite,
      upperBlack: shapes.upperBlack?.fill() || colors.fillBlack,
      lowerWhite: shapes.lowerWhite?.fill() || colors.fillWhite
    };
    stopAnim = new Animation((frame) => {
      if (!frame || frame.time >= duration) {
        group.rotation(0);
        if (shapes.yin) shapes.yin.fill(colors.fillBlack);
        if (shapes.yang) shapes.yang.fill(colors.fillWhite);
        if (shapes.smallBlack) shapes.smallBlack.fill(colors.fillBlack);
        if (shapes.smallWhite) shapes.smallWhite.fill(colors.fillWhite);
        if (shapes.upperBlack) shapes.upperBlack.fill(colors.fillBlack);
        if (shapes.lowerWhite) shapes.lowerWhite.fill(colors.fillWhite);
        layer.batchDraw();
        stopAnim?.stop();
        return;
      }
      const t = frame.time / duration;
      const easedT = easeOutQuart(t);
      const newRotation = startRotation + (targetRotation - startRotation) * easedT;
      group.rotation(newRotation);
      if (shapes.yin) shapes.yin.fill(interpolateColor(startColors.yin, colors.fillBlack, easedT));
      if (shapes.yang) shapes.yang.fill(interpolateColor(startColors.yang, colors.fillWhite, easedT));
      if (shapes.smallBlack)
        shapes.smallBlack.fill(interpolateColor(startColors.smallBlack, colors.fillBlack, easedT));
      if (shapes.smallWhite)
        shapes.smallWhite.fill(interpolateColor(startColors.smallWhite, colors.fillWhite, easedT));
      if (shapes.upperBlack)
        shapes.upperBlack.fill(interpolateColor(startColors.upperBlack, colors.fillBlack, easedT));
      if (shapes.lowerWhite)
        shapes.lowerWhite.fill(interpolateColor(startColors.lowerWhite, colors.fillWhite, easedT));
      layer.batchDraw();
    }, layer);
    stopAnim.start();
  };
  return { start, stop };
}

function createHaoWheel({ baseRadius, haoNumber, colors, fontSize }) {
  const haoGroup = new Konva.Group();
  const ratio = CONFIG.CIRCLE_RATIOS[`HAO_${haoNumber}`];
  const config = CONFIG.HAO_CONFIG.CIRCLES[`HAO_${haoNumber}`];
  const nextHaoRatio = haoNumber > 1 ? CONFIG.CIRCLE_RATIOS[`HAO_${haoNumber - 1}`] : CONFIG.CIRCLE_RATIOS.INNER;
  for (let i = 0; i < 64; i++) {
    const haoType = i % 4;
    const startAngle = i * 5.625;
    const arc = new Arc({
      innerRadius: baseRadius * nextHaoRatio + 1,
      outerRadius: baseRadius * ratio,
      angle: CONFIG.HAO_CONFIG.ARC_CONFIG.ANGLE_SPAN,
      rotation: startAngle,
      clockwise: false,
      perfectDrawEnabled: false,
      listening: false
    });
    const numberGroup = new Konva.Group();
    const numberText = new Konva.Text({
      text: haoNumber.toString(),
      fontSize,
      // Use passed fontSize
      fontFamily: CONFIG.HAO_CONFIG.TEXT_CONFIG.FONT_FAMILY,
      align: "center",
      verticalAlign: "middle",
      x: -fontSize * CONFIG.HAO_CONFIG.TEXT_CONFIG.OFFSET_RATIO,
      // Adjust offset based on new size
      y: -fontSize * CONFIG.HAO_CONFIG.TEXT_CONFIG.OFFSET_RATIO,
      perfectDrawEnabled: false,
      listening: false
    });
    let shouldShowNumber = false;
    let textColor = "";
    switch (haoType) {
      case 0:
        arc.fill(colors.fillBlack);
        arc.name(`lao-am-arc-${i} lao-am-arc`);
        textColor = colors.textWhite;
        shouldShowNumber = true;
        break;
      case 1:
        arc.fill(colors.fillGrayLight);
        break;
      case 2:
        arc.fill(colors.fillWhite);
        arc.name(`lao-duong-arc-${i} lao-duong-arc`);
        textColor = colors.textBlack;
        shouldShowNumber = true;
        break;
      case 3:
        arc.fill(colors.fillGrayDark);
        break;
      default:
        arc.fill(colors.fillGrayDark);
        break;
    }
    haoGroup.add(arc);
    if (shouldShowNumber) {
      const textRadius = haoNumber === 1 ? baseRadius * (ratio + nextHaoRatio) / 2 : baseRadius * (ratio + nextHaoRatio) / 2;
      numberGroup.position({
        x: Math.cos((startAngle + 2.8125) * Math.PI / 180) * textRadius,
        y: Math.sin((startAngle + 2.8125) * Math.PI / 180) * textRadius
      });
      numberGroup.rotation(startAngle + CONFIG.HAO_CONFIG.SPACING.ROTATION_OFFSET);
      numberText.fill(textColor);
      if (haoType === 0) numberText.name(`lao-am-text-${i}`);
      if (haoType === 2) numberText.name(`lao-duong-text-${i}`);
      numberGroup.add(numberText);
      haoGroup.add(numberGroup);
    }
  }
  if (haoNumber > 1) {
    for (let i = 0; i < 64; i++) {
      const angle = i * 5.625 * Math.PI / 180;
      const startX = Math.cos(angle) * baseRadius * ratio;
      const startY = Math.sin(angle) * baseRadius * ratio;
      const endX = Math.cos(angle) * baseRadius * nextHaoRatio;
      const endY = Math.sin(angle) * baseRadius * nextHaoRatio;
      const line = new Konva.Line({
        points: [startX, startY, endX, endY],
        stroke: colors.stroke,
        strokeWidth: 0.5,
        perfectDrawEnabled: false,
        // Optimize
        listening: false
        // Optimize
      });
      haoGroup.add(line);
    }
  } else {
    const innerCircleRatio = CONFIG.CIRCLE_RATIOS.INNER;
    for (let i = 0; i < 64; i++) {
      const angle = i * 5.625 * Math.PI / 180;
      const startX = Math.cos(angle) * baseRadius * ratio;
      const startY = Math.sin(angle) * baseRadius * ratio;
      const endX = Math.cos(angle) * baseRadius * innerCircleRatio;
      const endY = Math.sin(angle) * baseRadius * innerCircleRatio;
      const line = new Konva.Line({
        points: [startX, startY, endX, endY],
        stroke: colors.stroke,
        strokeWidth: 0.5,
        perfectDrawEnabled: false,
        // Optimize
        listening: false
        // Optimize
      });
      haoGroup.add(line);
    }
  }
  const circle = new Circle({
    radius: baseRadius * ratio,
    stroke: colors.stroke,
    strokeWidth: config.LINE_WIDTH,
    dash: config.DASH,
    listening: false
  });
  haoGroup.add(circle);
  return haoGroup;
}

function createHexagramWheel({ centerX, centerY, baseRadius, fontSizes, colors }) {
  const wheelGroup = new Group({
    x: centerX,
    y: centerY,
    offset: { x: 0, y: 0 },
    rotation: 0
  });
  const outerCircle = new Circle({
    radius: baseRadius * CONFIG.CIRCLE_RATIOS.OUTER,
    stroke: colors.stroke,
    strokeWidth: 1
  });
  wheelGroup.add(outerCircle);
  for (let i = 0; i < 64; i++) {
    const angle = i * 5.625 * Math.PI / 180;
    const startX = Math.cos(angle) * baseRadius * CONFIG.CIRCLE_RATIOS.OUTER;
    const startY = Math.sin(angle) * baseRadius * CONFIG.CIRCLE_RATIOS.OUTER;
    const endX = Math.cos(angle) * baseRadius * CONFIG.CIRCLE_RATIOS.HAO_6;
    const endY = Math.sin(angle) * baseRadius * CONFIG.CIRCLE_RATIOS.HAO_6;
    const line = new Line({
      points: [startX, startY, endX, endY],
      stroke: colors.stroke,
      strokeWidth: 1,
      perfectDrawEnabled: false,
      // Optimize
      listening: false
      // Optimize
    });
    wheelGroup.add(line);
  }
  const hexagrams = ICHING.map((que, index) => ({
    symbol: que[0],
    number: index + 1
  }));
  hexagrams.forEach((hexagram, i) => {
    const queAngle = (i * 5.625 - 90 + 2.8125) * Math.PI / 180;
    const numberAngle = (i * 5.625 - 90 + 5.625 / 2) * Math.PI / 180;
    const radius = baseRadius * CONFIG.TEXT_POSITIONS.HEXAGRAM;
    const x = Math.cos(queAngle) * radius;
    const y = Math.sin(queAngle) * radius;
    const numberRadius = baseRadius * CONFIG.TEXT_POSITIONS.NUMBER;
    const numberX = Math.cos(numberAngle) * numberRadius;
    const numberY = Math.sin(numberAngle) * numberRadius;
    const hexGroup = new Group({
      x,
      y,
      rotation: i * 5.625 + 2.8125
    });
    const symbolText = new Text({
      text: hexagram.symbol,
      fontSize: fontSizes.INNER_HEXAGRAM,
      fontFamily: "Arial",
      fill: colors.textBlack,
      align: "center",
      offsetX: fontSizes.INNER_HEXAGRAM / 2,
      offsetY: fontSizes.INNER_HEXAGRAM / 2,
      perfectDrawEnabled: false,
      // Optimize
      listening: false
      // Optimize
    });
    const numberGroup = new Group({
      x: numberX,
      y: numberY,
      rotation: i * 5.625 + 5.625 / 2
    });
    const numberText = new Text({
      text: hexagram.number.toString(),
      fontSize: fontSizes.INNER_NUMBER,
      fontFamily: "Arial",
      fill: colors.textBlack,
      align: "center",
      offsetX: fontSizes.INNER_NUMBER / 2,
      offsetY: fontSizes.INNER_NUMBER / 2,
      perfectDrawEnabled: false,
      // Optimize
      listening: false
      // Optimize
    });
    hexGroup.add(symbolText);
    numberGroup.add(numberText);
    wheelGroup.add(hexGroup, numberGroup);
  });
  return wheelGroup;
}
function createOuterHexagramWheel({ centerX, centerY, baseRadius, fontSizes, colors }) {
  const outerWheelGroup = new Group({
    x: centerX,
    y: centerY,
    offset: { x: 0, y: 0 },
    rotation: 0
  });
  const outerMostCircle = new Circle({
    radius: baseRadius * CONFIG.CIRCLE_RATIOS.OUTER_MOST,
    stroke: colors.stroke,
    strokeWidth: 1
  });
  outerWheelGroup.add(outerMostCircle);
  for (let i = 0; i < 64; i++) {
    const angle = i * 5.625 * Math.PI / 180;
    const startX = Math.cos(angle) * baseRadius * CONFIG.CIRCLE_RATIOS.OUTER_MOST;
    const startY = Math.sin(angle) * baseRadius * CONFIG.CIRCLE_RATIOS.OUTER_MOST;
    const endX = Math.cos(angle) * baseRadius * CONFIG.CIRCLE_RATIOS.OUTER;
    const endY = Math.sin(angle) * baseRadius * CONFIG.CIRCLE_RATIOS.OUTER;
    const line = new Line({
      points: [startX, startY, endX, endY],
      stroke: colors.stroke,
      strokeWidth: 1,
      perfectDrawEnabled: false,
      // Optimize
      listening: false
      // Optimize
    });
    outerWheelGroup.add(line);
  }
  const hexagrams = ICHING.map((que, index) => ({
    symbol: que[0],
    number: index + 1
  }));
  hexagrams.forEach((hexagram, i) => {
    const queAngle = (i * 5.625 - 90 + 2.8125) * Math.PI / 180;
    const numberAngle = (i * 5.625 - 90 + 5.625 / 2) * Math.PI / 180;
    const radius = baseRadius * CONFIG.TEXT_POSITIONS.OUTER_HEXAGRAM;
    const x = Math.cos(queAngle) * radius;
    const y = Math.sin(queAngle) * radius;
    const numberRadius = baseRadius * CONFIG.TEXT_POSITIONS.OUTER_NUMBER;
    const numberX = Math.cos(numberAngle) * numberRadius;
    const numberY = Math.sin(numberAngle) * numberRadius;
    const hexGroup = new Group({
      x,
      y,
      rotation: i * 5.625 + 2.8125
    });
    const symbolText = new Text({
      text: hexagram.symbol,
      fontSize: fontSizes.OUTER_HEXAGRAM,
      fontFamily: "Arial",
      fill: colors.textBlack,
      align: "center",
      offsetX: fontSizes.OUTER_HEXAGRAM / 2,
      offsetY: fontSizes.OUTER_HEXAGRAM / 2,
      perfectDrawEnabled: false,
      // Optimize
      listening: false
      // Optimize
    });
    const numberGroup = new Group({
      x: numberX,
      y: numberY,
      rotation: i * 5.625 + 5.625 / 2
    });
    const numberText = new Text({
      text: hexagram.number.toString(),
      fontSize: fontSizes.OUTER_NUMBER,
      fontFamily: "Arial",
      fill: colors.textBlack,
      align: "center",
      offsetX: fontSizes.OUTER_NUMBER / 2,
      offsetY: fontSizes.OUTER_NUMBER / 2,
      perfectDrawEnabled: false,
      // Optimize
      listening: false
      // Optimize
    });
    hexGroup.add(symbolText);
    numberGroup.add(numberText);
    outerWheelGroup.add(hexGroup, numberGroup);
  });
  return outerWheelGroup;
}

function toBase64(str) {
  try {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) => String.fromCharCode(parseInt(p1, 16))));
  } catch (e) {
    return "";
  }
}
const CopySection = ({ title, content, btnId, onCopy, theme = "default" }) => /* @__PURE__ */ jsx("div", { className: "mt-4 md:mt-6", children: /* @__PURE__ */ jsxs(
  "div",
  {
    className: `rounded-md border-[0.5px] ${theme === "tet" ? "border-red-300 bg-red-50" : "border-gray-300 bg-gray-100 dark:bg-gray-950"}`,
    children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `flex h-9 items-center justify-between rounded-t-md px-4 py-2 font-sans text-xs select-none ${theme === "tet" ? "bg-red-200 text-red-900" : "bg-gray-200 text-black/85 dark:bg-gray-800"}`,
          children: [
            /* @__PURE__ */ jsx("span", { children: title }),
            /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-1", onClick: () => onCopy(content, btnId), children: [
              /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 20,
                  height: 20,
                  fill: "none",
                  viewBox: "0 0 24 24",
                  className: "icon-sm",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      fill: "currentColor",
                      fillRule: "evenodd",
                      d: "M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z",
                      clipRule: "evenodd"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx("span", { id: btnId, className: "cursor-pointer pl-2 font-sans text-sm", children: "Click Copy - Lấy Text" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "textarea",
        {
          className: `h-[120px] w-full resize-none overflow-y-auto border-none p-4 text-left font-mono text-xs leading-normal focus:outline-hidden md:h-[140px] ${theme === "tet" ? "bg-red-50 text-red-800 focus:bg-yellow-50" : "bg-gray-100 text-gray-600 focus:bg-yellow-100 dark:bg-gray-900 dark:text-gray-400 dark:focus:bg-yellow-900"}`,
          readOnly: true,
          value: content
        }
      ) })
    ]
  }
) });
const ResultDisplay = ({
  showResult,
  isSpinning,
  result,
  prefixContent,
  theme = "default"
}) => {
  const [copyContent, setCopyContent] = useState("");
  useEffect(() => {
    if (showResult && result) {
      let content = "";
      if (prefixContent) {
        content += prefixContent + "\n\n";
      }
      content += `=== QUẺ CHỦ ===
`;
      content += `Quẻ số: ${result.queGocIndex + 1}
`;
      content += `Tên quẻ: ${result.queTen}
`;
      content += `Biểu tượng: ${result.queIcon}
`;
      content += `Ý nghĩa: ${result.queMeaning}

`;
      content += `=== HÀO ĐỘNG ===
`;
      if (result.haoDong.length > 0) {
        result.haoDong.forEach((hao) => {
          const haoType = hao.type === "laoAm" ? "Âm Động" : "Dương Động";
          content += `Hào ${hao.vi_tri}: ${haoType}
`;
        });
      } else {
        content += `Không có hào động
`;
      }
      content += `
`;
      content += `=== QUẺ BIẾN ===
`;
      if (result.queBien) {
        const queBienIndex = ICHING.findIndex((q) => q[0] === result.queBien?.queIcon);
        content += `Quẻ số: ${queBienIndex + 1}
`;
        content += `Tên quẻ: ${result.queBien.queTen}
`;
        content += `Biểu tượng: ${result.queBien.queIcon}
`;
        content += `Ý nghĩa: ${result.queBien.queMeaning}
`;
      } else {
        content += `Không có quẻ biến
`;
      }
      setCopyContent(toBase64(content));
    } else {
      setCopyContent("");
    }
  }, [showResult, result]);
  const handleCopyClick = (content, btnId) => {
    const btnCopy = document.getElementById(btnId);
    if (!btnCopy) return;
    const originalText = btnCopy.textContent;
    const encodedContent = content;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(encodedContent).then(() => {
        btnCopy.textContent = "Đã copy";
        setTimeout(() => {
          btnCopy.textContent = originalText;
        }, 2e3);
      }).catch((err) => {
        console.warn("Clipboard API failed, trying fallback:", err);
        fallbackCopyTextToClipboard(encodedContent, btnCopy, originalText);
      });
    } else {
      fallbackCopyTextToClipboard(encodedContent, btnCopy, originalText);
    }
  };
  const fallbackCopyTextToClipboard = (text, btnElement, originalText) => {
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
          btnElement.textContent = "Đã copy";
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
                btnElement.textContent = "Đã copy";
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
        btnElement.textContent = "Copy thất bại";
        setTimeout(() => {
          btnElement.textContent = originalText;
        }, 2e3);
      }
      if (document.body.contains(textArea)) {
        document.body.removeChild(textArea);
      }
    }, 0);
  };
  return /* @__PURE__ */ jsxs("div", { className: "mt-4 w-full md:mt-8", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `grid min-h-[250px] grid-cols-1 gap-2 rounded-lg text-center shadow-lg md:min-h-[400px] md:grid-cols-3 md:gap-4 ${theme === "tet" ? "bg-red-50 text-red-900" : "bg-white text-gray-800 dark:bg-gray-800 dark:text-white"}`,
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `border-b p-4 md:border-r md:border-b-0 md:p-8 ${theme === "tet" ? "border-red-200" : "border-gray-300"}`,
              children: /* @__PURE__ */ jsx("div", { className: "min-h-[200px] md:min-h-[400px]", children: showResult && result ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("div", { className: "mb-2 text-lg md:mb-4 md:text-xl", children: "Quẻ Chủ" }),
                /* @__PURE__ */ jsxs("div", { className: `mb-2 text-base md:text-lg ${theme === "tet" ? "text-red-700" : "text-blue-600"}`, children: [
                  "Quẻ số ",
                  result.queGocIndex + 1
                ] }),
                /* @__PURE__ */ jsx("div", { className: "mb-2 text-6xl md:mb-4 md:text-7xl", children: result.queIcon }),
                /* @__PURE__ */ jsx("div", { className: "mb-2 text-3xl font-bold md:mb-4", children: result.queTen }),
                /* @__PURE__ */ jsx("div", { className: "px-2 text-2xl md:px-0", children: result.queMeaning })
              ] }) : /* @__PURE__ */ jsx("div", { className: `text-lg md:text-xl ${theme === "tet" ? "text-red-400" : "text-gray-500"}`, children: isSpinning ? "Đang xoay..." : "Chưa có kết quả" }) })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: `border-b p-4 md:border-b-0 md:p-8 ${theme === "tet" ? "border-red-200" : "border-gray-300"}`, children: /* @__PURE__ */ jsxs("div", { className: "min-h-[120px] md:min-h-[400px]", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-3 text-lg md:mb-6", children: "Hào Động" }),
            showResult && result && result.haoDong.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-1 md:space-y-2", children: result.haoDong.map((hao) => /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[200px] text-left text-base md:w-52 md:text-lg", children: [
              /* @__PURE__ */ jsxs("span", { className: "mr-2 inline-block w-12 text-sm md:w-14 md:text-base", children: [
                "Hào ",
                hao.vi_tri,
                ":"
              ] }),
              hao.type === "laoAm" ? /* @__PURE__ */ jsx("span", { className: `text-2xl ${theme === "tet" ? "text-red-700" : "text-gray-700"}`, children: "Âm Động" }) : /* @__PURE__ */ jsx("span", { className: "text-2xl text-red-700", children: "Dương Động" })
            ] }, hao.vi_tri)) }) : /* @__PURE__ */ jsx("div", { className: `text-base md:text-lg ${theme === "tet" ? "text-red-400" : "text-gray-500"}`, children: isSpinning ? "Đang xoay..." : "Không có hào động" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: `p-4 md:border-l md:p-8 ${theme === "tet" ? "border-red-200" : "border-gray-300"}`, children: /* @__PURE__ */ jsx("div", { className: "min-h-[200px] md:min-h-[400px]", children: showResult && result?.queBien ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "mb-2 text-lg md:mb-4 md:text-xl", children: "Quẻ Biến" }),
            /* @__PURE__ */ jsxs("div", { className: `mb-2 text-base md:text-lg ${theme === "tet" ? "text-red-700" : "text-blue-600"}`, children: [
              "Quẻ số ",
              ICHING.findIndex((q) => q[0] === result.queBien?.queIcon) + 1
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mb-2 text-4xl md:mb-4 md:text-7xl", children: result.queBien.queIcon }),
            /* @__PURE__ */ jsx("div", { className: "mb-2 text-3xl font-bold md:mb-4", children: result.queBien.queTen }),
            /* @__PURE__ */ jsx("div", { className: "px-2 text-2xl md:px-0", children: result.queBien.queMeaning })
          ] }) : /* @__PURE__ */ jsx("div", { className: `text-base md:text-lg ${theme === "tet" ? "text-red-400" : "text-gray-500"}`, children: isSpinning ? "Đang xoay..." : "Không có quẻ biến" }) }) })
        ]
      }
    ),
    showResult && result && /* @__PURE__ */ jsx(
      CopySection,
      {
        title: "Kết quả Gieo Quẻ dùng cho AI",
        content: copyContent,
        btnId: "btnCopyResult",
        onCopy: handleCopyClick,
        theme
      }
    )
  ] });
};

function createYinYang({ x, y, radius, colors }) {
  const yinYangGroup = new Group({ x, y });
  const yinArc = new Arc({
    x: 0,
    y: 0,
    innerRadius: 0,
    outerRadius: radius,
    angle: 180,
    rotation: -90,
    fill: colors.fillBlack,
    name: "yinArc"
  });
  const yangArc = new Arc({
    x: 0,
    y: 0,
    innerRadius: 0,
    outerRadius: radius,
    angle: 180,
    rotation: 90,
    fill: colors.fillWhite,
    name: "yangArc"
  });
  const smallBlackCircle = new Circle({
    x: 0,
    y: -radius / 2,
    radius: radius / 6,
    fill: colors.fillBlack,
    name: "smallBlackCircle"
  });
  const smallWhiteCircle = new Circle({
    x: 0,
    y: radius / 2,
    radius: radius / 6,
    fill: colors.fillWhite,
    name: "smallWhiteCircle"
  });
  const lowerWhiteCircle = new Circle({
    x: 0,
    y: -radius / 2,
    radius: radius / 2,
    fill: colors.fillWhite,
    name: "lowerWhiteCircle"
  });
  const upperBlackCircle = new Circle({
    x: 0,
    y: radius / 2,
    radius: radius / 2,
    fill: colors.fillBlack,
    name: "upperBlackCircle"
  });
  yinYangGroup.add(yinArc, yangArc, upperBlackCircle, lowerWhiteCircle, smallBlackCircle, smallWhiteCircle);
  return yinYangGroup;
}

function debounce(func, waitFor) {
  let timeout = null;
  const debounced = (...args) => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };
  return debounced;
}
function getDefaultSize() {
  return {
    width: 850,
    height: 850
  };
}
function useWindowSize() {
  const [size, setSize] = useState(getDefaultSize());
  useEffect(() => {
    if (typeof window === "undefined") return;
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    updateSize();
    const debouncedUpdateSize = debounce(updateSize, 250);
    window.addEventListener("resize", debouncedUpdateSize);
    return () => window.removeEventListener("resize", debouncedUpdateSize);
  }, []);
  return size;
}

const IChingDiagram = ({ prefixContent, theme = "default" }) => {
  const containerRef = useRef(null);
  const { width: windowWidth } = useWindowSize();
  const [canvasSize, setCanvasSize] = useState(calculateCanvasSize(windowWidth));
  const [fontSizes, setFontSizes] = useState(calculateFontSizes(canvasSize.width));
  const [isSpinning, setIsSpinning] = useState(false);
  const [_stage, setStage] = useState(null);
  const [wheelGroup, setWheelGroup] = useState(null);
  const [layer, setLayer] = useState(null);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [outerWheelGroup, setOuterWheelGroup] = useState(null);
  const colors = THEMES[theme] || THEMES.default;
  const trigramGroupsRef = useRef([]);
  const haoGroupsRef = useRef([]);
  const innerCircleRef = useRef(null);
  const haoAnimationsRef = useRef([]);
  const wheelAnimationRef = useRef(null);
  const yinYangRef = useRef(null);
  const yinYangAnimationRef = useRef(null);
  const spinHaoGroups = useCallback(
    (haoResults) => {
      const haoGroups = haoGroupsRef.current;
      if (!haoGroups || !haoGroups.length || !layer) return;
      haoAnimationsRef.current.forEach((anim) => {
        if (anim && anim.stop) {
          anim.stop();
        }
      });
      haoAnimationsRef.current = [];
      const normalizedHaoResults = haoResults.map((h) => ({
        type: h.type || "không động",
        viTri: h.viTri || h.vi_tri
      }));
      normalizedHaoResults.sort((a, b) => Number(a.viTri) - Number(b.viTri)).forEach((haoResult, index) => {
        const haoIndex = Number(haoResult.viTri) - 1;
        const haoGroup = haoGroups[haoIndex];
        if (haoGroup) {
          const delay = index * 150;
          setTimeout(() => {
            const anim = createHaoAnimation(haoGroup, layer, haoResult, colors);
            haoAnimationsRef.current.push(anim);
            anim.start();
          }, delay);
        }
      });
    },
    [layer]
  );
  const handleSpin = useCallback(() => {
    if (isSpinning || !wheelGroup || !layer || !outerWheelGroup || !yinYangRef.current) return;
    setIsSpinning(true);
    setShowResult(false);
    if (wheelAnimationRef.current) wheelAnimationRef.current.stop();
    if (yinYangAnimationRef.current) yinYangAnimationRef.current.stop();
    haoAnimationsRef.current.forEach((anim) => anim.stop());
    haoAnimationsRef.current = [];
    yinYangRef.current.rotation(0);
    const yinYangAnim = createYinYangAnimation(yinYangRef.current, layer, colors);
    yinYangAnim.start();
    yinYangAnimationRef.current = yinYangAnim;
    setTimeout(() => {
      const newResult = gieoQueKinhDich();
      spinHaoGroups(newResult.haoResults);
      const totalHaoDelay = newResult.haoResults.length * 150;
      const mainWheelStartDelay = totalHaoDelay + 150;
      setTimeout(() => {
        const targetAngle = calculateTargetAngle(newResult.queGocIndex);
        const bienTargetAngle = newResult.queBien ? calculateTargetAngle(ICHING.findIndex((q) => q[0] === newResult.queBien?.queIcon)) : null;
        const anim = createSmoothAnimation(
          { wheelGroup, trigramGroup: new Group(), outerWheelGroup, layer },
          targetAngle,
          bienTargetAngle,
          6e3,
          () => {
            setIsSpinning(false);
            setResult(newResult);
            setShowResult(true);
            if (yinYangAnimationRef.current) {
              yinYangAnimationRef.current.stop();
            }
          }
        );
        wheelAnimationRef.current = anim;
      }, mainWheelStartDelay);
    }, 200);
  }, [isSpinning, wheelGroup, layer, outerWheelGroup, spinHaoGroups]);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const newSize = calculateCanvasSize(windowWidth);
    setCanvasSize(newSize);
    setFontSizes(calculateFontSizes(newSize.width));
  }, [windowWidth]);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const container = containerRef.current;
    if (!container) return;
    trigramGroupsRef.current = [];
    haoGroupsRef.current = [];
    haoAnimationsRef.current.forEach((anim) => {
      if (anim && anim.stop) {
        anim.stop();
      }
    });
    haoAnimationsRef.current = [];
    const width = canvasSize.width;
    const height = canvasSize.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const baseRadius = width * CONFIG.BASE_RADIUS_RATIO;
    const newStage = new Stage({
      container: "canvas-container",
      width,
      height,
      pixelRatio: 1
      // Optimize for mobile performance
    });
    const staticLayer = new Layer();
    const dynamicLayer = new Layer();
    const arrowStartY = centerY - baseRadius * CONFIG.CIRCLE_RATIOS.INNER;
    const arrow = new Arrow({
      points: [centerX, arrowStartY, centerX, centerY - baseRadius * CONFIG.ARROW.LENGTH],
      pointerLength: CONFIG.ARROW.POINTER_LENGTH,
      pointerWidth: CONFIG.ARROW.POINTER_WIDTH,
      fill: theme === "tet" ? "#FFD700" : "#FF0000",
      // Gold for Tet, Red for default
      stroke: theme === "tet" ? "#FFD700" : "#FF0000",
      strokeWidth: CONFIG.ARROW.STROKE_WIDTH,
      opacity: 0.5,
      listening: false
    });
    staticLayer.add(arrow);
    const newWheelGroup = createHexagramWheel({
      centerX,
      centerY,
      baseRadius,
      fontSizes,
      colors
    });
    for (let i = 1; i <= 6; i++) {
      const trigramGroup = new Group({
        x: centerX,
        y: centerY
      });
      const haoGroup = createHaoWheel({
        baseRadius,
        haoNumber: i,
        colors,
        fontSize: fontSizes.HAO_NUMBERS[i]
        // Pass specific font size for this ring
      });
      trigramGroup.add(haoGroup);
      dynamicLayer.add(trigramGroup);
      trigramGroupsRef.current.push(trigramGroup);
      haoGroupsRef.current.push(haoGroup);
    }
    const innerCircle = new Circle({
      x: centerX,
      y: centerY,
      radius: baseRadius * CONFIG.CIRCLE_RATIOS.INNER,
      stroke: colors.stroke,
      strokeWidth: 1,
      listening: false
    });
    innerCircleRef.current = innerCircle;
    dynamicLayer.add(innerCircle);
    const yinYangSymbol = createYinYang({
      x: centerX,
      y: centerY,
      radius: baseRadius * CONFIG.CIRCLE_RATIOS.INNER,
      colors
    });
    yinYangRef.current = yinYangSymbol;
    dynamicLayer.add(yinYangSymbol);
    const newOuterWheelGroup = createOuterHexagramWheel({
      centerX,
      centerY,
      baseRadius,
      fontSizes,
      colors
    });
    dynamicLayer.add(newWheelGroup);
    dynamicLayer.add(newOuterWheelGroup);
    newStage.add(staticLayer, dynamicLayer);
    setStage(newStage);
    setLayer(dynamicLayer);
    setWheelGroup(newWheelGroup);
    setOuterWheelGroup(newOuterWheelGroup);
    return () => {
      haoAnimationsRef.current.forEach((anim) => {
        if (anim && anim.stop) {
          anim.stop();
        }
      });
      haoAnimationsRef.current = [];
      if (wheelAnimationRef.current) {
        wheelAnimationRef.current.stop();
      }
      wheelAnimationRef.current = null;
      if (yinYangAnimationRef.current) {
        yinYangAnimationRef.current.stop();
      }
      yinYangAnimationRef.current = null;
      newStage.destroy();
    };
  }, [canvasSize, fontSizes, theme]);
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex min-h-[calc(100vh-4rem)] w-full max-w-[1200px] flex-col items-center justify-start p-4 max-md:p-0 md:p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", style: { width: canvasSize.width, height: canvasSize.height }, children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            ref: containerRef,
            id: "canvas-container",
            className: `relative h-full w-full rounded-lg ${theme === "tet" ? "bg-transparent" : "bg-white"} [&>canvas]:absolute [&>canvas]:top-0 [&>canvas]:left-0`
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleSpin,
            disabled: isSpinning,
            className: `absolute top-1/2 left-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-2 border-gray-300 opacity-0 shadow-lg transition-all disabled:cursor-not-allowed max-md:size-20 md:h-48 md:w-48 ${isSpinning ? "bg-black" : "cursor-pointer bg-white hover:bg-gray-50"}`,
            children: /* @__PURE__ */ jsx("span", { className: `text-lg font-bold md:text-2xl ${isSpinning ? "text-white" : "text-gray-800"}`, children: "XOAY" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        ResultDisplay,
        {
          showResult,
          isSpinning,
          result,
          prefixContent,
          theme
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pt-10 text-center font-sans text-xl", children: [
      "Ấn copy lấy kết quả bên trên và mở trợ lý bên dưới để gửi kết quả đến trợ lý.",
      /* @__PURE__ */ jsx("div", { className: "flex justify-center py-5", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: GEMINI_AI_LINKS.GIEO_QUE,
          target: "_blank",
          className: "fire-btn group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl md:text-xl",
          children: [
            /* @__PURE__ */ jsx("svg", { className: "h-6 w-6 shrink-0 animate-pulse", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M12 23c-3.6 0-8-2.4-8-7.7 0-3.4 1.3-5.5 2.8-7.8C8.3 5.2 10 3.2 10.8 0c1.5 3.2 1.2 5.5.8 6.5-.5 1.3-.2 2.5.7 3.4.7.7 1.7 1 2.7.8-.5 2.5-2.2 3.6-2.2 3.6s2.5-.3 3.7-2.5c.7-1.3 1-2.8 1-4.3.9 1.2 1.5 2.7 1.8 4C20.5 16.5 18.6 23 12 23z"
              }
            ) }),
            /* @__PURE__ */ jsxs("span", { children: [
              "Mở trợ lý Tinh Mệnh Đồ",
              /* @__PURE__ */ jsx("br", { className: "sm:hidden" }),
              " Kinh Dịch & Dự Đoán"
            ] }),
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: "h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "text-base text-gray-600", children: "trên nền tảng Gemini để đặt câu hỏi." }),
      /* @__PURE__ */ jsxs(
        "span",
        {
          className: "text-md mt-2 inline-block italic",
          children: [
            "Nếu không copy bằng nút được có thể ",
            /* @__PURE__ */ jsx("strong", { children: "bôi đen" }),
            " rồi ",
            /* @__PURE__ */ jsx("strong", { children: "copy" }),
            " dữ liệu trong kết quả."
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 w-full max-w-2xl", children: /* @__PURE__ */ jsx(SEOInternalLinksReact, {}) })
  ] });
};

const TetIcons = {
  // Hoa Mai (Yellow Apricot Blossom) - Five petals, rounded
  MaiFlower: (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", fill: "currentColor", ...props, children: [
    /* @__PURE__ */ jsx("path", { d: "M50 50 L50 20 Q60 10 70 30 Q80 40 50 50 Z", transform: "rotate(0 50 50)", fill: "#FFD700" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 L80 50 Q90 60 70 80 Q60 90 50 50 Z", transform: "rotate(0 50 50)", fill: "#FFD700" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 L50 80 Q40 90 30 70 Q20 60 50 50 Z", transform: "rotate(0 50 50)", fill: "#FFD700" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 L20 50 Q10 40 30 20 Q40 10 50 50 Z", transform: "rotate(0 50 50)", fill: "#FFD700" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 L35 25 Q30 10 50 15 Q70 10 65 25 Z", transform: "rotate(45 50 50)", fill: "#FFD700" }),
    /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "8", fill: "#FF8F00" }),
    /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "10", stroke: "#E65100", strokeWidth: "1", fill: "none", opacity: "0.3" })
  ] }),
  // Hoa Đào (Peach Blossom) - Pointed petals, more delicate
  PeachBlossom: (props) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", fill: "currentColor", ...props, children: /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx("path", { d: "M50 50 C50 50 40 20 50 10 C60 20 50 50 50 50", fill: "#FFCDD2" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 C50 50 80 40 90 50 C80 60 50 50 50 50", fill: "#FFCDD2" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 C50 50 60 80 50 90 C40 80 50 50 50 50", fill: "#FFCDD2" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 C50 50 20 60 10 50 C20 40 50 50 50 50", fill: "#FFCDD2" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 C50 50 25 30 20 20 C35 25 50 50 50 50", fill: "#FFCDD2" }),
    /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "5", fill: "#C2185B" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 L50 40", stroke: "#880E4F", strokeWidth: "1" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 L60 50", stroke: "#880E4F", strokeWidth: "1" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 L50 60", stroke: "#880E4F", strokeWidth: "1" }),
    /* @__PURE__ */ jsx("path", { d: "M50 50 L40 50", stroke: "#880E4F", strokeWidth: "1" })
  ] }) }),
  // Cành Đào Sum Xuê (Lush Peach Branch)
  PeachBranchLush: (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 300 200", fill: "none", ...props, children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M0 200 C 50 150, 150 150, 250 50 C 280 20, 290 10, 300 0",
        stroke: "#5D4037",
        strokeWidth: "6",
        strokeLinecap: "round"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M100 160 C 130 120, 150 80, 180 60", stroke: "#5D4037", strokeWidth: "4", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M180 100 C 220 100, 240 120, 260 140", stroke: "#5D4037", strokeWidth: "3", strokeLinecap: "round" }),
    /* @__PURE__ */ jsxs("g", { fill: "#F48FB1", children: [
      /* @__PURE__ */ jsx("circle", { cx: "50", cy: "180", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "60", cy: "170", r: "6" }),
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "160", r: "10" }),
      /* @__PURE__ */ jsx("circle", { cx: "115", cy: "150", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "150", cy: "120", r: "9" }),
      /* @__PURE__ */ jsx("circle", { cx: "165", cy: "110", r: "7" }),
      /* @__PURE__ */ jsx("circle", { cx: "200", cy: "80", r: "10" }),
      /* @__PURE__ */ jsx("circle", { cx: "220", cy: "70", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "250", cy: "50", r: "11" }),
      /* @__PURE__ */ jsx("circle", { cx: "270", cy: "40", r: "9" }),
      /* @__PURE__ */ jsx("circle", { cx: "290", cy: "20", r: "7" }),
      /* @__PURE__ */ jsx("circle", { cx: "180", cy: "60", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "260", cy: "140", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "240", cy: "120", r: "7" })
    ] }),
    /* @__PURE__ */ jsxs("g", { fill: "#C2185B", children: [
      /* @__PURE__ */ jsx("circle", { cx: "50", cy: "180", r: "3" }),
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "160", r: "3" }),
      /* @__PURE__ */ jsx("circle", { cx: "150", cy: "120", r: "3" }),
      /* @__PURE__ */ jsx("circle", { cx: "200", cy: "80", r: "3" }),
      /* @__PURE__ */ jsx("circle", { cx: "250", cy: "50", r: "3" })
    ] })
  ] }),
  // Cành Mai Sum Xuê (Lush Ochna Branch)
  MaiBranchLush: (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 300 200", fill: "none", ...props, children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M0 200 C 50 150, 150 150, 250 50 C 280 20, 290 10, 300 0",
        stroke: "#5D4037",
        strokeWidth: "6",
        strokeLinecap: "round"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M80 170 C 120 140, 140 100, 160 80", stroke: "#5D4037", strokeWidth: "4", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M160 110 C 200 110, 220 130, 240 150", stroke: "#5D4037", strokeWidth: "3", strokeLinecap: "round" }),
    /* @__PURE__ */ jsxs("g", { fill: "#FFD700", children: [
      /* @__PURE__ */ jsx("circle", { cx: "40", cy: "190", r: "9" }),
      /* @__PURE__ */ jsx("circle", { cx: "80", cy: "170", r: "11" }),
      /* @__PURE__ */ jsx("circle", { cx: "95", cy: "160", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "130", cy: "130", r: "10" }),
      /* @__PURE__ */ jsx("circle", { cx: "160", cy: "110", r: "12" }),
      /* @__PURE__ */ jsx("circle", { cx: "180", cy: "100", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "210", cy: "70", r: "11" }),
      /* @__PURE__ */ jsx("circle", { cx: "250", cy: "50", r: "12" }),
      /* @__PURE__ */ jsx("circle", { cx: "270", cy: "30", r: "9" }),
      /* @__PURE__ */ jsx("circle", { cx: "290", cy: "10", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "160", cy: "80", r: "9" }),
      /* @__PURE__ */ jsx("circle", { cx: "240", cy: "150", r: "9" }),
      /* @__PURE__ */ jsx("circle", { cx: "220", cy: "130", r: "7" })
    ] }),
    /* @__PURE__ */ jsxs("g", { fill: "#E65100", children: [
      /* @__PURE__ */ jsx("circle", { cx: "80", cy: "170", r: "3" }),
      /* @__PURE__ */ jsx("circle", { cx: "160", cy: "110", r: "3" }),
      /* @__PURE__ */ jsx("circle", { cx: "250", cy: "50", r: "3" })
    ] })
  ] }),
  // Bánh Chưng (Square Sticky Rice Cake)
  BanhChung: (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", fill: "currentColor", ...props, children: [
    /* @__PURE__ */ jsx("rect", { x: "10", y: "10", width: "80", height: "80", rx: "4", fill: "#689F38", stroke: "#33691E", strokeWidth: "2" }),
    /* @__PURE__ */ jsx("line", { x1: "50", y1: "10", x2: "50", y2: "90", stroke: "#C5E1A5", strokeWidth: "2" }),
    /* @__PURE__ */ jsx("line", { x1: "10", y1: "50", x2: "90", y2: "50", stroke: "#C5E1A5", strokeWidth: "2" }),
    /* @__PURE__ */ jsx("line", { x1: "20", y1: "20", x2: "80", y2: "80", stroke: "#C5E1A5", strokeWidth: "1" }),
    /* @__PURE__ */ jsx("line", { x1: "80", y1: "20", x2: "20", y2: "80", stroke: "#C5E1A5", strokeWidth: "1" }),
    /* @__PURE__ */ jsx("rect", { x: "40", y: "40", width: "20", height: "20", fill: "#FFC107", transform: "rotate(45 50 50)", opacity: "0.8" })
  ] }),
  // Dây Pháo (Traditional Firecracker String) - No Chinese text, decorative pattern
  FirecrackerString: (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 60 200", fill: "currentColor", ...props, children: [
    /* @__PURE__ */ jsx("path", { d: "M30 0 L30 200", stroke: "#8D6E63", strokeWidth: "2" }),
    /* @__PURE__ */ jsx("rect", { x: "10", y: "10", width: "40", height: "50", rx: "2", fill: "#D32F2F" }),
    /* @__PURE__ */ jsx("path", { d: "M10 18 L50 18", stroke: "#FFD700", strokeWidth: "3" }),
    /* @__PURE__ */ jsx("path", { d: "M10 52 L50 52", stroke: "#FFD700", strokeWidth: "3" }),
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "23",
        y: "28",
        width: "14",
        height: "14",
        transform: "rotate(45 30 35)",
        fill: "none",
        stroke: "#FFD700",
        strokeWidth: "2"
      }
    ),
    [0, 1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxs("g", { transform: `translate(0, ${70 + i * 22})`, children: [
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: i % 2 === 0 ? 8 : 22,
          y: "0",
          width: "18",
          height: "20",
          rx: "1",
          fill: "#D32F2F",
          transform: `rotate(${i % 2 === 0 ? -10 : 10} 30 0)`
        }
      ),
      /* @__PURE__ */ jsx("line", { x1: i % 2 === 0 ? 26 : 22, y1: "0", x2: "30", y2: "0", stroke: "#5D4037", strokeWidth: "1" }),
      /* @__PURE__ */ jsx(
        "line",
        {
          x1: i % 2 === 0 ? 8 : 22,
          y1: "4",
          x2: i % 2 === 0 ? 26 : 40,
          y2: "4",
          stroke: "#FFD700",
          strokeWidth: "1",
          transform: `rotate(${i % 2 === 0 ? -10 : 10} 30 0)`
        }
      ),
      /* @__PURE__ */ jsx(
        "line",
        {
          x1: i % 2 === 0 ? 8 : 22,
          y1: "16",
          x2: i % 2 === 0 ? 26 : 40,
          y2: "16",
          stroke: "#FFD700",
          strokeWidth: "1",
          transform: `rotate(${i % 2 === 0 ? -10 : 10} 30 0)`
        }
      )
    ] }, i))
  ] }),
  // Ông Đồ (Vietnamese Scholar writing calligraphy)
  OngDo: (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 200 200", fill: "none", ...props, children: [
    /* @__PURE__ */ jsx("path", { d: "M60 180 Q60 120 100 110 Q140 120 140 180", fill: "#1A237E", stroke: "#000", strokeWidth: "1" }),
    /* @__PURE__ */ jsx("circle", { cx: "100", cy: "80", r: "25", fill: "#FFCCBC" }),
    /* @__PURE__ */ jsx("path", { d: "M75 70 Q100 50 125 70 L125 80 Q100 60 75 80 Z", fill: "#000" }),
    /* @__PURE__ */ jsx("path", { d: "M90 95 Q100 120 110 95", fill: "none", stroke: "#FFF", strokeWidth: "2", opacity: "0.8" }),
    /* @__PURE__ */ jsx("rect", { x: "40", y: "170", width: "120", height: "10", fill: "#5D4037" }),
    /* @__PURE__ */ jsx("rect", { x: "70", y: "140", width: "60", height: "40", fill: "#D32F2F", transform: "rotate(-5 100 160)" }),
    /* @__PURE__ */ jsx("rect", { x: "75", y: "145", width: "50", height: "30", fill: "#FFCDD2", transform: "rotate(-5 100 160)" }),
    /* @__PURE__ */ jsx("line", { x1: "120", y1: "130", x2: "135", y2: "100", stroke: "#795548", strokeWidth: "3" })
  ] }),
  // Cây Quất (Kumquat Tree)
  KumquatTree: (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 200 250", fill: "none", ...props, children: [
    /* @__PURE__ */ jsx("path", { d: "M60 200 L50 240 L150 240 L140 200 Z", fill: "#D84315", stroke: "#BF360C", strokeWidth: "2" }),
    /* @__PURE__ */ jsx("rect", { x: "55", y: "200", width: "90", height: "10", fill: "#E64A19" }),
    /* @__PURE__ */ jsx("path", { d: "M80 220 L120 220", stroke: "#FFAB91", strokeWidth: "2" }),
    /* @__PURE__ */ jsx("path", { d: "M100 200 L100 150", stroke: "#795548", strokeWidth: "8", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M100 170 L80 140", stroke: "#795548", strokeWidth: "5", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M100 160 L130 130", stroke: "#795548", strokeWidth: "5", strokeLinecap: "round" }),
    /* @__PURE__ */ jsxs("g", { fill: "#2E7D32", stroke: "#1B5E20", strokeWidth: "1", children: [
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "100", r: "40" }),
      /* @__PURE__ */ jsx("circle", { cx: "70", cy: "120", r: "35" }),
      /* @__PURE__ */ jsx("circle", { cx: "130", cy: "120", r: "35" }),
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "60", r: "30" }),
      /* @__PURE__ */ jsx("circle", { cx: "60", cy: "80", r: "30" }),
      /* @__PURE__ */ jsx("circle", { cx: "140", cy: "80", r: "30" })
    ] }),
    /* @__PURE__ */ jsxs("g", { fill: "#FF9800", stroke: "#E65100", strokeWidth: "1", children: [
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "100", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "80", cy: "130", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "120", cy: "130", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "60", cy: "90", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "140", cy: "90", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "60", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "80", cy: "80", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "120", cy: "80", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "140", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "70", cy: "110", r: "8" }),
      /* @__PURE__ */ jsx("circle", { cx: "130", cy: "110", r: "8" })
    ] })
  ] }),
  // Nút thắt cát tường (Lucky Knot)
  LuckyKnot: (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", fill: "none", stroke: "currentColor", ...props, children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M50 20 C70 10 90 30 80 50 C90 70 70 90 50 80 C30 90 10 70 20 50 C10 30 30 10 50 20",
        stroke: "#D32F2F",
        strokeWidth: "4",
        fill: "none"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M50 30 L50 70 M30 50 L70 50", stroke: "#D32F2F", strokeWidth: "3" }),
    /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "10", stroke: "#FFD700", strokeWidth: "2", fill: "none" }),
    /* @__PURE__ */ jsx("path", { d: "M50 80 L40 100 M50 80 L60 100", stroke: "#D32F2F", strokeWidth: "2" })
  ] })
};

export { IChingDiagram as I, TetIcons as T };
