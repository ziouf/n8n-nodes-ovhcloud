import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Test eligibility for an address.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/test/address
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
			displayName: 'Street Alt Code',
			name: 'streetAltCode',
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
			displayName: 'Street Alt Code',
			name: 'streetAltCode',
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
 * Executes the Test Address operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body: IDataObject = {};
	const hexacle = this.getNodeParameter('hexacle', 0, '') as string;
	const streetCode = this.getNodeParameter('streetCode', 0, '') as string;
	const streetAltCode = this.getNodeParameter('streetAltCode', 0, '') as string;
	const streetNumber = this.getNodeParameter('streetNumber', 0, '') as string;
	if (hexacle) body.hexacle = hexacle;
	if (streetCode) body.streetCode = streetCode;
	if (streetAltCode) body.streetAltCode = streetAltCode;
	if (streetNumber) body.streetNumber = streetNumber;
	const data = (await client.httpPost('/connectivity/eligibility/test/address', {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
