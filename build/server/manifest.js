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
		client: {"start":"_app/immutable/entry/start.B9pP7EEb.js","app":"_app/immutable/entry/app.7TOA7Muz.js","imports":["_app/immutable/entry/start.B9pP7EEb.js","_app/immutable/chunks/entry.DiJVCEx0.js","_app/immutable/chunks/runtime.aUzNjL39.js","_app/immutable/chunks/index.BkiM7uAi.js","_app/immutable/chunks/utils.ylBIWhXo.js","_app/immutable/entry/app.7TOA7Muz.js","_app/immutable/chunks/runtime.aUzNjL39.js","_app/immutable/chunks/render.HNL4GQ_1.js","_app/immutable/chunks/svelte-head.BhKDNomO.js","_app/immutable/chunks/template.DeaMfOID.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/if.DtqLP0Zw.js","_app/immutable/chunks/svelte-component.JnjCp6Gj.js","_app/immutable/chunks/props.XMVdRfqy.js","_app/immutable/chunks/store.phIPBGZI.js","_app/immutable/chunks/utils.ylBIWhXo.js","_app/immutable/chunks/this.DgjYA9T8.js","_app/immutable/chunks/index-client.DObiQXvy.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-NYrl4xOf.js')),
			__memo(() => import('./chunks/1-CvpIaFEh.js')),
			__memo(() => import('./chunks/2-DWwOhXJZ.js')),
			__memo(() => import('./chunks/3-8_WYIBpK.js')),
			__memo(() => import('./chunks/4-lYuV5qgX.js')),
			__memo(() => import('./chunks/5-CEUoNdvA.js')),
			__memo(() => import('./chunks/6-DtWgdQqN.js')),
			__memo(() => import('./chunks/7-HZ2lOSgr.js')),
			__memo(() => import('./chunks/8-By8NlaqD.js')),
			__memo(() => import('./chunks/9-DYq6ISDo.js')),
			__memo(() => import('./chunks/10-Cty3otaA.js')),
			__memo(() => import('./chunks/11-BswmLqbi.js')),
			__memo(() => import('./chunks/12-J3c-FOki.js')),
			__memo(() => import('./chunks/13-BFq5q3Ud.js')),
			__memo(() => import('./chunks/14-0I4Lfzp8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
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
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/party",
				pattern: /^\/party\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/party/[id]",
				pattern: /^\/party\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/party/[id]/members",
				pattern: /^\/party\/([^/]+?)\/members\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/party/[id]/policy",
				pattern: /^\/party\/([^/]+?)\/policy\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(unauth)/signin",
				pattern: /^\/signin\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(unauth)/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/statistics",
				pattern: /^\/statistics\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(auth)/vote",
				pattern: /^\/vote\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
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
