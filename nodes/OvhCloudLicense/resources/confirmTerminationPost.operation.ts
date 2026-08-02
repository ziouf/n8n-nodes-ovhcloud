import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'License Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The WorkLight license service name (e.g. license-1)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getWorkLightLicenses', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'license-1',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			default: '',
			required: true,
			description: 'The termination token sent by email to the admin contact',
			typeOptions: { password: true },
			displayOptions,
		},
		{
			displayName: 'Commentary',
			name: 'commentary',
			type: 'string',
			default: '',
			description: 'Commentary about the termination request',
			displayOptions,
		},
		{
			displayName: 'Future Use',
			name: 'futureUse',
			type: 'options',
			default: 'NOT_REPLACING_SERVICE',
			options: [
				{ name: 'Not Replacing Service', value: 'NOT_REPLACING_SERVICE' },
				{ name: 'Other', value: 'OTHER' },
				{ name: 'Subscribe an Other Service', value: 'SUBSCRIBE_AN_OTHER_SERVICE' },
				{
					name: 'Subscribe Other Kind of Service With Competitor',
					value: 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR',
				},
				{
					name: 'Subscribe Similar Service With Competitor',
					value: 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR',
				},
			],
			description: 'What will happen after the termination',
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'options',
			default: 'FEATURES_DONT_SUIT_ME',
			options: [
				{ name: 'Features Dont Suit Me', value: 'FEATURES_DONT_SUIT_ME' },
				{ name: 'Lack of Performances', value: 'LACK_OF_PERFORMANCES' },
				{ name: 'Migrated to Another OVH Product', value: 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' },
				{ name: 'Migrated to Competitor', value: 'MIGRATED_TO_COMPETITOR' },
				{ name: 'No Answer', value: 'NO_ANSWER' },
				{ name: 'Not Enough Recognition', value: 'NOT_ENOUGH_RECOGNITION' },
				{ name: 'Not Needed Anymore', value: 'NOT_NEEDED_ANYMORE' },
				{ name: 'Not Reliable', value: 'NOT_RELIABLE' },
				{ name: 'Other', value: 'OTHER' },
				{ name: 'Product Dimension Dont Suit Me', value: 'PRODUCT_DIMENSION_DONT_SUIT_ME' },
				{ name: 'Product Tools Dont Suit Me', value: 'PRODUCT_TOOLS_DONT_SUIT_ME' },
				{ name: 'Too Expensive', value: 'TOO_EXPENSIVE' },
				{ name: 'Too Hard to Use', value: 'TOO_HARD_TO_USE' },
				{ name: 'Unsatisfied by Customer Support', value: 'UNSATIFIED_BY_CUSTOMER_SUPPORT' },
			],
			description: 'The reason for the termination',
			displayOptions,
		},
	];
}

/**
 * Confirm license termination.
 *
 * HTTP method: POST
 * Endpoint: /license/worklight/{serviceName}/confirmTermination
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const token = this.getNodeParameter('token', 0) as string;

	const body: IDataObject = { token };

	const commentary = (this.getNodeParameter('commentary', 0, '') as string) || '';
	if (commentary) body.commentary = commentary;

	const futureUse = (this.getNodeParameter('futureUse', 0, '') as string) || '';
	if (futureUse) body.futureUse = futureUse;

	const reason = (this.getNodeParameter('reason', 0, '') as string) || '';
	if (reason) body.reason = reason;

	const data = (await client.httpPost(
		`/license/worklight/${encodeURIComponent(serviceName)}/confirmTermination`,
		body,
	)) as string;
	return this.helpers.returnJsonArray([{ message: data }]);
}
