const _default = new Proxy({"src":"/sfYYkhPc/DmKpoRSo.png","width":800,"height":1018,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/images/default.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/images/default.png");
							return target[name];
						}
					});

export { _default as default };
