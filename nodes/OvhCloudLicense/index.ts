import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// License operations
import * as list from './resources/list.operation';
import * as orderableVersionsGet from './resources/orderableVersionsGet.operation';
import * as get from './resources/get.operation';
import * as updatePut from './resources/updatePut.operation';
import * as allowedDestinationIpGet from './resources/allowedDestinationIpGet.operation';
import * as canLicenseBeMovedToGet from './resources/canLicenseBeMovedToGet.operation';
import * as changeIpPost from './resources/changeIpPost.operation';
import * as terminatePost from './resources/terminatePost.operation';
import * as confirmTerminationPost from './resources/confirmTerminationPost.operation';

export function description() {
	const props: INodeProperties[] = [];

	// License type selector (multi-type ready: more license types can be added later)
	props.push({
		displayName: 'License Type',
		name: 'licenseType',
		type: 'options',
		default: 'worklight',
		options: [{ name: 'WorkLight', value: 'worklight' }],
	});

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'licenseOperation',
		type: 'options',
		noDataExpression: true,
		default: 'list',
		options: [
			{
				name: 'Alter License Properties',
				value: 'updatePut',
				action: 'Alter the properties of a WorkLight license',
			},
			{
				name: 'Check If License Can Be Moved',
				value: 'canLicenseBeMovedToGet',
				action: 'Check if a WorkLight license can be moved to another IP',
			},
			{
				name: 'Confirm License Termination',
				value: 'confirmTerminationPost',
				action: 'Confirm the termination of a WorkLight license',
			},
			{
				name: 'Get Allowed Destination IPs',
				value: 'allowedDestinationIpGet',
				action: 'Get the IPs where a WorkLight license can be moved to',
			},
			{
				name: 'Get License Properties',
				value: 'get',
				action: 'Get the properties of a WorkLight license',
			},
			{
				name: 'Get Orderable Versions',
				value: 'orderableVersionsGet',
				action: 'Get the orderable WorkLight license versions',
			},
			{
				name: 'List WorkLight Licenses',
				value: 'list',
				action: 'List all available WorkLight licenses',
			},
			{
				name: 'Move License to Another IP',
				value: 'changeIpPost',
				action: 'Move a WorkLight license to another IP',
			},
			{
				name: 'Terminate License',
				value: 'terminatePost',
				action: 'Ask for the termination of a WorkLight license',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('licenseOperation', 0) as string;
	const licenseType = this.getNodeParameter('licenseType', 0, 'worklight') as string;

	// The licenseType parameter is read here as part of the dispatch context so
	// future license types can route to their own handlers. Only 'worklight' is
	// supported for now, so every operation targets the /license/worklight prefix.
	if (licenseType === 'worklight') {
		switch (operation) {
			case 'list':
				return list.execute.call(this);
			case 'orderableVersionsGet':
				return orderableVersionsGet.execute.call(this);
			case 'get':
				return get.execute.call(this);
			case 'updatePut':
				return updatePut.execute.call(this);
			case 'allowedDestinationIpGet':
				return allowedDestinationIpGet.execute.call(this);
			case 'canLicenseBeMovedToGet':
				return canLicenseBeMovedToGet.execute.call(this);
			case 'changeIpPost':
				return changeIpPost.execute.call(this);
			case 'terminatePost':
				return terminatePost.execute.call(this);
			case 'confirmTerminationPost':
				return confirmTerminationPost.execute.call(this);
		}
	}

	throw new Error(`Unsupported operation "${operation}" for license type "${licenseType}"`);
}
