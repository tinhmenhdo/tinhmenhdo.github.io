import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect, useCallback } from 'react';
import * as d3 from 'd3';
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';
import { C as CHI } from './8W4RV4Fe.js';
import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './Cf7UXZdW.js';
import 'piccolore';
import 'clsx';

var GameMode = /* @__PURE__ */ ((GameMode2) => {
  GameMode2["CHALLENGE"] = "CHALLENGE";
  GameMode2["LEARNING"] = "LEARNING";
  return GameMode2;
})(GameMode || {});
var GamePhase = /* @__PURE__ */ ((GamePhase2) => {
  GamePhase2["CAN"] = "CAN";
  GamePhase2["CHI"] = "CHI";
  GamePhase2["ELEMENT"] = "ELEMENT";
  GamePhase2["NAYIN"] = "NAYIN";
  GamePhase2["CAN_ELEMENT"] = "CAN_ELEMENT";
  GamePhase2["CHI_ELEMENT"] = "CHI_ELEMENT";
  return GamePhase2;
})(GamePhase || {});

function useGameLogic({
  config,
  difficultyLevels,
  questionPacks,
  initialDifficulty = "MEDIUM",
  initialPack = 1
}) {
  const [gameState, setGameState] = useState({
    correctAnswers: 0,
    wrongAnswers: 0,
    questionCount: 0,
    startTime: null,
    elapsedTime: 0,
    isActive: false,
    isFinished: false,
    selectedPack: initialPack,
    selectedDifficulty: initialDifficulty,
    gameStarted: false,
    showConfirmation: false,
    showTimeoutPopup: false,
    gameMode: GameMode.CHALLENGE,
    showModeSelection: true,
    history: []
  });
  const animationFrameId = useRef(void 0);
  const startTimeRef = useRef(null);
  const timeoutRef = useRef(void 0);
  useEffect(() => {
    let lastUpdate = 0;
    const updateInterval = 16;
    const updateTimer = (timestamp) => {
      if (!gameState.isActive || !startTimeRef.current || gameState.isFinished || gameState.gameMode === GameMode.LEARNING) {
        return;
      }
      const currentTime = Date.now();
      const timeSpent = currentTime - startTimeRef.current;
      if (gameState.gameMode === GameMode.CHALLENGE && timeSpent >= difficultyLevels[gameState.selectedDifficulty].timeout) {
        setGameState((prev) => ({
          ...prev,
          showTimeoutPopup: true,
          isFinished: true,
          isActive: false
        }));
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        return;
      }
      if (timestamp - lastUpdate >= updateInterval && gameState.gameMode === GameMode.CHALLENGE) {
        setGameState((prev) => ({
          ...prev,
          elapsedTime: timeSpent
        }));
        lastUpdate = timestamp;
      }
      animationFrameId.current = requestAnimationFrame(updateTimer);
    };
    if (gameState.isActive && !gameState.isFinished && gameState.gameMode === GameMode.CHALLENGE) {
      startTimeRef.current = gameState.startTime;
      animationFrameId.current = requestAnimationFrame(updateTimer);
    }
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    gameState.isActive,
    gameState.startTime,
    gameState.isFinished,
    gameState.selectedDifficulty,
    gameState.gameMode,
    difficultyLevels
  ]);
  const generateQuestion = useCallback(() => {
    if (gameState.questionCount === 0) {
      setGameState((prev) => ({
        ...prev,
        startTime: Date.now()
      }));
    }
    const selectedPackQuestions = questionPacks.find((pack) => pack.id === gameState.selectedPack)?.questions || 0;
    if (gameState.questionCount >= selectedPackQuestions) {
      setGameState((prev) => ({
        ...prev,
        isFinished: true,
        isActive: false
      }));
      return;
    }
    config.generateQuestion();
    setGameState((prev) => ({
      ...prev,
      isActive: true
    }));
    if (config.onQuestionGenerated) {
      config.onQuestionGenerated({});
    }
  }, [gameState.questionCount, gameState.selectedPack, questionPacks, config]);
  const finishQuestion = useCallback(
    (isCorrect, questionData, userAnswers) => {
      const endTime = Date.now();
      const timeSpent = gameState.gameMode === GameMode.CHALLENGE ? endTime - gameState.startTime : 0;
      const historyItem = config.createHistoryItem(questionData, userAnswers, timeSpent);
      setGameState((prev) => ({
        ...prev,
        history: [historyItem, ...prev.history],
        questionCount: prev.questionCount + 1,
        correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
        wrongAnswers: isCorrect ? prev.wrongAnswers : prev.wrongAnswers + 1
      }));
      if (gameState.gameMode === GameMode.CHALLENGE) {
        const newQuestionCount = gameState.questionCount + 1;
        const selectedPackQuestions = questionPacks.find((pack) => pack.id === gameState.selectedPack)?.questions || 0;
        if (newQuestionCount >= selectedPackQuestions) {
          const totalTimeSpent = timeSpent + gameState.history.reduce((sum, item) => sum + item.timeSpent, 0);
          setGameState((prev) => ({
            ...prev,
            isActive: false,
            isFinished: true,
            elapsedTime: totalTimeSpent
          }));
          if (config.onGameFinished) {
            const stats = {
              correctAnswers: isCorrect ? gameState.correctAnswers + 1 : gameState.correctAnswers,
              wrongAnswers: isCorrect ? gameState.wrongAnswers : gameState.wrongAnswers + 1,
              totalQuestions: newQuestionCount,
              accuracy: (isCorrect ? gameState.correctAnswers + 1 : gameState.correctAnswers) / newQuestionCount * 100,
              totalTime: totalTimeSpent,
              averageTime: totalTimeSpent / newQuestionCount
            };
            config.onGameFinished(stats);
          }
          return;
        }
      }
      generateQuestion();
      if (gameState.gameMode === GameMode.CHALLENGE) {
        setGameState((prev) => ({
          ...prev,
          startTime: Date.now()
        }));
      }
      if (config.onAnswerSubmitted) {
        config.onAnswerSubmitted(isCorrect, userAnswers);
      }
    },
    [gameState, config, questionPacks, generateQuestion]
  );
  const handleConfirm = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      showConfirmation: false,
      showModeSelection: false,
      gameStarted: true,
      isFinished: false
    }));
    generateQuestion();
    setGameState((prev) => ({
      ...prev,
      isActive: true
    }));
  }, [generateQuestion]);
  const startGame = useCallback(() => {
    if (gameState.gameMode === GameMode.CHALLENGE) {
      if (!gameState.gameStarted) {
        setGameState((prev) => ({
          ...prev,
          showConfirmation: true
        }));
      } else {
        setGameState((prev) => ({
          ...prev,
          showModeSelection: true,
          gameStarted: false,
          isFinished: false,
          correctAnswers: 0,
          wrongAnswers: 0,
          questionCount: 0,
          elapsedTime: 0,
          startTime: null,
          history: []
        }));
        config.resetSpecificState();
      }
    } else {
      setGameState((prev) => ({
        ...prev,
        showModeSelection: false,
        gameStarted: true,
        isFinished: false,
        correctAnswers: 0,
        wrongAnswers: 0,
        history: []
      }));
      config.resetSpecificState();
      generateQuestion();
    }
  }, [gameState.gameMode, gameState.gameStarted, config, generateQuestion]);
  const resetGame = useCallback(() => {
    setGameState({
      correctAnswers: 0,
      wrongAnswers: 0,
      questionCount: 0,
      startTime: null,
      elapsedTime: 0,
      isActive: false,
      isFinished: false,
      selectedPack: initialPack,
      selectedDifficulty: initialDifficulty,
      gameStarted: false,
      showConfirmation: false,
      showTimeoutPopup: false,
      gameMode: GameMode.CHALLENGE,
      showModeSelection: true,
      history: []
    });
    config.resetSpecificState();
  }, [config, initialPack, initialDifficulty]);
  return {
    gameState,
    startGame,
    resetGame,
    handleConfirm,
    finishQuestion,
    setGameState,
    animationFrameId,
    startTimeRef,
    timeoutRef
  };
}

function formatTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1e3);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds % 3600 / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const remainingMilliseconds = milliseconds % 1e3;
  let result = "";
  if (hours > 0) {
    result += `${hours}h`;
    if (minutes > 0) result += ` ${minutes}m`;
  } else if (minutes > 0) {
    result += `${minutes}m`;
  }
  if (remainingSeconds > 0 || !hours && !minutes) {
    if (result) result += " ";
    result += `${remainingSeconds}s`;
  }
  if (remainingMilliseconds > 0) {
    result += ` ${remainingMilliseconds}ms`;
  }
  return result;
}
function BaseGame({
  className = "",
  config,
  difficultyLevels,
  questionPacks
}) {
  const { gameState, startGame, handleConfirm, finishQuestion, setGameState } = useGameLogic({
    config,
    difficultyLevels,
    questionPacks
  });
  const handleModeSelected = (mode) => {
    if (mode === GameMode.LEARNING) {
      setGameState((prev) => ({
        ...prev,
        gameMode: mode,
        showModeSelection: false,
        gameStarted: true,
        isActive: true,
        isFinished: false,
        correctAnswers: 0,
        wrongAnswers: 0
        // Không reset history trong chế độ LEARNING để giữ lại lịch sử
      }));
      config.resetSpecificState();
      config.generateQuestion();
    } else {
      setGameState((prev) => ({
        ...prev,
        gameMode: mode,
        showModeSelection: false
      }));
    }
  };
  const handleTimeoutClose = () => {
    setGameState((prev) => ({
      ...prev,
      showTimeoutPopup: false
    }));
  };
  const handleConfirmationCancel = () => {
    setGameState((prev) => ({
      ...prev,
      showConfirmation: false
    }));
  };
  return /* @__PURE__ */ jsxs("div", { className: `p-4 max-md:p-0 ${className}`, children: [
    gameState.showTimeoutPopup && gameState.gameMode === GameMode.CHALLENGE && /* @__PURE__ */ jsx("div", { className: "bg-opacity-50 animate-fadeIn fixed inset-0 z-50 flex items-center justify-center bg-black", children: /* @__PURE__ */ jsx("div", { className: "animate-scaleIn relative mx-4 w-full max-w-md transform rounded-xl bg-white p-8 transition-all duration-300 ease-out dark:bg-gray-800", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-6 animate-pulse text-3xl font-bold text-red-500", children: "Thất bại!" }),
      /* @__PURE__ */ jsx("div", { className: "mb-8 text-xl leading-relaxed text-gray-800 dark:text-gray-200", children: "Hết thời gian. Bạn cần luyện tập thêm bên phần HỌC TẬP!" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleTimeoutClose,
          className: "transform animate-bounce rounded-full bg-linear-to-r from-orange-500 to-orange-600 px-8 py-3 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-orange-600 hover:to-orange-700 hover:shadow-xl",
          children: "OK, tôi hiểu rồi!"
        }
      )
    ] }) }) }),
    gameState.showModeSelection || !gameState.gameStarted && gameState.gameMode !== GameMode.LEARNING ? /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      gameState.showModeSelection && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-6 text-2xl font-bold", children: "Chọn cách tự học" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleModeSelected(GameMode.LEARNING),
              className: `rounded-lg px-6 py-3 font-medium transition-all duration-200 ${gameState.gameMode === GameMode.LEARNING ? "bg-blue-500 text-white ring-2 ring-blue-500 ring-offset-2" : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"}`,
              children: "Học Tập"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleModeSelected(GameMode.CHALLENGE),
              className: `rounded-lg px-6 py-3 font-medium transition-all duration-200 ${gameState.gameMode === GameMode.CHALLENGE ? "bg-orange-500 text-white ring-2 ring-orange-500 ring-offset-2" : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"}`,
              children: "Thử Thách"
            }
          )
        ] })
      ] }),
      gameState.gameMode === GameMode.CHALLENGE ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-3 text-xl font-semibold", children: "Chọn độ khó" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2", children: Object.entries(difficultyLevels).map(([key, level]) => /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setGameState((prev) => ({ ...prev, selectedDifficulty: key })),
              className: `rounded-lg px-4 py-2 font-medium transition-all duration-200 ${gameState.selectedDifficulty === key ? "ring-2 ring-current ring-offset-2" : "opacity-70"}`,
              style: {
                backgroundColor: gameState.selectedDifficulty === key ? level.color : void 0,
                color: gameState.selectedDifficulty === key ? "white" : void 0
              },
              children: [
                level.name,
                /* @__PURE__ */ jsxs("span", { className: "block text-sm opacity-75", children: [
                  level.timeout / 1e3,
                  "s/câu"
                ] })
              ]
            },
            key
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-3 text-xl font-semibold", children: "Số lượng câu hỏi" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2", children: questionPacks.map((pack) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setGameState((prev) => ({ ...prev, selectedPack: pack.id })),
              className: `rounded-lg px-4 py-2 transition-all duration-200 ${gameState.selectedPack === pack.id ? "bg-orange-500 text-white ring-2 ring-orange-500 ring-offset-2" : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"}`,
              children: pack.name
            },
            pack.id
          )) })
        ] })
      ] }) : /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("p", { className: "text-gray-600 dark:text-gray-300", children: [
        "Ở chế độ Học Tập, bạn có thể luyện tập không giới hạn thời gian và số lượng câu hỏi.",
        /* @__PURE__ */ jsx("br", {}),
        config.description
      ] }) }),
      !gameState.showConfirmation || gameState.gameMode === GameMode.LEARNING ? /* @__PURE__ */ jsx(
        "button",
        {
          onClick: startGame,
          className: "mb-6 transform rounded-full bg-linear-to-r from-orange-500 to-orange-600 px-8 py-3 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-orange-600 hover:to-orange-700 hover:shadow-xl",
          children: gameState.gameMode === GameMode.LEARNING ? "Bắt đầu học" : "Bắt đầu thử thách"
        }
      ) : /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-4 mb-6 max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800", children: [
        /* @__PURE__ */ jsxs("p", { className: "mb-4 text-lg dark:text-gray-200", children: [
          "Bạn đã sẵn sàng với thử thách:",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: difficultyLevels[gameState.selectedDifficulty].name }),
          /* @__PURE__ */ jsx("span", { className: "text-gray-600 dark:text-gray-400", children: " • " }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: questionPacks.find((p) => p.id === gameState.selectedPack)?.name })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mb-6 text-gray-600 dark:text-gray-400", children: [
          "Ấn vào các cung để chọn câu trả lời. Mỗi câu có",
          " ",
          difficultyLevels[gameState.selectedDifficulty].timeout / 1e3,
          " giây để suy nghĩ."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-4", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleConfirm,
              className: "transform rounded-full bg-linear-to-r from-green-500 to-green-600 px-6 py-2 font-bold text-white shadow-md transition-all duration-200 hover:scale-105 hover:from-green-600 hover:to-green-700 hover:shadow-lg",
              children: "Sẵn sàng!"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleConfirmationCancel,
              className: "transform rounded-full bg-gray-100 px-6 py-2 font-bold text-gray-800 transition-all duration-200 hover:scale-105 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
              children: "Chỉnh lại"
            }
          )
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsx("div", { className: "mb-4 flex w-full flex-col items-center justify-center gap-4", children: (gameState.isFinished || gameState.gameMode === GameMode.LEARNING) && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => window.location.reload(),
        className: "rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600",
        children: gameState.gameMode === GameMode.LEARNING ? "Chọn lại" : "Chơi lại"
      }
    ) }),
    config.renderGameArea(finishQuestion, {
      gameState,
      gameMode: gameState.gameMode,
      formatTime
    }),
    gameState.isActive && gameState.gameMode === GameMode.CHALLENGE && /* @__PURE__ */ jsxs("div", { className: "mb-4 text-lg dark:text-gray-200", children: [
      "Đúng: ",
      gameState.correctAnswers,
      " câu Sai: ",
      gameState.wrongAnswers,
      " câu Thời gian:",
      " ",
      formatTime(gameState.elapsedTime)
    ] }),
    gameState.isFinished && gameState.gameMode === GameMode.CHALLENGE && /* @__PURE__ */ jsxs("div", { className: "mt-4 rounded bg-gray-100 p-4 text-center dark:bg-gray-800", children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-2 text-xl font-bold dark:text-gray-200", children: "Kết quả" }),
      /* @__PURE__ */ jsxs("p", { className: "dark:text-gray-200", children: [
        "Đúng: ",
        /* @__PURE__ */ jsx("span", { className: "font-bold text-green-600 dark:text-green-400", children: gameState.correctAnswers }),
        " câu"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "dark:text-gray-200", children: [
        "Sai: ",
        /* @__PURE__ */ jsx("span", { className: "font-bold text-red-600 dark:text-red-400", children: gameState.wrongAnswers }),
        " câu"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "dark:text-gray-200", children: [
        "Tổng thời gian hoàn thành:",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-bold text-blue-600 dark:text-blue-400", children: formatTime(gameState.elapsedTime) })
      ] })
    ] })
  ] });
}

