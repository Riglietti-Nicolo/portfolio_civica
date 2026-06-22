export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "portfolio_civica/_app",
	assets: new Set(["'NDRANGHETA.pdf",".nojekyll","Anatomy_of_Atrocity.pptx.pdf","Sessantotto.pdf","The_Cold_Ledger.pptx.pdf","covers/image.png","covers/image10.png","covers/image11.png","covers/image2.png","covers/image3.png","covers/image4.png","covers/image5.png","covers/image6.png","covers/image7.png","covers/image8.png","covers/image9.png","la_costituzione.pdf","la_prigione_domestica.pdf","presentazione_amish.pdf","robots.txt"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.B1nbqXhK.js",app:"_app/immutable/entry/app.IhCfjqTZ.js",imports:["_app/immutable/entry/start.B1nbqXhK.js","_app/immutable/chunks/YXPh8Xc5.js","_app/immutable/chunks/sw6JzCOi.js","_app/immutable/entry/app.IhCfjqTZ.js","_app/immutable/chunks/sw6JzCOi.js","_app/immutable/chunks/Dj6f-nJM.js","_app/immutable/chunks/DEDqjojZ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
