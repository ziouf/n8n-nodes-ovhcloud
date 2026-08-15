import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudDedicatedCloud',
	resource: 'dedicatedCloud',
	operationParam: 'dedicatedCloudOperation',
	basePath: '/dedicatedCloud',
	listSearchMethods: ['getDedicatedCloudServices'],
	// List-via-POST endpoint (`string[]` per docs/api-specs/v1/dedicatedCloud.json,
	// "Get vendor object types"): the runner mocks POST -> {} so data.slice() can't
	// run; the op is correct in production. Skip until the runner supports per-file
	// response shapes.
	skipFiles: ['nodes/OvhCloudDedicatedCloud/vendor/vendorObjectTypeList.operation.ts'],
});
