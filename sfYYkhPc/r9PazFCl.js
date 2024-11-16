const architecture = new Proxy({"src":"/sfYYkhPc/CUL551wH.png","width":24,"height":24,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/images/architecture.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/images/architecture.png");
							return target[name];
						}
					});

export { architecture as default };
