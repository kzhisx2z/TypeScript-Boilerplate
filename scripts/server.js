import { build } from './build.js';

build({
	entryPoints: ['app/server/server.ts'],
	outfile: 'build/server.js',
});
