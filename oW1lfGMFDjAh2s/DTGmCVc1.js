import { jsx } from 'react/jsx-runtime';
import React, { useState, useEffect, Suspense } from 'react';
import { e as cn } from './Cccj9IsO.js';

function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("bg-primary/10 animate-pulse rounded-md", className), ...props });
}

const MapPickerClient = React.lazy(() => import('./D18oaE4O.js'));
function MapPicker(props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return /* @__PURE__ */ jsx("div", { className: "relative h-64 w-full overflow-hidden rounded-lg border bg-gray-100 sm:h-80 md:h-96", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-full w-full" }) });
  }
  return /* @__PURE__ */ jsx(
    Suspense,
    {
      fallback: /* @__PURE__ */ jsx("div", { className: "relative h-64 w-full overflow-hidden rounded-lg border bg-gray-100 sm:h-80 md:h-96", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-full w-full" }) }),
      children: /* @__PURE__ */ jsx(MapPickerClient, { ...props })
    }
  );
}

const MapPicker$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  MapPicker
}, Symbol.toStringTag, { value: 'Module' }));

export { MapPicker as M, Skeleton as S, MapPicker$1 as a };
