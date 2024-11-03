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
		client: {"start":"_app/immutable/entry/start.BZMXXSsx.js","app":"_app/immutable/entry/app.Bnf6o6YA.js","imports":["_app/immutable/entry/start.BZMXXSsx.js","_app/immutable/chunks/entry.c75LEA1_.js","_app/immutable/chunks/runtime.CUd8L4PE.js","_app/immutable/chunks/index.CGhM8uf7.js","_app/immutable/chunks/utils.DRqmrcfj.js","_app/immutable/entry/app.Bnf6o6YA.js","_app/immutable/chunks/runtime.CUd8L4PE.js","_app/immutable/chunks/render.BzBl1P_w.js","_app/immutable/chunks/svelte-head.DhZz02Q9.js","_app/immutable/chunks/template.d_0FGAGE.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/this.D-e3P9U2.js","_app/immutable/chunks/svelte-component.Df6SYwDN.js","_app/immutable/chunks/props.DOJ_1Ofh.js","_app/immutable/chunks/store.X--5bqZB.js","_app/immutable/chunks/utils.DRqmrcfj.js","_app/immutable/chunks/index-client.Bf_0YrRR.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BjEI7I3j.js')),
			__memo(() => import('./chunks/1-CuTnzTf7.js')),
			__memo(() => import('./chunks/2-CwMp4Qwn.js')),
			__memo(() => import('./chunks/3-D7kNGFsd.js')),
			__memo(() => import('./chunks/4-DBh2tv5W.js')),
			__memo(() => import('./chunks/5-BRbP96vG.js')),
			__memo(() => import('./chunks/6-UKwhkT89.js')),
			__memo(() => import('./chunks/7-C07ZXmdj.js')),
			__memo(() => import('./chunks/8-B_z3H-Io.js')),
			__memo(() => import('./chunks/9-B5dJyywn.js')),
			__memo(() => import('./chunks/10-V76bSYdb.js')),
			__memo(() => import('./chunks/11-CUKLWrjv.js')),
			__memo(() => import('./chunks/12-C7L90Xbc.js')),
			__memo(() => import('./chunks/13-dJkh1MHK.js')),
			__memo(() => import('./chunks/14-DYY5RxrX.js'))
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
