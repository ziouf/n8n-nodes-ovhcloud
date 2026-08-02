import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// Metrics operations
import * as list from './resources/list.operation';
import * as get from './resources/get.operation';
import * as updatePut from './resources/updatePut.operation';
import * as consumptionGet from './resources/consumptionGet.operation';
import * as tokenGet from './resources/tokenGet.operation';
import * as tokenCreatePost from './resources/tokenCreatePost.operation';
import * as tokenDetailGet from './resources/tokenDetailGet.operation';
import * as tokenUpdatePut from './resources/tokenUpdatePut.operation';
import * as tokenDelete from './resources/tokenDelete.operation';
import * as quotaSetPut from './resources/quotaSetPut.operation';
import * as quotaGet from './resources/quotaGet.operation';
import * as confirmTerminationPost from './resources/confirmTerminationPost.operation';
import * as changeContactPost from './resources/changeContactPost.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'metricsOperation',
		type: 'options',
		noDataExpression: true,
		default: 'list',
		options: [
			{
				name: 'Change Metrics Contact',
				value: 'changeContactPost',
				action: 'Launch a contact change procedure for a Metrics service',
			},
			{
				name: 'Confirm Metrics Service Termination',
				value: 'confirmTerminationPost',
				action: 'Confirm termination of a Metrics service',
			},
			{
				name: 'Create Metrics Token',
				value: 'tokenCreatePost',
				action: 'Create a new token for a Metrics service',
			},
			{
				name: 'Delete Metrics Token',
				value: 'tokenDelete',
				action: 'Revoke a Metrics token',
			},
			{
				name: 'Edit Metrics Service',
				value: 'updatePut',
				action: 'Modify the description of a Metrics service',
			},
			{
				name: 'Edit Metrics Token',
				value: 'tokenUpdatePut',
				action: 'Modify a Metrics token',
			},
			{
				name: 'Get Metrics Service',
				value: 'get',
				action: 'Get properties of a Metrics service',
			},
			{
				name: 'Get Metrics Service Consumption',
				value: 'consumptionGet',
				action: 'Get consumption for a Metrics service',
			},
			{
				name: 'Get Metrics Service Quota',
				value: 'quotaGet',
				action: 'Get the quota of a Metrics service',
			},
			{
				name: 'Get Metrics Token',
				value: 'tokenDetailGet',
				action: 'Get details of a specific Metrics token',
			},
			{
				name: 'List Metrics Services',
				value: 'list',
				action: 'List all available Metrics services',
			},
			{
				name: 'List Metrics Tokens',
				value: 'tokenGet',
				action: 'List all tokens of a Metrics service',
			},
			{
				name: 'Set Metrics Service Quota',
				value: 'quotaSetPut',
				action: 'Set the overquota of a Metrics service',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('metricsOperation', 0) as string;

	switch (operation) {
		case 'changeContactPost':
			return changeContactPost.execute.call(this);
		case 'confirmTerminationPost':
			return confirmTerminationPost.execute.call(this);
		case 'tokenCreatePost':
			return tokenCreatePost.execute.call(this);
		case 'tokenDelete':
			return tokenDelete.execute.call(this);
		case 'updatePut':
			return updatePut.execute.call(this);
		case 'tokenUpdatePut':
			return tokenUpdatePut.execute.call(this);
		case 'get':
			return get.execute.call(this);
		case 'consumptionGet':
			return consumptionGet.execute.call(this);
		case 'quotaGet':
			return quotaGet.execute.call(this);
		case 'tokenDetailGet':
			return tokenDetailGet.execute.call(this);
		case 'list':
			return list.execute.call(this);
		case 'tokenGet':
			return tokenGet.execute.call(this);
		case 'quotaSetPut':
			return quotaSetPut.execute.call(this);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
