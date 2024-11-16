const universe = new Proxy({"src":"/sfYYkhPc/C5BzPDWp.png","width":32,"height":32,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/images/universe.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/images/universe.png");
							return target[name];
						}
					});

export { universe as default };
