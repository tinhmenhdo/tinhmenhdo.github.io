const TinhMenhDoLogo = new Proxy({"src":"/images/TinhMenhDoLogo.webp","width":531,"height":184,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/images/TinhMenhDoLogo.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/images/TinhMenhDoLogo.webp");
							return target[name];
						}
					});

export { TinhMenhDoLogo as default };
