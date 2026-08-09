import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain of the service',
			displayOptions,
		},
		{
			displayName: 'IAM Tags',
			name: 'iamTags',
			type: 'json',
			default: '{}',
			description: 'Filter resources on IAM tags',
			displayOptions,
		},
		{
			displayName: 'Return All',
			name: 'returnAll',
			type: 'boolean',
			default: false,
			description: 'Whether to return all results or only up to a given limit',
			displayOptions,
		},
		{
			displayName: 'Limit',
			name: 'limit',
			type: 'number',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
			description: 'Max number of results to return',
			displayOptions: {
				show: {
					returnAll: [false],
				},
			},
		},
	];
}

/**
 * Executes the List SAP Pre-installation Tasks operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/sap
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const qs: IDataObject = {};
	const iamTagsRaw = this.getNodeParameter('iamTags', _itemIndex, '{}') as string;
	let iamTags: IDataObject | undefined;
	try { iamTags = JSON.parse(iamTagsRaw || '{}') as IDataObject; } catch { iamTags = undefined; }
	if (iamTags) { qs.iamTags = iamTags; }
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/sap`, qs)) as IDataObject;
	const returnAll = this.getNodeParameter('returnAll', _itemIndex) as boolean;

	if (returnAll) {
		return data as unknown as INodeExecutionData[];
	}

	const limit = this.getNodeParameter('limit', _itemIndex) as number;
	return (data as unknown as INodeExecutionData[]).slice(0, limit);
}
