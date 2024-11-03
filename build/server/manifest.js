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
		client: {"start":"_app/immutable/entry/start.BJ7WUpBq.js","app":"_app/immutable/entry/app.D1cknLwx.js","imports":["_app/immutable/entry/start.BJ7WUpBq.js","_app/immutable/chunks/entry.B_7kLJt4.js","_app/immutable/chunks/runtime.8MaW9EIQ.js","_app/immutable/chunks/index.BPDzd7Iu.js","_app/immutable/chunks/utils.352NZ3fP.js","_app/immutable/entry/app.D1cknLwx.js","_app/immutable/chunks/runtime.8MaW9EIQ.js","_app/immutable/chunks/render.DNC5ILtV.js","_app/immutable/chunks/template.DEdvQlwJ.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/index-client.D8m34BzE.js","_app/immutable/chunks/svelte-component.CSF97GUO.js","_app/immutable/chunks/props.MJjq2fm6.js","_app/immutable/chunks/store.B8IAFY5V.js","_app/immutable/chunks/utils.352NZ3fP.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-FTcXU-pH.js')),
			__memo(() => import('./chunks/1-DoToEBIz.js')),
			__memo(() => import('./chunks/2-DygQiswS.js')),
			__memo(() => import('./chunks/3-CMYEZo7Z.js')),
			__memo(() => import('./chunks/4-CIASC4-m.js')),
			__memo(() => import('./chunks/5-DaWs9gYT.js')),
			__memo(() => import('./chunks/6-CT21qHlC.js')),
			__memo(() => import('./chunks/7-BWE58-Ev.js')),
			__memo(() => import('./chunks/8-CC46IwXY.js')),
			__memo(() => import('./chunks/9-CCjWk6Uk.js')),
			__memo(() => import('./chunks/10-qSqX9Y5o.js')),
			__memo(() => import('./chunks/11-B_Hmv0S4.js')),
			__memo(() => import('./chunks/12-BYNBsYB8.js')),
			__memo(() => import('./chunks/13-C7Oa1TMA.js')),
			__memo(() => import('./chunks/14-CkCilvcA.js'))
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
