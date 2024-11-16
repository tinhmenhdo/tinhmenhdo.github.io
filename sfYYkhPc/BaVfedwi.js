const amDuong = new Proxy({"src":"/sfYYkhPc/t1EmRLUP.png","width":728,"height":728,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/images/am-duong.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/images/am-duong.png");
							return target[name];
						}
					});

export { amDuong as default };
