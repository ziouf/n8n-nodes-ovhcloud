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
			displayName: 'Street Code',
			name: 'streetCode',
			type: 'string',
			default: '',
			required: true,
			description: 'Code of the street',
			displayOptions,
		},
		{
			displayName: 'Street Number',
			name: 'streetNumber',
			type: 'string',
			default: '',
			required: true,
			description: 'Number of the building',
			displayOptions,
		},
		{
			displayName: 'Owner Name',
			name: 'ownerName',
			type: 'string',
			default: '',
			description: 'Name of the owner, minimum 3 characters',
			displayOptions,
		},
	];
}

/**
 * Search the active and inactive lines at an address.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/search/lines
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const streetCode = (this.getNodeParameter('streetCode', _itemIndex ?? 0, '') as string) || '';
	const streetNumber = (this.getNodeParameter('streetNumber', _itemIndex ?? 0, '') as string) || '';
	const ownerName = (this.getNodeParameter('ownerName', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (streetCode) body.streetCode = streetCode;
	if (streetNumber) body.streetNumber = streetNumber;
	if (ownerName) body.ownerName = ownerName;

	const data = (await client.httpPost(`/connectivity/eligibility/search/lines`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
