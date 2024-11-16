const _72x72 = new Proxy({"src":"/sfYYkhPc/BJsLpR28.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/images/72x72.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/images/72x72.png");
							return target[name];
						}
					});

export { _72x72 as default };
