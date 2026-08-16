import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudCdn',
	// Verbatim from the node's `errorContext` argument to executeTemplate in .node.ts (the CDN dispatch is `cdnOperation`).
	resource: 'publicCloudAi',
	operationParam: 'publicCloudAiOperation',
	basePath: '/cdn/dedicated',
	// No methods.listSearch on the node: all locators here are plain string
	// parameters (serviceName / domain / ...), not resourceLocators.
	listSearchMethods: [],
});
