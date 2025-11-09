const iptvSmartersPro = new Proxy({"src":"/_astro/iptv-smarters-pro.C9T3c5Pp.webp","width":768,"height":768,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zerobug/website/itvsmarterscx/src/assets/images/iptv-smarters-pro.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zerobug/website/itvsmarterscx/src/assets/images/iptv-smarters-pro.webp");
							return target[name];
						}
					});

export { iptvSmartersPro as default };
