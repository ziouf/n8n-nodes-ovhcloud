import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'Lab ID',
			name: 'labId',
			type: 'string',
			default: '',
			required: true,
			description: 'Lab ID (e.g. lab-xxxx)',
			displayOptions,
		},
	];
}

/**
 * Executes the List Lab Agreements operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/lab/{labId}/agreement
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const labId = this.getNodeParameter('labId', _itemIndex ?? 0) as string;

	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/lab/${labId}/agreement`,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
