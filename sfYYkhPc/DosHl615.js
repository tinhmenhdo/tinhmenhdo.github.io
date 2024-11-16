const _144x114 = new Proxy({"src":"/sfYYkhPc/BJsLpR28.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/images/144x114.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/images/144x114.png");
							return target[name];
						}
					});

export { _144x114 as default };
