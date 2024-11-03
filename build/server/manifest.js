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
		client: {"start":"_app/immutable/entry/start.67Rs30ND.js","app":"_app/immutable/entry/app.0f_uv3do.js","imports":["_app/immutable/entry/start.67Rs30ND.js","_app/immutable/chunks/entry.nSn8JlnA.js","_app/immutable/chunks/runtime.D6zu14a2.js","_app/immutable/chunks/index.BKt0AyIO.js","_app/immutable/chunks/utils.Dapv9fV0.js","_app/immutable/entry/app.0f_uv3do.js","_app/immutable/chunks/runtime.D6zu14a2.js","_app/immutable/chunks/render.BzbPydf4.js","_app/immutable/chunks/template.CARJj4di.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/index-client.BQMO2lfi.js","_app/immutable/chunks/svelte-component.BFWgtP9l.js","_app/immutable/chunks/props.DdAzSyh3.js","_app/immutable/chunks/store.CP92b3eB.js","_app/immutable/chunks/utils.Dapv9fV0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-MMQJvn6y.js')),
			__memo(() => import('./chunks/1-CoOUaXWp.js')),
			__memo(() => import('./chunks/2-DbK0v9Cz.js')),
			__memo(() => import('./chunks/3-BfpNW6nR.js')),
			__memo(() => import('./chunks/4-Cy4nnFaw.js')),
			__memo(() => import('./chunks/5-C7MR7cYU.js')),
			__memo(() => import('./chunks/6-DpGTRaB3.js')),
			__memo(() => import('./chunks/7-5KSDoVtT.js')),
			__memo(() => import('./chunks/8-D5ncGJGC.js')),
			__memo(() => import('./chunks/9-FwhpxLII.js')),
			__memo(() => import('./chunks/10-BMOazs4F.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api/auth/signin",
				pattern: /^\/api\/auth\/signin\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BSHf1is_.js'))
			},
			{
				id: "/api/auth/signup",
				pattern: /^\/api\/auth\/signup\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CxYOus1O.js'))
			},
			{
				id: "/api/vote",
				pattern: /^\/api\/vote\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-Dlr6iaGs.js'))
			},
			{
				id: "/(auth)/me",
				pattern: /^\/me\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/party",
				pattern: /^\/party\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/party/[id]",
				pattern: /^\/party\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(unauth)/signin",
				pattern: /^\/signin\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(unauth)/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(auth)/vote",
				pattern: /^\/vote\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
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
