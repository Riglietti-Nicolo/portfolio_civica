

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DkvWG8-S.js","_app/immutable/chunks/sw6JzCOi.js","_app/immutable/chunks/DEDqjojZ.js"];
export const stylesheets = ["_app/immutable/assets/2.B2RRMCH7.css"];
export const fonts = [];