const DEFAULT_CHART_CONFIG = {
  colors: {
    correct: "#10b981",
    // green-500
    incorrect: "#ef4444",
    // red-500
    partial: "#f59e0b",
    // amber-500 for partial correct
    link: "#6b7280",
    // gray-500
    text: "#374151",
    // gray-700
    title: "#1f2937",
    // gray-800
    background: "#ffffff",
    border: "#e5e7eb",
    // gray-200
    achievement: {
      pack: "#8b5cf6",
      // violet-500
      difficulty: "#06b6d4",
      // cyan-500
      accuracy: "#10b981",
      // emerald-500
      average: "#f59e0b",
      // amber-500
      total: "#ec4899"
      // pink-500
    }
  }
};
function BaseHistoryChart({
  history,
  difficulty = "MEDIUM",
  config = DEFAULT_CHART_CONFIG,
  getItemStatus,
  getItemDisplayText,
  getItemTooltip,
  getCustomAchievements,
  title = "Phân tích kết quả",
  showShareButton = false,
  customButtons,
  achievementLayout = "grid",
  chartContainerClass = "rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800",
  showFullDownloadButton = false,
  additionalStatsContent,
  fullStatsContainerRef
}) {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const fullComponentRef = useRef(null);
  const [achievements, setAchievements] = useState([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloadingFull, setIsDownloadingFull] = useState(false);
  const formatTime = useCallback((ms) => {
    const seconds = Math.floor(ms / 1e3);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const remainingMs = ms % 1e3;
    if (minutes > 0) {
      return `${minutes}m ${remainingSeconds}s`;
    }
    if (remainingSeconds > 0) {
      return `${remainingSeconds}s`;
    }
    return `${remainingMs}ms`;
  }, []);
  const defaultGetItemStatus = useCallback((item) => {
    if ("isFullyCorrect" in item && item.isFullyCorrect) return "correct";
    if ("isCorrect" in item && item.isCorrect) return "correct";
    return "incorrect";
  }, []);
  const defaultGetItemDisplayText = useCallback(
    (item) => {
      if ("question" in item) return item.question;
      return `Item ${history.indexOf(item) + 1}`;
    },
    [history]
  );
  const defaultGetItemTooltip = useCallback(
    (item) => {
      const status = (getItemStatus || defaultGetItemStatus)(item);
      const timeText = item.timeSpent ? ` (${formatTime(item.timeSpent)})` : "";
      return `${(getItemDisplayText || defaultGetItemDisplayText)(item)} - ${status}${timeText}`;
    },
    [getItemStatus, defaultGetItemStatus, getItemDisplayText, defaultGetItemDisplayText, formatTime]
  );
  const calculateAchievements = useCallback(() => {
    if (getCustomAchievements) {
      return getCustomAchievements(history);
    }
    const statusFunction = getItemStatus || defaultGetItemStatus;
    const correctCount = history.filter((item) => statusFunction(item) === "correct").length;
    const partialCount = history.filter((item) => statusFunction(item) === "partial").length;
    const totalQuestions = history.length;
    const accuracy = totalQuestions > 0 ? correctCount / totalQuestions * 100 : 0;
    const avgTime = totalQuestions > 0 ? history.reduce((sum, item) => sum + (item.timeSpent || 0), 0) / totalQuestions : 0;
    const achievements2 = [
      {
        label: "Độ khó",
        value: difficulty,
        color: config.colors.achievement.difficulty
      },
      {
        label: "Câu hỏi",
        value: `${totalQuestions} câu`,
        color: config.colors.achievement.pack
      },
      {
        label: "Độ chính xác",
        value: `${accuracy.toFixed(1)}%`,
        color: config.colors.achievement.accuracy
      }
    ];
    if (avgTime > 0) {
      achievements2.push({
        label: "Thời gian TB",
        value: formatTime(avgTime),
        color: config.colors.achievement.average
      });
    }
    if (partialCount > 0) {
      achievements2.push({
        label: "Đúng một phần",
        value: `${partialCount} câu`,
        color: config.colors.partial || config.colors.achievement.total
      });
    }
    return achievements2;
  }, [history, difficulty, config, getItemStatus, defaultGetItemStatus, getCustomAchievements, formatTime]);
  const renderChart = useCallback(() => {
    if (!svgRef.current || !containerRef.current || history.length === 0) return;
    const svg = d3.select(svgRef.current);
    const container = containerRef.current.getBoundingClientRect();
    const isMobile = container.width <= 768;
    const margin = isMobile ? { top: 50, right: 30, bottom: 50, left: 60 } : { top: 60, right: 40, bottom: 60, left: 80 };
    const width = Math.max(isMobile ? 300 : 600, container.width - 40) - margin.left - margin.right;
    const height = (isMobile ? 250 : 350) - margin.top - margin.bottom;
    svg.attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom);
    svg.selectAll("*").remove();
    const chartGroup = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
    const orderedHistory = history.slice().reverse();
    const xScale = d3.scaleBand().domain(orderedHistory.map((_, i) => `Câu ${i + 1}`)).range([0, width]).padding(0.1);
    const maxTime = Math.max(...orderedHistory.map((item) => item.timeSpent || 0));
    const yScale = d3.scaleLinear().domain([0, maxTime * 1.1]).range([height, 0]);
    chartGroup.append("text").attr("x", width / 2).attr("y", -20).attr("text-anchor", "middle").style("font-size", isMobile ? "14px" : "16px").style("font-weight", "bold").style("fill", config.colors.title).text(isMobile ? "Thời gian trả lời" : "Biểu đồ thời gian trả lời");
    const xAxis = d3.axisBottom(xScale).ticks(isMobile ? Math.min(5, orderedHistory.length) : Math.min(10, orderedHistory.length));
    const yAxis = d3.axisLeft(yScale).ticks(isMobile ? 4 : 6).tickFormat((d) => formatTime(d));
    chartGroup.append("g").attr("transform", `translate(0,${height})`).call(xAxis).selectAll("text").style("font-size", isMobile ? "10px" : "12px").style("fill", config.colors.text).attr("transform", isMobile ? "rotate(-45)" : "rotate(0)").style("text-anchor", isMobile ? "end" : "middle");
    chartGroup.append("g").call(yAxis).selectAll("text").style("font-size", isMobile ? "10px" : "12px").style("fill", config.colors.text);
    if (!isMobile) {
      chartGroup.append("text").attr("transform", "rotate(-90)").attr("y", 0 - margin.left).attr("x", 0 - height / 2).attr("dy", "1em").style("text-anchor", "middle").style("font-size", "14px").style("fill", config.colors.text).text("Thời gian");
      chartGroup.append("text").attr("transform", `translate(${width / 2}, ${height + margin.bottom - 10})`).style("text-anchor", "middle").style("font-size", "14px").style("fill", config.colors.text).text("Câu hỏi");
    }
    const statusFunction = getItemStatus || defaultGetItemStatus;
    chartGroup.selectAll(".bar").data(orderedHistory).enter().append("rect").attr("class", "bar").attr("x", (_, i) => xScale(`Câu ${i + 1}`)).attr("width", xScale.bandwidth()).attr("y", (d) => yScale(d.timeSpent || 0)).attr("height", (d) => height - yScale(d.timeSpent || 0)).attr("fill", (d) => {
      const status = statusFunction(d);
      switch (status) {
        case "correct":
          return config.colors.correct;
        case "partial":
          return config.colors.partial || config.colors.achievement.total;
        default:
          return config.colors.incorrect;
      }
    }).on("mouseover", function(event, d) {
      const tooltip = d3.select("body").append("div").attr("class", "tooltip").style("position", "absolute").style("background", "rgba(0, 0, 0, 0.8)").style("color", "white").style("padding", "8px").style("border-radius", "4px").style("font-size", "12px").style("pointer-events", "none").style("opacity", 0);
      tooltip.transition().duration(200).style("opacity", 1);
      tooltip.html((getItemTooltip || defaultGetItemTooltip)(d)).style("left", event.pageX + 10 + "px").style("top", event.pageY - 28 + "px");
    }).on("mouseout", function() {
      d3.selectAll(".tooltip").remove();
    });
  }, [history, config, getItemStatus, defaultGetItemStatus, getItemTooltip, defaultGetItemTooltip, formatTime]);
  useEffect(() => {
    setAchievements(calculateAchievements());
  }, [calculateAchievements]);
  useEffect(() => {
    if (history.length > 0) {
      renderChart();
    }
  }, [history, renderChart]);
  const downloadChart = useCallback(async () => {
    if (!fullComponentRef.current || isDownloading) return;
    setIsDownloading(true);
    try {
      console.log("Download triggered with history length:", history.length);
      console.log("History data:", history);
      if (history.length === 0) {
        console.warn("No history data available for download");
        alert("Không có dữ liệu để tải xuống!");
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
      console.log("Component dimensions:", {
        width: fullComponentRef.current.offsetWidth,
        height: fullComponentRef.current.offsetHeight,
        scrollWidth: fullComponentRef.current.scrollWidth,
        scrollHeight: fullComponentRef.current.scrollHeight
      });
      const svg = fullComponentRef.current.querySelector("svg");
      if (svg) {
        console.log("SVG dimensions:", {
          width: svg.getAttribute("width"),
          height: svg.getAttribute("height"),
          clientWidth: svg.clientWidth,
          clientHeight: svg.clientHeight
        });
        console.log("SVG children count:", svg.children.length);
        const bars = svg.querySelectorAll(".bar");
        console.log("Number of bars in SVG:", bars.length);
        if (bars.length !== history.length) {
          console.warn(`SVG has ${bars.length} bars but history has ${history.length} items`);
          console.warn("Chart may not be fully rendered, retrying...");
          renderChart();
          await new Promise((resolve) => setTimeout(resolve, 200));
          const updatedBars = svg.querySelectorAll(".bar");
          console.log("Number of bars after re-render:", updatedBars.length);
        }
      } else {
        console.warn("SVG element not found!");
      }
      const canvas = await html2canvas(fullComponentRef.current, {
        backgroundColor: "#ffffff",
        scale: 2
      });
      console.log("Canvas dimensions:", canvas.width, "x", canvas.height);
      const ctx = canvas.getContext("2d");
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const hasContent = imageData.data.some((pixel, index) => {
        if (index % 4 === 3) return false;
        return pixel !== 255;
      });
      console.log("Canvas has content:", hasContent);
      if (!hasContent) {
        console.warn("Canvas appears to be blank, trying alternative method...");
        throw new Error("Canvas is blank");
      }
      const link = document.createElement("a");
      link.download = `game-history-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.png`;
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error("Error downloading chart:", error);
      try {
        await downloadChartAlternative();
      } catch (altError) {
        console.error("Alternative 1 failed:", altError);
        try {
          await downloadChartAlternative2();
        } catch (altError2) {
          console.error("Alternative 2 also failed:", altError2);
          alert("Có lỗi khi tải ảnh. Vui lòng thử lại!");
        }
      }
    } finally {
      setIsDownloading(false);
    }
  }, [isDownloading, history, renderChart]);
  const downloadChartAlternative = useCallback(async () => {
    if (!containerRef.current) return;
    console.log("Trying alternative method with containerRef...");
    const canvas = await html2canvas(containerRef.current, {
      backgroundColor: "#ffffff",
      scale: 2
    });
    console.log("Alternative canvas dimensions:", canvas.width, "x", canvas.height);
    const link = document.createElement("a");
    link.download = `game-history-fallback-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.png`;
    link.href = canvas.toDataURL();
    link.click();
  }, []);
  const downloadChartAlternative2 = useCallback(async () => {
    if (!fullComponentRef.current) return;
    console.log("Trying alternative method 2 with CORS options...");
    const canvas = await html2canvas(fullComponentRef.current, {
      backgroundColor: "#ffffff",
      scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: false
    });
    console.log("Alternative 2 canvas dimensions:", canvas.width, "x", canvas.height);
    const link = document.createElement("a");
    link.download = `game-history-alt2-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.png`;
    link.href = canvas.toDataURL();
    link.click();
  }, []);
  const shareChart = useCallback(async () => {
    if (!fullComponentRef.current) return;
    try {
      const canvas = await html2canvas(fullComponentRef.current, {
        backgroundColor: "#ffffff",
        scale: 2
      });
      try {
        const blob = await new Promise((resolve) => {
          canvas.toBlob((b) => resolve(b), "image/png", 1);
        });
        if (navigator.share) {
          const file = new File([blob], "game-chart.png", { type: "image/png" });
          await navigator.share({
            files: [file],
            title,
            text: "Chia sẻ kết quả game từ TinhMenhDo.com"
          });
        } else {
          throw new Error("Share not supported");
        }
      } catch {
        const link = document.createElement("a");
        link.download = "ket-qua-game.png";
        link.href = canvas.toDataURL();
        link.click();
      }
    } catch (error) {
      console.error("Error sharing chart:", error);
      downloadChart();
    }
  }, [title, downloadChart]);
  const downloadFullStats = useCallback(async () => {
    if (isDownloadingFull) return;
    setIsDownloadingFull(true);
    try {
      console.log("Starting full stats download...");
      if (!fullComponentRef.current || history.length === 0) {
        alert("Không có dữ liệu để tải xuống!");
        return;
      }
      console.log("Target element found, dimensions:", {
        width: fullComponentRef.current.offsetWidth,
        height: fullComponentRef.current.offsetHeight,
        scrollWidth: fullComponentRef.current.scrollWidth,
        scrollHeight: fullComponentRef.current.scrollHeight
      });
      await new Promise((resolve) => setTimeout(resolve, 300));
      const svg = fullComponentRef.current.querySelector("svg");
      if (svg) {
        console.log("Found SVG, preparing for capture:", {
          width: svg.getAttribute("width"),
          height: svg.getAttribute("height"),
          childrenCount: svg.children.length
        });
        svg.style.display = "block";
        fullComponentRef.current.style.display = "block";
      }
      console.log("Preparing for modern capture with dom-to-image (supports OKLCH)...");
      let dataUrl;
      let success = false;
      try {
        console.log("Trying method 1: dom-to-image PNG");
        dataUrl = await domtoimage.toPng(fullComponentRef.current, {
          width: fullComponentRef.current.scrollWidth,
          height: fullComponentRef.current.scrollHeight,
          style: {
            transform: "scale(1)",
            transformOrigin: "top left"
          }
        });
        if (dataUrl && dataUrl.length > 1e3) {
          console.log("Method 1 successful - dom-to-image PNG");
          success = true;
        } else {
          console.log("Method 1 produced invalid data");
        }
      } catch (error1) {
        console.log("Method 1 failed:", error1);
      }
      if (!success) {
        try {
          console.log("Trying method 2: dom-to-image JPEG");
          dataUrl = await domtoimage.toJpeg(fullComponentRef.current, {
            width: fullComponentRef.current.scrollWidth,
            height: fullComponentRef.current.scrollHeight,
            quality: 1,
            bgcolor: "#ffffff"
          });
          if (dataUrl && dataUrl.length > 1e3) {
            console.log("Method 2 successful - dom-to-image JPEG");
            success = true;
          } else {
            console.log("Method 2 produced invalid data");
          }
        } catch (error2) {
          console.log("Method 2 failed:", error2);
        }
      }
      if (!success) {
        try {
          console.log("Trying method 3: html2canvas fallback");
          const canvas = await html2canvas(fullComponentRef.current, {
            backgroundColor: "#ffffff",
            scale: 1
            // Lower scale to avoid OKLCH issues
          });
          dataUrl = canvas.toDataURL("image/png", 1);
          if (dataUrl && dataUrl.length > 1e3) {
            console.log("Method 3 successful - html2canvas fallback");
            success = true;
          }
        } catch (error3) {
          console.log("Method 3 failed:", error3);
        }
      }
      if (!success && containerRef.current) {
        try {
          console.log("Trying method 4: Chart container only");
          const canvas = await html2canvas(containerRef.current, {
            backgroundColor: "#ffffff",
            scale: 2
          });
          dataUrl = canvas.toDataURL("image/png", 1);
          if (dataUrl && dataUrl.length > 1e3) {
            console.log("Method 4 successful - chart only");
            success = true;
          }
        } catch (error4) {
          console.log("Method 4 failed:", error4);
        }
      }
      if (!success || !dataUrl) {
        throw new Error("All capture methods failed");
      }
      console.log("Capture successful, preparing download...");
      const link = document.createElement("a");
      link.download = `thong-ke-chi-tiet-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log("Download completed successfully");
    } catch (error) {
      console.error("All download methods failed:", error);
      alert("Có lỗi khi tải ảnh thống kê. Vui lòng thử lại!");
    } finally {
      setIsDownloadingFull(false);
    }
  }, [isDownloadingFull, history]);
  return /* @__PURE__ */ jsxs("div", { ref: fullComponentRef, className: "w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-col items-center justify-between gap-4 sm:flex-row", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-center text-xl font-bold dark:text-gray-200", children: title }),
        showFullDownloadButton && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: downloadFullStats,
            disabled: isDownloadingFull,
            className: `flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-white transition-colors ${isDownloadingFull ? "cursor-not-allowed bg-gray-400" : "bg-green-500 hover:bg-green-600"}`,
            children: isDownloadingFull ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs(
                "svg",
                {
                  className: "h-4 w-4 animate-spin",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    /* @__PURE__ */ jsx(
                      "circle",
                      {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "path",
                      {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      }
                    )
                  ]
                }
              ),
              "Đang tải thống kê..."
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                  clipRule: "evenodd"
                }
              ) }),
              "Tải toàn bộ thống kê"
            ] })
          }
        )
      ] }),
      achievementLayout === "grid" ? /* @__PURE__ */ jsx("div", { className: "mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3", children: achievements.map((achievement, index) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800",
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "mr-3 h-3 w-3 rounded-full", style: { backgroundColor: achievement.color } }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: achievement.label }),
              /* @__PURE__ */ jsx("div", { className: "text-lg font-semibold dark:text-gray-200", children: achievement.value })
            ] })
          ] })
        },
        index
      )) }) : /* @__PURE__ */ jsx("div", { className: "mb-6 flex flex-wrap justify-center gap-4", children: achievements.map((achievement, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-sm dark:border-gray-700 dark:bg-gray-800",
          children: [
            /* @__PURE__ */ jsx("div", { className: "mr-2 h-2 w-2 rounded-full", style: { backgroundColor: achievement.color } }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
              achievement.label,
              ":"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "ml-1 font-semibold dark:text-gray-200", children: achievement.value })
          ]
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: chartContainerClass, children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-col items-center justify-between gap-4 sm:flex-row", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold dark:text-gray-200", children: "Biểu đồ chi tiết từng câu" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          showShareButton && /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: shareChart,
              className: "flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm text-white transition-colors hover:bg-orange-600",
              children: [
                /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" }) }),
                "Chia sẻ"
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: downloadChart,
              disabled: isDownloading,
              className: `flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-white transition-colors ${isDownloading ? "cursor-not-allowed bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`,
              children: isDownloading ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    className: "h-4 w-4 animate-spin",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                      /* @__PURE__ */ jsx(
                        "circle",
                        {
                          className: "opacity-25",
                          cx: "12",
                          cy: "12",
                          r: "10",
                          stroke: "currentColor",
                          strokeWidth: "4"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          className: "opacity-75",
                          fill: "currentColor",
                          d: "m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        }
                      )
                    ]
                  }
                ),
                "Đang tải..."
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                    clipRule: "evenodd"
                  }
                ) }),
                "Tải ảnh"
              ] })
            }
          ),
          customButtons
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { ref: containerRef, className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsx("svg", { ref: svgRef, className: "w-full", style: { backgroundColor: "#ffffff" } }) })
    ] }),
    additionalStatsContent && /* @__PURE__ */ jsx("div", { className: "mt-6", children: additionalStatsContent })
  ] });
}

