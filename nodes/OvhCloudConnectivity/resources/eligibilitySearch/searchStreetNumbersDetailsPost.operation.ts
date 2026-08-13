import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Street Code',
			name: 'streetCode',
			type: 'string',
			default: '',
			required: true,
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
	];
}

/**
 * Get the details of the available street numbers for a street code.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/search/streetNumbers/details
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const streetCode = (this.getNodeParameter('streetCode', _itemIndex ?? 0, '') as string) || '';
	const streetAltCode = (this.getNodeParameter('streetAltCode', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (streetCode) body.streetCode = streetCode;
	if (streetAltCode) body.streetAltCode = streetAltCode;

	const data = (await client.httpPost(`/connectivity/eligibility/search/streetNumbers/details`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
