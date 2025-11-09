const logo = new Proxy({"src":"/_astro/logo.DVhMYADf.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zerobug/website/itvsmarterscx/src/assets/images/logo.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zerobug/website/itvsmarterscx/src/assets/images/logo.png");
							return target[name];
						}
					});

export { logo as default };
