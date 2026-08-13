import type {
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
		displayName: 'Public Cloud Project',
		name: 'publicCloudProjectId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		required: true,
		description: 'The Public Cloud project ID (e.g. 12345678-1234-1234-1234-1234567890ab)',
		modes: [
			{
				displayName: 'From List',
				name: 'list',
				type: 'list',
				typeOptions: { searchListMethod: 'getPublicCloudProjects' },
			},
			{
				displayName: 'By ID',
				name: 'name',
				type: 'string',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			},
		],
		displayOptions,
	},
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
		displayName: 'Nodeid',
		name: 'nodeId',
		type: 'string',
		default: '',
		required: true,
		description: 'Node ID',
		displayOptions,
	},
	];
}


/**
 * Executes the Get Kafka Connect Node operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/cloud/database/kafkaConnect/{serviceName}/node/{nodeId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('projectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const nodeId = this.getNodeParameter('nodeId', _itemIndex ?? 0) as string;

	const data = (await client.httpGet(`/publicCloud/project/${projectId}/cloud/database/kafkaConnect/${serviceName}/node/${nodeId}`)) as import('n8n-workflow').IDataObject;

	return this.helpers.returnJsonArray([data as INodeExecutionData]);
}
