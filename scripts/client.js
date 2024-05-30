import { build } from './build.js';

build({
	entryPoints: ['app/client/client.ts'],
	outfile: 'build/client.js',
});
