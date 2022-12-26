export const JSON_DATA = {
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
    material: 'dirt',
    versionNumber: 10,
    threadsafe: true,
  };