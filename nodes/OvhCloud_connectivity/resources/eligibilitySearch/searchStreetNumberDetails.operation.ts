import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get street numbers with details.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/search/streetNumbers/details
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
			displayName: 'Street Alt Code',
			name: 'streetAltCode',
			type: 'string',
			default: '',
			description: 'The alternative street code',
			displayOptions,
		},
	];
}

/**
 * Executes the Search Street Number Details operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body: IDataObject = {
		streetCode: this.getNodeParameter('streetCode', 0) as string,
	};
	const streetAltCode = this.getNodeParameter('streetAltCode', 0, '') as string;
	if (streetAltCode) body.streetAltCode = streetAltCode;
	const data = (await client.httpPost('/connectivity/eligibility/search/streetNumbers/details', {
		body,
	})) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
