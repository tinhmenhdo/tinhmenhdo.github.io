const icon = new Proxy({"src":"/sfYYkhPc/BpEvo4sH.png","width":16,"height":16,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/images/icon.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/images/icon.png");
							return target[name];
						}
					});

export { icon as default };
