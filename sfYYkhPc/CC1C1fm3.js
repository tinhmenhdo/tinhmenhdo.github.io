const man = new Proxy({"src":"/sfYYkhPc/2hg96iXY.png","width":24,"height":24,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/images/man.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/images/man.png");
							return target[name];
						}
					});

export { man as default };
