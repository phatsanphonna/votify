const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BrYHj2vV.js","app":"_app/immutable/entry/app.DuRnoZK8.js","imports":["_app/immutable/entry/start.BrYHj2vV.js","_app/immutable/chunks/entry.CZN8pgHd.js","_app/immutable/chunks/runtime.BBr2q3Ln.js","_app/immutable/entry/app.DuRnoZK8.js","_app/immutable/chunks/runtime.BBr2q3Ln.js","_app/immutable/chunks/render.BqZ_mqHI.js","_app/immutable/chunks/disclose-version.hrPzCK-_.js","_app/immutable/chunks/index-client.qgZlBHUp.js","_app/immutable/chunks/store.DUW2GzaO.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Dp_iLZJQ.js')),
			__memo(() => import('./chunks/1-Dij7O-TX.js')),
			__memo(() => import('./chunks/2-D72wEFYn.js')),
			__memo(() => import('./chunks/3-DmLvkqFS.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/party",
				pattern: /^\/party\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
