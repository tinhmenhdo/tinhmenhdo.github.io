const diaban = new Proxy({"src":"/sfYYkhPc/BRym7aWA.png","width":453,"height":453,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/images/diaban.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/images/diaban.png");
							return target[name];
						}
					});

export { diaban as default };
