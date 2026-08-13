import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getPublicCloudProjects',
				displayName: 'Service Name',
				description: 'The database service name',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
			displayOptions,
		},
		{
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'IP Block',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}
/**
 * Executes the Update MongoDB IP Restriction operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/mongodb/{clusterId}/ipRestriction/{ipBlock}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const ipBlock = this.getNodeParameter('ipBlock', _itemIndex ?? 0) as string;
	const description = this.getNodeParameter('description', _itemIndex ?? 0, '') as string;

	const body: IDataObject = {
    description: description || undefined
  };
	const client = getClient(this);
	const data = (await client.httpPut(`/cloud/project/${serviceName}/database/mongodb/${clusterId}/ipRestriction/${ipBlock}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
