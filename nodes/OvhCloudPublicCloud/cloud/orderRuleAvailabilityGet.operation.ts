import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'OVH Subsidiary',
			name: 'ovhSubsidiary',
			type: 'options',
			options: [
				{ name: 'Australia', value: 'australia' },
				{ name: 'Belgium', value: 'belgium' },
				{ name: 'Brazil', value: 'brazil' },
				{ name: 'Canada', value: 'canada' },
				{ name: 'Germany', value: 'germany' },
				{ name: 'India', value: 'india' },
				{ name: 'Madagascar', value: 'madagascar' },
				{ name: 'Poland', value: 'poland' },
				{ name: 'South Korea', value: 'south_korea' },
				{ name: 'Spain', value: 'spain' },
				{ name: 'United Kingdom', value: 'united_kingdom' },
				{ name: 'United States', value: 'united_states' },
			],
			default: 'united_states',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Addon Family',
			name: 'addonFamily',
			type: 'string',
			default: '',
			description: 'Addon family filter',
			displayOptions,
		},
		{
			displayName: 'Plan Code',
			name: 'planCode',
			type: 'string',
			default: '',
			description: 'Plan code filter',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Order Rule Availability operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/order/rule/availability
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ovhSubsidiary = this.getNodeParameter('ovhSubsidiary', _itemIndex ?? 0) as string;
	const addonFamily = this.getNodeParameter('addonFamily', _itemIndex ?? 0, '') as string;
	const planCode = this.getNodeParameter('planCode', _itemIndex ?? 0, '') as string;

	const qs: Record<string, string> = { ovhSubsidiary };
	if (addonFamily) {
		qs.addonFamily = addonFamily;
	}
	if (planCode) {
		qs.planCode = planCode;
	}

	const data = (await client.httpGet('/publicCloud/order/rule/availability', qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
