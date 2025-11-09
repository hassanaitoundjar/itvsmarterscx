const phoneHome = new Proxy({"src":"/_astro/phone-home.Cv8Hu4LN.webp","width":768,"height":1016,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zerobug/website/itvsmarterscx/src/assets/images/phone-home.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zerobug/website/itvsmarterscx/src/assets/images/phone-home.webp");
							return target[name];
						}
					});

export { phoneHome as default };
