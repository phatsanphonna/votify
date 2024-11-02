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
		client: {"start":"_app/immutable/entry/start.CrWoYQeg.js","app":"_app/immutable/entry/app.BRwkUdkh.js","imports":["_app/immutable/entry/start.CrWoYQeg.js","_app/immutable/chunks/entry.CGVyeEQ_.js","_app/immutable/chunks/runtime.BebzK8jN.js","_app/immutable/chunks/utils.BBtvxxXF.js","_app/immutable/entry/app.BRwkUdkh.js","_app/immutable/chunks/runtime.BebzK8jN.js","_app/immutable/chunks/render.3iZNqjfO.js","_app/immutable/chunks/utils.nWTeyq6A.js","_app/immutable/chunks/template.B-ZAag9S.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/if.DD3DEDZz.js","_app/immutable/chunks/props.BVkS62al.js","_app/immutable/chunks/store.NiGiiPUC.js","_app/immutable/chunks/utils.BBtvxxXF.js","_app/immutable/chunks/this.C_kBrDXs.js","_app/immutable/chunks/index-client.OPdPYRcB.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CdSdbd6C.js')),
			__memo(() => import('./chunks/1-DVjyFEE1.js')),
			__memo(() => import('./chunks/2-BKORFQOz.js')),
			__memo(() => import('./chunks/3-Ro3enewE.js')),
			__memo(() => import('./chunks/4-2As687Q1.js')),
			__memo(() => import('./chunks/5-CHOqU8Gn.js')),
			__memo(() => import('./chunks/6-Co-cfjjU.js')),
			__memo(() => import('./chunks/7-BlQdi6Qd.js')),
			__memo(() => import('./chunks/8-Cu02be1Q.js')),
			__memo(() => import('./chunks/9-IGMG6ms4.js')),
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
				endpoint: __memo(() => import('./chunks/_server.ts-CqI5PI3C.js'))
			},
			{
				id: "/api/auth/signup",
				pattern: /^\/api\/auth\/signup\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CxYOus1O.js'))
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
