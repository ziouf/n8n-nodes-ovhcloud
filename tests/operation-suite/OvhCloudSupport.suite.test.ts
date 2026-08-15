import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudSupport',
	resource: 'supportTickets',
	operationParam: 'ovhCloudSupportTicketOperation',
	basePath: '/support',
	listSearchMethods: ['getSupportTicketServices'],
});
