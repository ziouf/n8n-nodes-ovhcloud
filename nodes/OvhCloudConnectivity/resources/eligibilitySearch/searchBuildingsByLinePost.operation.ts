import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Line Number',
			name: 'lineNumber',
			type: 'string',
			default: '',
			required: true,
			description: 'Number of the line',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'options',
			default: "active",
			required: true,
			options: [
				{ name: 'Active', value: 'active' },
				{ name: 'Inactive', value: 'inactive' },
			],
			description: 'Status of the line',
			displayOptions,
		},
	];
}

/**
 * Get the building references from a line number.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/search/buildingsByLine
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const lineNumber = (this.getNodeParameter('lineNumber', _itemIndex ?? 0, '') as string) || '';
	const status = (this.getNodeParameter('status', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (lineNumber) body.lineNumber = lineNumber;
	if (status) body.status = status;

	const data = (await client.httpPost(`/connectivity/eligibility/search/buildingsByLine`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