const BASE_QUESTIONS = 14;
const DEFAULT_QUESTION_PACKS = [
  { id: 1, name: "14 câu", questions: BASE_QUESTIONS, color: "#10b981" },
  { id: 2, name: "28 câu", questions: BASE_QUESTIONS * 2, color: "#f59e0b" },
  { id: 3, name: "42 câu", questions: BASE_QUESTIONS * 3, color: "#f97316" },
  { id: 4, name: "56 câu", questions: BASE_QUESTIONS * 4, color: "#ef4444" }
];
const CUNG = CHI.reduce(
  (acc, chi, index) => {
    acc[chi] = index + 1;
    return acc;
  },
  {}
);
const CUNG_POSITIONS = [
  { name: "Tý", position: "bottom-[2%] right-[27%]" },
  { name: "Sửu", position: "bottom-[2%] right-[52%]" },
  { name: "Dần", position: "bottom-[2%] left-[2%]" },
  { name: "Mão", position: "bottom-[27%] left-[2%]" },
  { name: "Thìn", position: "top-[27%] left-[2%]" },
  { name: "Tị", position: "top-[2%] left-[2%]" },
  { name: "Ngọ", position: "top-[2%] left-[27%]" },
  { name: "Mùi", position: "top-[2%] right-[27%]" },
  { name: "Thân", position: "top-[2%] right-[2%]" },
  { name: "Dậu", position: "top-[27%] right-[2%]" },
  { name: "Tuất", position: "bottom-[27%] right-[2%]" },
  { name: "Hợi", position: "bottom-[2%] right-[2%]" }
];
const STANDARD_DIFFICULTY_LEVELS = {
  EASY: { name: "Dễ", timeout: 25e3, color: "#10b981" },
  MEDIUM: { name: "Trung bình", timeout: 2e4, color: "#f59e0b" },
  HARD: { name: "Khó", timeout: 15e3, color: "#f97316" },
  EXPERT: { name: "Siêu khó", timeout: 1e4, color: "#ef4444" }
};
const CAN_CHI_DIFFICULTY_LEVELS = {
  EASY: { name: "Dễ", timeout: 3e4, color: "#10b981" },
  MEDIUM: { name: "Trung bình", timeout: 25e3, color: "#f59e0b" },
  HARD: { name: "Khó", timeout: 2e4, color: "#f97316" },
  EXPERT: { name: "Siêu khó", timeout: 15e3, color: "#ef4444" }
};
const ELEMENT_COLORS = {
  Thủy: "bg-blue-500 hover:bg-blue-600 text-white",
  Mộc: "bg-green-500 hover:bg-green-600 text-white",
  Kim: "bg-gray-400 hover:bg-gray-600 text-white",
  Thổ: "bg-yellow-500 hover:bg-yellow-600 text-white",
  Hỏa: "bg-red-500 hover:bg-red-600 text-white"
};
const createCungColors = (bgTheme) => ({
  Tị: { bg: bgTheme, text: "text-red-500 dark:text-red-400" },
  Ngọ: { bg: bgTheme, text: "text-red-600 dark:text-red-400" },
  Mùi: { bg: bgTheme, text: "text-yellow-500 dark:text-yellow-400" },
  Thân: { bg: bgTheme, text: "text-gray-600 dark:text-gray-300" },
  Thìn: { bg: bgTheme, text: "text-yellow-500 dark:text-yellow-400" },
  Dậu: { bg: bgTheme, text: "text-gray-600 dark:text-gray-300" },
  Mão: { bg: bgTheme, text: "text-green-600 dark:text-green-400" },
  Tuất: { bg: bgTheme, text: "text-yellow-600 dark:text-yellow-400" },
  Dần: { bg: bgTheme, text: "text-green-500 dark:text-green-400" },
  Sửu: { bg: bgTheme, text: "text-yellow-600 dark:text-yellow-400" },
  Tý: { bg: bgTheme, text: "text-blue-600 dark:text-blue-400" },
  Hợi: { bg: bgTheme, text: "text-blue-500 dark:text-blue-400" }
});
const THEME_VARIANTS = {
  SLATE: "bg-slate-100 dark:bg-slate-800",
  ORANGE: "bg-orange-50 dark:bg-slate-800"
};
const CHART_CONTAINER_CLASSES = "relative mx-auto mb-6 h-[500px] max-h-[95vw] w-[500px] max-w-[95vw] rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-xl max-md:-ml-2 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900";
const QUESTION_PANEL_CLASSES = "w-full max-w-[250px] rounded-xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-2 font-medium shadow-xl backdrop-blur-sm dark:border-gray-600 dark:from-gray-800 dark:to-gray-900";
const createGetCungClassName = (colors) => (cung, isActive, currentCung, hasContent = false) => {
  const baseClasses = `absolute w-[22%] h-[22%] ${colors[cung].bg} p-3 max-md:p-2 rounded-xl shadow-xl border border-gray/20 dark:border-gray-600/30 transition-all duration-300 hover:shadow-2xl hover:scale-105`;
  const activeClasses = isActive && cung === currentCung ? "ring-1 ring-orange-200 scale-110 shadow-2xl z-50" : "z-10";
  const contentClasses = hasContent ? "bg-yellow-100 dark:bg-yellow-900" : "";
  return `${baseClasses} ${activeClasses} ${contentClasses}`;
};
const createGetCungClassNameClickable = (colors) => (cung, hasStars) => {
  const baseClasses = `absolute w-[22%] h-[22%] rounded-2xl ${colors[cung].bg} p-3 max-md:p-2 shadow-xl border border-gray/20 dark:border-gray-600/30 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer hover:bg-yellow-50 dark:hover:bg-yellow-900`;
  const activeClasses = hasStars ? "z-40 bg-yellow-100 dark:bg-yellow-900" : "z-10";
  return `${baseClasses} ${activeClasses}`;
};

