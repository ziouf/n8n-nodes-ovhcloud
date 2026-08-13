import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

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
		{
			displayName: 'Street Code',
			name: 'streetCode',
			type: 'string',
			default: '',
			description: 'Unique code of the street',
			displayOptions,
		},
		{
			displayName: 'Street Number',
			name: 'streetNumber',
			type: 'string',
			default: '',
			description: 'Number of the building',
			displayOptions,
		},
	];
}

/**
 * Run an eligibility test for a line number, copper only.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/test/line
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const lineNumber = (this.getNodeParameter('lineNumber', _itemIndex ?? 0, '') as string) || '';
	const status = (this.getNodeParameter('status', _itemIndex ?? 0, '') as string) || '';
	const streetCode = (this.getNodeParameter('streetCode', _itemIndex ?? 0, '') as string) || '';
	const streetNumber = (this.getNodeParameter('streetNumber', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (lineNumber) body.lineNumber = lineNumber;
	if (status) body.status = status;
	if (streetCode) body.streetCode = streetCode;
	if (streetNumber) body.streetNumber = streetNumber;

	const data = (await client.httpPost(`/connectivity/eligibility/test/line`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
