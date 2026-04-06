import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get buildings for an address.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/search/buildings
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Hexacle',
			name: 'hexacle',
			type: 'string',
			default: '',
			description: 'The hexacle identifier',
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
 * Executes the Search Buildings operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body: IDataObject = {};
	const hexacle = this.getNodeParameter('hexacle', 0, '') as string;
	const streetCode = this.getNodeParameter('streetCode', 0, '') as string;
	const streetNumber = this.getNodeParameter('streetNumber', 0, '') as string;
	const streetAltCode = this.getNodeParameter('streetAltCode', 0, '') as string;
	if (hexacle) body.hexacle = hexacle;
	if (streetCode) body.streetCode = streetCode;
	if (streetNumber) body.streetNumber = streetNumber;
	if (streetAltCode) body.streetAltCode = streetAltCode;
	const data = (await client.httpPost('/connectivity/eligibility/search/buildings', {
		body,
	})) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
