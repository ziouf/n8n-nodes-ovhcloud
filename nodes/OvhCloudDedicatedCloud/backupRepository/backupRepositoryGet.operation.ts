import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedCloudServices',
				displayName: 'Service Name',
				description: 'The name/ID of the VMware on OVHcloud infrastructure',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
			displayOptions,
		},
		{
			displayName: 'Repository ID',
			name: 'repositoryId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get backup repository operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/backupRepository/{repositoryId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const repositoryId = this.getNodeParameter('repositoryId', _itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/backupRepository/${repositoryId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
