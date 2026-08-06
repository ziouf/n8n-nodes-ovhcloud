import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions = {} as IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The OVHcloud service name',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPublicCloudProjects' },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Label selector',
			name: 'labelSelector',
			type: 'string',
			default: '',
			description: 'Filter on app label (e.g. \'app_name=kind_of_magic\')',
			displayOptions,
		},
		{
			displayName: 'Order',
			name: 'order',
			type: 'string',
			default: '',
			description: 'Order the result set',
			displayOptions,
		},
		{
			displayName: 'Page',
			name: 'page',
			type: 'string',
			default: '',
			description: 'Page of the result set',
			displayOptions,
		},
		{
			displayName: 'Size',
			name: 'size',
			type: 'string',
			default: '',
			description: 'Size of the result set',
			displayOptions,
		},
		{
			displayName: 'Sort',
			name: 'sort',
			type: 'string',
			default: '',
			description: 'Sort the result with this field',
			displayOptions,
		},
		{
			displayName: 'Status State',
			name: 'statusState',
			type: 'string',
			default: '',
			description: 'Filter on status state',
			displayOptions,
		},
		{
			displayName: 'Updated After',
			name: 'updatedAfter',
			type: 'string',
			default: '',
			description: 'Filter on updatedAt property (>)',
			displayOptions,
		},
		{
			displayName: 'Updated Before',
			name: 'updatedBefore',
			type: 'string',
			default: '',
			description: 'Filter on updatedAt property (<)',
			displayOptions,
		},
		{
			displayName: 'User Name',
			name: 'userName',
			type: 'string',
			default: '',
			description: 'User that submit the job',
			displayOptions,
		},
	];
}

/**
 * Executes the List apps operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/ai/app
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const labelSelector = this.getNodeParameter('labelSelector', 0) as string;
	const order = this.getNodeParameter('order', 0) as string;
	const page = this.getNodeParameter('page', 0) as string;
	const size = this.getNodeParameter('size', 0) as string;
	const sort = this.getNodeParameter('sort', 0) as string;
	const statusState = this.getNodeParameter('statusState', 0) as string;
	const updatedAfter = this.getNodeParameter('updatedAfter', 0) as string;
	const updatedBefore = this.getNodeParameter('updatedBefore', 0) as string;
	const userName = this.getNodeParameter('userName', 0) as string;

	const qs: Record<string, string> = {};
	if (labelSelector) qs.labelSelector = labelSelector;
	if (order) qs.order = order;
	if (page) qs.page = page;
	if (size) qs.size = size;
	if (sort) qs.sort = sort;
	if (statusState) qs.statusState = statusState;
	if (updatedAfter) qs.updatedAfter = updatedAfter;
	if (updatedBefore) qs.updatedBefore = updatedBefore;
	if (userName) qs.userName = userName;

	const client = new ApiClient(this);
	const data = (await client.httpGet('cloud/project' + serviceName + '/ai/app', qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
