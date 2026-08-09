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
			displayName: 'Hexacle',
			name: 'hexacle',
			type: 'string',
			default: '',
			description: 'Unique hexacle identifier of the address',
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
			displayName: 'Street Alt Code',
			name: 'streetAltCode',
			type: 'string',
			default: '',
			description: 'Alternative code of the street',
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
 * Run an eligibility test by address, reserved for partners.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/test/address/partners
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const hexacle = (this.getNodeParameter('hexacle', _itemIndex ?? 0, '') as string) || '';
	const streetCode = (this.getNodeParameter('streetCode', _itemIndex ?? 0, '') as string) || '';
	const streetAltCode = (this.getNodeParameter('streetAltCode', _itemIndex ?? 0, '') as string) || '';
	const streetNumber = (this.getNodeParameter('streetNumber', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (hexacle) body.hexacle = hexacle;
	if (streetCode) body.streetCode = streetCode;
	if (streetAltCode) body.streetAltCode = streetAltCode;
	if (streetNumber) body.streetNumber = streetNumber;

	const data = (await client.httpPost(`/connectivity/eligibility/test/address/partners`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
