import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create an eligibility recall.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/recall
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Reference',
			name: 'reference',
			type: 'string',
			default: '',
			required: true,
			description: 'The reference for the eligibility recall',
			displayOptions,
		},
		{
			displayName: 'Reference Type',
			name: 'referenceType',
			type: 'options',
			options: [
				{
					name: 'Address',
					value: 'address',
				},
				{
					name: 'Building',
					value: 'building',
				},
			],
			default: 'address',
			required: true,
			description: 'The type of reference',
			displayOptions,
		},
		{
			displayName: 'Dedicated Fiber Request',
			name: 'dedicatedfiberRequest',
			type: 'boolean',
			default: false,
			description: 'Whether to request dedicated fiber',
			displayOptions,
		},
		{
			displayName: 'Pro Fiber Request',
			name: 'profiberRequest',
			type: 'boolean',
			default: false,
			description: 'Whether to request pro fiber',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Eligibility Recall operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body: IDataObject = {
		reference: this.getNodeParameter('reference', 0) as string,
		referenceType: this.getNodeParameter('referenceType', 0) as string,
	};
	const dedicatedFiber = this.getNodeParameter('dedicatedfiberRequest', 0, false) as boolean;
	const proFiber = this.getNodeParameter('profiberRequest', 0, false) as boolean;
	if (dedicatedFiber) body.dedicatedfiberRequest = dedicatedFiber;
	if (proFiber) body.profiberRequest = proFiber;
	const data = (await client.httpPost('/connectivity/eligibility/recall', { body })) as IDataObject;
	return [{ json: data }];
}
