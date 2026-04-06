import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Search active/inactive lines.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/search/lines
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Street Code',
			name: 'streetCode',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Street Number',
			name: 'streetNumber',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Owner Name',
			name: 'ownerName',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Street Number',
			name: 'streetNumber',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Owner Name',
			name: 'ownerName',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Search Lines operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body: IDataObject = {
		streetCode: this.getNodeParameter('streetCode', 0) as string,
		streetNumber: this.getNodeParameter('streetNumber', 0) as string,
	};
	const ownerName = this.getNodeParameter('ownerName', 0, '') as string;
	if (ownerName) body.ownerName = ownerName;
	const data = (await client.httpPost('/connectivity/eligibility/search/lines', {
		body,
	})) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
