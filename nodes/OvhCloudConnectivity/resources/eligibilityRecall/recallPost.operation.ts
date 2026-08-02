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
			displayName: 'Reference',
			name: 'reference',
			type: 'string',
			default: '',
			required: true,
			description: 'Unique reference for the recall',
			displayOptions,
		},
		{
			displayName: 'Reference Type',
			name: 'referenceType',
			type: 'options',
			default: "address",
			required: true,
			options: [
				{ name: 'Address', value: 'address' },
				{ name: 'Building', value: 'building' },
			],
			description: 'Type of reference for the recall',
			displayOptions,
		},
		{
			displayName: 'Pro Fiber Request',
			name: 'profiberRequest',
			type: 'boolean',
			default: false,
			description: 'Whether to check the FTTH Pro Fiber eligibility',
			displayOptions,
		},
		{
			displayName: 'Dedicated Fiber Request',
			name: 'dedicatedfiberRequest',
			type: 'boolean',
			default: false,
			description: 'Whether to check the dedicated FTTO/FTTE eligibility',
			displayOptions,
		},
	];
}

/**
 * Create a new eligibility recall to check connection options.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/recall
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const reference = (this.getNodeParameter('reference', 0, '') as string) || '';
	const referenceType = (this.getNodeParameter('referenceType', 0, '') as string) || '';
	const profiberRequest = this.getNodeParameter('profiberRequest', 0, false) as boolean;
	const dedicatedfiberRequest = this.getNodeParameter('dedicatedfiberRequest', 0, false) as boolean;

	const body: IDataObject = {};
	if (reference) body.reference = reference;
	if (referenceType) body.referenceType = referenceType;
	if (profiberRequest !== undefined) body.profiberRequest = profiberRequest;
	if (dedicatedfiberRequest !== undefined) body.dedicatedfiberRequest = dedicatedfiberRequest;

	const data = (await client.httpPost(`/connectivity/eligibility/recall`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
