import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get building refs from line number.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/search/buildingsByLine
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
			description: 'The status of the line',
			displayOptions,
		},
	];
}

/**
 * Executes the Search Buildings By Line operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body: IDataObject = {
		lineNumber: this.getNodeParameter('lineNumber', 0) as string,
		status: this.getNodeParameter('status', 0) as string,
	};
	const data = (await client.httpPost('/connectivity/eligibility/search/buildingsByLine', {
		body,
	})) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
