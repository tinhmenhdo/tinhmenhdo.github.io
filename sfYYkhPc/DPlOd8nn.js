const scale = new Proxy({"src":"/sfYYkhPc/DVknqKDC.png","width":24,"height":24,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/images/scale.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/images/scale.png");
							return target[name];
						}
					});

export { scale as default };
