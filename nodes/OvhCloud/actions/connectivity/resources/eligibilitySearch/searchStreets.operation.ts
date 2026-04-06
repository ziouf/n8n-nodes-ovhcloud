import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get streets for a locality.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/search/streets
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'INSEE Code',
			name: 'inseeCode',
			type: 'string',
			default: '',
			required: true,
			description: 'The INSEE code of the locality',
			displayOptions,
		},
	];
}

/**
 * Executes the Search Streets operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body: IDataObject = {
		inseeCode: this.getNodeParameter('inseeCode', 0) as string,
	};
	const data = (await client.httpPost('/connectivity/eligibility/search/streets', {
		body,
	})) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
