const heroImage = new Proxy({"src":"/_astro/hero-image.DEMO9wW0.webp","width":1024,"height":495,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zerobug/website/itvsmarterscx/src/assets/images/hero-image.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zerobug/website/itvsmarterscx/src/assets/images/hero-image.webp");
							return target[name];
						}
					});

export { heroImage as default };
