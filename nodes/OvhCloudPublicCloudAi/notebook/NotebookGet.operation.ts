import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
			description: 'Filter on notebook label (e.g. \'notebook_name=spell_book\')',
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
		{
			displayName: 'With Spark',
			name: 'withSpark',
			type: 'string',
			default: '',
			description: 'Whether or not to include spark notebooks in search results',
			displayOptions,
		},
	];
}

/**
 * Executes the List notebooks operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/ai/notebook
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const labelSelector = this.getNodeParameter('labelSelector', _itemIndex ?? 0) as string;
	const order = this.getNodeParameter('order', _itemIndex ?? 0) as string;
	const page = this.getNodeParameter('page', _itemIndex ?? 0) as string;
	const size = this.getNodeParameter('size', _itemIndex ?? 0) as string;
	const sort = this.getNodeParameter('sort', _itemIndex ?? 0) as string;
	const statusState = this.getNodeParameter('statusState', _itemIndex ?? 0) as string;
	const updatedAfter = this.getNodeParameter('updatedAfter', _itemIndex ?? 0) as string;
	const updatedBefore = this.getNodeParameter('updatedBefore', _itemIndex ?? 0) as string;
	const userName = this.getNodeParameter('userName', _itemIndex ?? 0) as string;
	const withSpark = this.getNodeParameter('withSpark', _itemIndex ?? 0) as string;

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
	if (withSpark) qs.withSpark = withSpark;

	const client = getClient(this);
	const data = (await client.httpGet('cloud/project' + serviceName + '/ai/notebook', qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
