import type webpack from 'webpack';

import path from 'node:path';

import type { BuildPaths, EnvVariables } from './config/build/@types/options';

import { buildWebpack } from './config/build/buildWebpack';

export default (env: EnvVariables): webpack.Configuration => {
	const paths: BuildPaths = {
		output: path.resolve(__dirname, 'build'),
		entry: path.resolve(__dirname, 'src', 'main.tsx'),
		html: path.resolve(__dirname, 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};

	const options = {
		port: env.port ?? 3000,
		mode: env.mode ?? 'development',
	};

	return buildWebpack({ ...options, paths });
};
