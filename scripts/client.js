import { build } from './build.js';

build({
	entryPoints: ['app/client/server.ts'],
	outfile: 'build/client.js',
});