const tuviLessons = [
  {
    slug: "/hoc-tu-vi/can-chi-tuong-tac",
    title: "Tương tác Thiên Can Địa Chi"
  },
  {
    slug: "/hoc-tu-vi/nho-luc-thap-hoa-giap",
    title: "Tự học tử vi Lục Thập Hoa Giáp & Nạp Âm"
  },
  {
    slug: "/hoc-tu-vi/tim-can-chi-tu-nam-duong-lich",
    title: "Tự tìm Can Chi từ năm dương lịch"
  },
  {
    slug: "/hoc-tu-vi/nho-vi-tri-14-chinh-tinh",
    title: "Nhớ vị trí 14 chính tinh"
  }
];

const $$Astro = createAstro("https://tinhmenhdo.github.io");
const $$RelatedLessons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RelatedLessons;
  const { currentSlug } = Astro2.props;
  const relatedLessons = tuviLessons.filter((lesson) => lesson.slug !== currentSlug);
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto px-4 pb-10"> <h2 class="mb-4 text-2xl font-bold">Các bài học liên quan</h2> <ul class="text-md list-disc pl-5"> ${relatedLessons.map((lesson) => renderTemplate`<li> <a${addAttribute(lesson.slug, "href")} class="inline-block py-1 text-blue-600 hover:underline"${addAttribute(lesson.title, "title")}> ${lesson.title} </a> </li>`)} </ul> </div>`;
}, "/root/code/tmd_astro/src/components/tuvi/RelatedLessons.astro", void 0);

export { $$RelatedLessons as $, BaseGame as B, CUNG_POSITIONS as C, DEFAULT_QUESTION_PACKS as D, ELEMENT_COLORS as E, GamePhase as G, QUESTION_PANEL_CLASSES as Q, STANDARD_DIFFICULTY_LEVELS as S, THEME_VARIANTS as T, createCungColors as a, CHART_CONTAINER_CLASSES as b, createGetCungClassName as c, BaseHistoryChart as d, createGetCungClassNameClickable as e, CUNG as f, CAN_CHI_DIFFICULTY_LEVELS as g };
