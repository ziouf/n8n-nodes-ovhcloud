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
			displayName: 'Eligibility Reference',
			name: 'eligibilityReference',
			type: 'string',
			default: '',
			required: true,
			description: 'Reference of the eligibility test',
			displayOptions,
		},
	];
}

/**
 * Get the details of an eligibility test by its reference.
 *
 * HTTP method: GET
 * Endpoint: /connectivity/eligibility/test
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const eligibilityReference = (this.getNodeParameter('eligibilityReference', _itemIndex ?? 0, '') as string) || '';

	const qs: IDataObject = {};
	if (eligibilityReference) qs.eligibilityReference = eligibilityReference;

	const data = (await client.httpGet(`/connectivity/eligibility/test`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
