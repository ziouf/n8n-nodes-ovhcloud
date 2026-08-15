import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudOvhCloudConnect',
	resource: 'ovhcloudconnect',
	operationParam: 'ovhCloudConnectOperation',
	basePath: '/ovhCloudConnect',
	listSearchMethods: ['getOvhCloudConnectServices'],
	// POST /ovhCloudConnect/{serviceName}/changeContact est attendu comme unknown[]
	// et l'opération appelle data.map() directement ; le mock shape-agnostique
	// retourne {} pour POST, donc data.map() lève une exception. Même classe de
	// réponse que les opérations list-via-POST.
	skipFiles: ['nodes/OvhCloudOvhCloudConnect/resources/main/changeContactPost.operation.ts'],
});
