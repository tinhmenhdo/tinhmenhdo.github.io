const YinYang = new Proxy({"src":"/sfYYkhPc/K1H3_VNj.webp","width":728,"height":987,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/images/YinYang.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/images/YinYang.webp");
							return target[name];
						}
					});

export { YinYang as default };
