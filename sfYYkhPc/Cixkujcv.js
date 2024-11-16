const yinyang2 = new Proxy({"src":"/sfYYkhPc/DS3CXu3F.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/images/yinyang2.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/images/yinyang2.webp");
							return target[name];
						}
					});

export { yinyang2 as default };
