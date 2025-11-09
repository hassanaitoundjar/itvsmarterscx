const iptvSmarters = new Proxy({"src":"/_astro/iptv-smarters.DrUBDw4Q.webp","width":768,"height":768,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zerobug/website/itvsmarterscx/src/assets/images/iptv-smarters.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zerobug/website/itvsmarterscx/src/assets/images/iptv-smarters.webp");
							return target[name];
						}
					});

export { iptvSmarters as default };
