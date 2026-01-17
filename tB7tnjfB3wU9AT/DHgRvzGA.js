import { jsx, jsxs } from 'react/jsx-runtime';
import { Search } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { e as cn } from './Cccj9IsO.js';
import Fuse from 'fuse.js';

function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

let fuseInstance = null;
let cachedData = [];
let fetchPromise = null;
const offsetCache = /* @__PURE__ */ new Map();
const removeAccents = (str) => {
  if (!str) return "";
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase().trim();
};
const getCountryName = (code) => {
  if (code === "VN") return "Vietnam";
  try {
    const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(code) || code;
  } catch {
    return code;
  }
};
const getTimezoneOffset = (timeZone) => {
  if (offsetCache.has(timeZone)) return offsetCache.get(timeZone);
  try {
    const date = /* @__PURE__ */ new Date();
    const str = date.toLocaleString("en-US", { timeZone, timeZoneName: "longOffset" });
    const match = str.match(/GMT([+-])(\d{2}):(\d{2})/);
    let offset = 0;
    if (match) {
      const sign = match[1] === "+" ? 1 : -1;
      const hours = parseInt(match[2], 10);
      const minutes = parseInt(match[3], 10);
      offset = sign * (hours + minutes / 60);
    }
    offsetCache.set(timeZone, offset);
    return offset;
  } catch (e) {
    return 0;
  }
};
const initFuse = async () => {
  if (fuseInstance) return;
  if (fetchPromise) return fetchPromise;
  fetchPromise = (async () => {
    try {
      const dataUrl = atob("LzY0NjE3NDYxMmU2YTczNmYvNjM2OTc0Njk2NTczMmU2YTczNmY2ZS5qc29u");
      const response = await fetch(dataUrl);
      if (!response.ok) throw new Error("Failed to load cities data");
      cachedData = await response.json();
      fuseInstance = new Fuse(cachedData, {
        keys: [
          { name: "n", weight: 1 },
          // Name
          { name: "p", weight: 0.5 }
          // Province
        ],
        threshold: 0.2,
        // Giảm xuống để search chính xác hơn
        distance: 100,
        minMatchCharLength: 2,
        findAllMatches: false,
        getFn: (obj, key) => removeAccents(obj[key] || "")
      });
    } catch (error) {
      console.error("Error loading city data:", error);
      throw error;
    } finally {
      fetchPromise = null;
    }
  })();
  return fetchPromise;
};
const searchCities = async (query, limit = 50) => {
  if (!fuseInstance) await initFuse();
  if (!fuseInstance) return [];
  const normalizedQuery = removeAccents(query);
  const fuseResults = fuseInstance.search(normalizedQuery);
  return fuseResults.sort((a, b) => {
    const aIsVN = a.item.c === "VN";
    const bIsVN = b.item.c === "VN";
    if (aIsVN !== bIsVN) return aIsVN ? -1 : 1;
    const aName = removeAccents(a.item.n);
    const bName = removeAccents(b.item.n);
    const aStart = aName.startsWith(normalizedQuery);
    const bStart = bName.startsWith(normalizedQuery);
    if (aStart !== bStart) return aStart ? -1 : 1;
    return (a.score || 0) - (b.score || 0);
  }).slice(0, limit).map(({ item }) => ({
    city: item.n,
    country: getCountryName(item.c),
    lat: item.lat,
    lng: item.lng,
    timezone: item.tz,
    province: item.p || "",
    offset: getTimezoneOffset(item.tz),
    iso2: item.c
  }));
};
const findNearestCity = async (lat, lon) => {
  if (!fuseInstance) await initFuse();
  if (cachedData.length === 0) return null;
  let nearest = null;
  let minDistanceSq = Infinity;
  const box = 0.5;
  for (let i = 0; i < cachedData.length; i++) {
    const city = cachedData[i];
    if (Math.abs(city.lat - lat) < box && Math.abs(city.lng - lon) < box) {
      const dLat = city.lat - lat;
      const dLng = city.lng - lon;
      const distSq = dLat * dLat + dLng * dLng;
      if (distSq < minDistanceSq) {
        minDistanceSq = distSq;
        nearest = city;
      }
    }
  }
  if (nearest) {
    return {
      lat: nearest.lat,
      lng: nearest.lng,
      city: nearest.n,
      country: getCountryName(nearest.c),
      province: nearest.p || "",
      timezone: nearest.tz,
      offset: getTimezoneOffset(nearest.tz),
      iso2: nearest.c
    };
  }
  return null;
};

function CitySearch({
  onCitySelect,
  placeholder = "Nhập tên thành phố (VD: Hanoi, Can Tho...)",
  className = "",
  defaultQuery = ""
}) {
  const [query, setQuery] = useState(defaultQuery);
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    initFuse();
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleSearch = async (input) => {
    if (input.length > 1) {
      try {
        const mappedResults = await searchCities(input, 50);
        setResults(mappedResults);
        setIsOpen(true);
      } catch (e) {
        console.error("Search failed", e);
        setResults([]);
        setIsOpen(false);
      }
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };
  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    handleSearch(val);
  };
  const handleSelect = (city) => {
    setQuery(city.city);
    setIsOpen(false);
    onCitySelect(city);
  };
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: `relative ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(Search, { className: "absolute top-2.5 left-2.5 h-4 w-4 text-gray-500" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          placeholder,
          value: query,
          onChange: handleChange,
          onFocus: () => {
            if (query.length > 1) setIsOpen(true);
          },
          className: "bg-white pl-9"
        }
      )
    ] }),
    isOpen && results.length > 0 && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-0 z-[100] mt-1 max-h-60 w-full overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg", children: results.map((city, idx) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "cursor-pointer px-4 py-2 hover:bg-amber-50",
        onClick: () => handleSelect(city),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "font-medium text-gray-900", children: [
            city.city,
            city.province && city.province !== city.city ? `, ${city.province}` : ""
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500", children: [
            city.country,
            " (GMT",
            city.offset >= 0 ? "+" : "",
            city.offset,
            ")"
          ] })
        ]
      },
      `${city.city}-${city.country}-${idx}`
    )) }),
    isOpen && query.length > 1 && results.length === 0 && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-0 z-[100] mt-1 w-full rounded-md border border-gray-200 bg-white p-4 text-center text-sm text-gray-500 shadow-lg", children: "Không tìm thấy kết quả phù hợp" })
  ] });
}

export { CitySearch as C, Input as I, findNearestCity as f, initFuse as i };
