import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Offer',
			name: 'offer',
			type: 'string',
			default: '',
			required: true,
			description: 'Describe offer capabilities',
			displayOptions,
		},
	];
}

/**
 * Get offer capabilities
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/offerCapabilities
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const offer = this.getNodeParameter('offer', itemIndex) as string;
	const data = (await client.httpGet('/hosting/web/offerCapabilities', {
		offer,
	})) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
