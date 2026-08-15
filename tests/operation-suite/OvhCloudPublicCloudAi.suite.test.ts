import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudPublicCloudAi',
	resource: 'publicCloudAi',
	operationParam: 'publicCloudAiOperation',
	// The v2 AI endpoints are called with a relative URL (`cloud/project`
	// without a leading slash, normalized by the transport layer).
	basePath: 'cloud/project',
	listSearchMethods: [],
});
