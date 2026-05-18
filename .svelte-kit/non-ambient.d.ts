
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>
		};
		Pathname(): "/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/'NDRANGHETA.pdf" | "/.nojekyll" | "/Anatomy_of_Atrocity.pptx.pdf" | "/Sessantotto.pdf" | "/The_Cold_Ledger.pptx.pdf" | "/covers/image.png" | "/covers/image10.png" | "/covers/image11.png" | "/covers/image2.png" | "/covers/image3.png" | "/covers/image4.png" | "/covers/image5.png" | "/covers/image6.png" | "/covers/image7.png" | "/covers/image8.png" | "/covers/image9.png" | "/la_costituzione.pdf" | "/la_prigione_domestica.pdf" | "/presentazione_amish.pdf" | "/robots.txt" | string & {};
	}
}