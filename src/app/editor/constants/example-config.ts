export const exampleConfig = {
	deployment: {
		test: 'A',
		files: ['fileA', 'FileB'],
	},
	x: 'a',
	id: 'v1',
	handlers: [
		{
			urlRegex: '/.*',
			script: {
				scriptPath: 'example-python-app.py',
			},
		},
	],
	runtime: 'python27',
	material: 'ROOTED_DIRT',
	versionNumber: 10,
	double: 10.1,
	threadsafe: false,
};