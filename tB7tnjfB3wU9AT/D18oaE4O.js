import { jsxs, jsx } from 'react/jsx-runtime';
import L from 'leaflet';
import React, { useCallback } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import 'clsx';
import 'emoji-regex';
import { f as findNearestCity } from './DHgRvzGA.js';

const icon = new Proxy({"src":"/images/marker-icon.png","width":25,"height":41,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/node_modules/leaflet/dist/images/marker-icon.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/node_modules/leaflet/dist/images/marker-icon.png");
							return target[name];
						}
					});

const iconShadow = new Proxy({"src":"/images/marker-shadow.png","width":41,"height":41,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/node_modules/leaflet/dist/images/marker-shadow.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/node_modules/leaflet/dist/images/marker-shadow.png");
							return target[name];
						}
					});

const leafletIconUrl = icon.src ?? icon;
const leafletIconShadowUrl = iconShadow.src ?? iconShadow;
const DefaultIcon = L.icon({
  iconUrl: leafletIconUrl,
  shadowUrl: leafletIconShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;
function LocationMarker({ onLocationSelect }) {
  useMapEvents({
    click(e) {
      onLocationSelect(e.latlng.lat, e.latlng.lng);
    }
  });
  return null;
}
function ChangeView({ center, zoom }) {
  const map = useMap();
  React.useEffect(() => {
    map.flyTo(center, zoom);
  }, [center, zoom, map]);
  return null;
}
function MapPickerClient({
  mapCenter,
  zoom,
  markerPosition,
  onLocationSelect,
  onLocationConfirm
}) {
  const [previewPosition, setPreviewPosition] = React.useState(null);
  const handleMapClick = useCallback((lat, lon) => {
    setPreviewPosition([lat, lon]);
  }, []);
  const handleConfirmLocation = useCallback(async () => {
    if (previewPosition && onLocationConfirm) {
      const [lat, lon] = previewPosition;
      let locationName = void 0;
      let fixedTimezone = void 0;
      try {
        const cityInfo = await findNearestCity(lat, lon);
        if (cityInfo) {
          let name = cityInfo.city;
          if (cityInfo.province && cityInfo.province !== cityInfo.city) {
            name += `, ${cityInfo.province}`;
          }
          name += `, ${cityInfo.country}`;
          locationName = name;
          fixedTimezone = cityInfo.timezone;
        }
      } catch (e) {
        console.warn("Failed to find nearest city:", e);
      }
      onLocationConfirm(lat, lon, locationName, fixedTimezone);
      setPreviewPosition(null);
    }
  }, [previewPosition, onLocationConfirm]);
  const handleCancelPreview = useCallback(() => {
    setPreviewPosition(null);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative h-64 w-full overflow-hidden rounded-lg border sm:h-80 md:h-96", children: [
    /* @__PURE__ */ jsxs(MapContainer, { center: mapCenter, zoom, className: "h-full w-full", children: [
      /* @__PURE__ */ jsx(
        TileLayer,
        {
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        }
      ),
      /* @__PURE__ */ jsx(ChangeView, { center: mapCenter, zoom }),
      /* @__PURE__ */ jsx(LocationMarker, { onLocationSelect: handleMapClick }),
      markerPosition && /* @__PURE__ */ jsx(Marker, { position: markerPosition }),
      previewPosition && /* @__PURE__ */ jsx(
        Marker,
        {
          position: previewPosition,
          icon: L.divIcon({
            html: '<div style="background-color: orange; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>',
            className: "preview-marker",
            iconSize: [20, 20],
            iconAnchor: [10, 10]
          })
        }
      )
    ] }),
    previewPosition && /* @__PURE__ */ jsxs("div", { className: "absolute top-4 left-1/2 z-1000 flex -translate-x-1/2 gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleConfirmLocation,
          className: "rounded bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-green-700",
          children: "✓ Đồng ý vị trí này"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleCancelPreview,
          className: "rounded bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-red-700",
          children: "✕ Hủy"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute right-2 bottom-6 z-1000 rounded bg-white/90 p-2 text-xs shadow", children: previewPosition ? /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "font-medium text-green-600", children: "Đã chọn vị trí!" }),
      /* @__PURE__ */ jsxs("div", { children: [
        "Tọa độ: ",
        previewPosition[0].toFixed(4),
        "°, ",
        previewPosition[1].toFixed(4),
        "°"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-1 text-blue-600", children: 'Nhấn "Đồng ý" để xác nhận' })
    ] }) : /* @__PURE__ */ jsx("div", { children: "Click bản đồ để chọn vị trí sinh" }) })
  ] });
}

export { MapPickerClient as default };
