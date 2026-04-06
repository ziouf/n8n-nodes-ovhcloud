import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Test eligibility for a line.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/test/line
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Line Number',
			name: 'lineNumber',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'options',
			options: [
				{
					name: 'Active',
					value: 'active',
				},
				{
					name: 'Inactive',
					value: 'inactive',
				},
			],
			default: 'active',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Street Code',
			name: 'streetCode',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Street Number',
			name: 'streetNumber',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'options',
			options: [
				{
					name: 'Active',
					value: 'active',
				},
				{
					name: 'Inactive',
					value: 'inactive',
				},
			],
			default: 'active',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Street Code',
			name: 'streetCode',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Street Number',
			name: 'streetNumber',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Test Line operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body: IDataObject = {
		lineNumber: this.getNodeParameter('lineNumber', 0) as string,
		status: this.getNodeParameter('status', 0) as string,
	};
	const streetCode = this.getNodeParameter('streetCode', 0, '') as string;
	const streetNumber = this.getNodeParameter('streetNumber', 0, '') as string;
	if (streetCode) body.streetCode = streetCode;
	if (streetNumber) body.streetNumber = streetNumber;
	const data = (await client.httpPost('/connectivity/eligibility/test/line', {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
