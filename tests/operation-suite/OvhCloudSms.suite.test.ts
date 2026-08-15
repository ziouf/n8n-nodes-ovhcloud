import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudSms',
	resource: 'sms',
	operationParam: 'smsOperation',
	basePath: '/sms',
	listSearchMethods: ['getSmsServices'],
	// PUT /sms/{serviceName}/smpp/allowedIPs returns the updated allowed-IPs
	// list (string[]) which the operation .map()s directly; the suite's
	// shape-agnostic mock answers {} for PUT, so `data.map` throws. Same
	// response-shape class as list-via-POST operations.
	skipFiles: ['nodes/OvhCloudSms/resources/smpp/smppAllowedIPsUpdatePut.operation.ts'],
});
