const tinhMenhDoGpt = new Proxy({"src":"/images/tinh-menh-do-gpt.jpg","width":548,"height":729,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/images/tinh-menh-do-gpt.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/images/tinh-menh-do-gpt.jpg");
							return target[name];
						}
					});

export { tinhMenhDoGpt as default };
