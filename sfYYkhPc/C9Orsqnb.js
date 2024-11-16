const birthdayCake = new Proxy({"src":"/sfYYkhPc/C0eDVXtY.png","width":24,"height":24,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/images/birthday-cake.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/images/birthday-cake.png");
							return target[name];
						}
					});

export { birthdayCake as default };
