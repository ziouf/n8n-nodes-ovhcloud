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
			displayName: 'flavor',
			name: 'flavor',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Role',
			name: 'role',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}
/**
 * Executes the Create MongoDB Node operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/mongodb/{clusterId}/node
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const flavor = this.getNodeParameter('flavor', _itemIndex ?? 0, '') as string;
	const region = this.getNodeParameter('region', _itemIndex ?? 0, '') as string;
	const role = this.getNodeParameter('role', _itemIndex ?? 0, '') as string;

	const body: IDataObject = {
    flavor: flavor || undefined,
    region: region || undefined,
    role: role || undefined
  };
	const client = getClient(this);
	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/mongodb/${clusterId}/node`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
