const appStore = new Proxy({"src":"/sfYYkhPc/t3tG4Jz3.png","width":300,"height":89,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/images/app-store.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/images/app-store.png");
							return target[name];
						}
					});

export { appStore as default };
