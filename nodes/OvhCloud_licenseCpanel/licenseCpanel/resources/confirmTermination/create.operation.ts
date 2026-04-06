import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * Confirm termination of a Cpanel license service.
 *
 * HTTP method: POST
 * Endpoint: /license/cpanel/{serviceName}/confirmTermination
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Cpanel license service',
			displayOptions,
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The termination token sent by email to the admin contact',
			displayOptions,
		},
		{
			displayName: 'Commentary',
			name: 'commentary',
			type: 'string',
			default: '',
			description: 'Commentary about your termination request',
			displayOptions,
		},
		{
			displayName: 'Future Use',
			name: 'futureUse',
			type: 'options',
			options: [
				{ name: 'Not Replacing Service', value: 'NOT_REPLACING_SERVICE' },
				{ name: 'Other', value: 'OTHER' },
				{ name: 'Subscribe Another Service', value: 'SUBSCRIBE_AN_OTHER_SERVICE' },
				{
					name: 'Subscribe Other Kind of Service with Competitor',
					value: 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR',
				},
				{
					name: 'Subscribe Similar Service with Competitor',
					value: 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR',
				},
			],
			default: 'OTHER',
			description: 'What next after your termination request',
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'options',
			options: [
				{ name: "Features Don't Suit Me", value: 'FEATURES_DONT_SUIT_ME' },
				{ name: 'Lack of Performances', value: 'LACK_OF_PERFORMANCES' },
				{
					name: 'Migrated to Another OVH Product',
					value: 'MIGRATED_TO_ANOTHER_OVH_PRODUCT',
				},
				{ name: 'Migrated to Competitor', value: 'MIGRATED_TO_COMPETITOR' },
				{ name: 'Not Enough Recognition', value: 'NOT_ENOUGH_RECOGNITION' },
				{ name: 'Not Needed Anymore', value: 'NOT_NEEDED_ANYMORE' },
				{ name: 'Not Reliable', value: 'NOT_RELIABLE' },
				{ name: 'No Answer', value: 'NO_ANSWER' },
				{ name: 'Other', value: 'OTHER' },
				{
					name: "Product Dimension Don't Suit Me",
					value: 'PRODUCT_DIMENSION_DONT_SUIT_ME',
				},
				{ name: "Product Tools Don't Suit Me", value: 'PRODUCT_TOOLS_DONT_SUIT_ME' },
				{ name: 'Too Expensive', value: 'TOO_EXPENSIVE' },
				{ name: 'Too Hard to Use', value: 'TOO_HARD_TO_USE' },
				{ name: 'Unsatisfied by Customer Support', value: 'UNSATIFIED_BY_CUSTOMER_SUPPORT' },
			],
			default: 'OTHER',
			description: 'Reason of your termination request',
			displayOptions,
		},
	];
}

/**
 * Executes the Confirm Termination operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const token = this.getNodeParameter('token', 0) as string;
	const commentary = this.getNodeParameter('commentary', 0, '') as string;
	const futureUse = this.getNodeParameter('futureUse', 0, '') as string;
	const reason = this.getNodeParameter('reason', 0, '') as string;

	const body: IDataObject = { token };
	if (commentary) body.commentary = commentary;
	if (futureUse) body.futureUse = futureUse;
	if (reason) body.reason = reason;

	const data = (await client.httpPost(
		`/license/cpanel/${serviceName}/confirmTermination`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
