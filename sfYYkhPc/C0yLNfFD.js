const yinyang = new Proxy({"src":"/sfYYkhPc/9LhDD1RG.png","width":24,"height":24,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/images/yinyang.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/images/yinyang.png");
							return target[name];
						}
					});

export { yinyang as default };
