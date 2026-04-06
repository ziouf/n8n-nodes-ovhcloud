import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get building details.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/search/buildingDetails
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Building',
			name: 'building',
			type: 'string',
			default: '',
			required: true,
			description: 'The building identifier',
			displayOptions,
		},
		{
			displayName: 'Force Provider',
			name: 'forceProvider',
			type: 'string',
			default: '',
			description: 'Force a specific provider',
			displayOptions,
		},
	];
}

/**
 * Executes the Search Building Details operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body: IDataObject = {
		building: this.getNodeParameter('building', 0) as string,
	};
	const forceProvider = this.getNodeParameter('forceProvider', 0, '') as string;
	if (forceProvider) body.forceProvider = forceProvider;
	const data = (await client.httpPost('/connectivity/eligibility/search/buildingDetails', {
		body,
	})) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
