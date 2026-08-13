import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This will permanently confirm the termination of the zone.', displayOptions),
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The zoneName identifier',
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
			displayName: 'Commentary Future Use',
			name: 'commentaryFutureUse',
			type: 'string',
			default: '',
			description: 'Commentary about your future use',
			displayOptions,
		},
		{
			displayName: 'Commentary Reason',
			name: 'commentaryReason',
			type: 'string',
			default: '',
			description: 'Commentary about your reason for termination request',
			displayOptions,
		},
		{
			displayName: 'Future Use',
			name: 'futureUse',
			type: 'options',
			default: 'NOT_REPLACING_SERVICE',
			options: [
				{ name: 'NOT_REPLACING_SERVICE', value: 'NOT_REPLACING_SERVICE' },
				{ name: 'OTHER', value: 'OTHER' },
				{ name: 'SUBSCRIBE_AN_OTHER_SERVICE', value: 'SUBSCRIBE_AN_OTHER_SERVICE' },
				{ name: 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR', value: 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' },
				{ name: 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR', value: 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR' },
			],
			description: 'All future uses you can provide for a service termination',
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'options',
			default: 'FEATURES_DONT_SUIT_ME',
			options: [
				{ name: 'FEATURES_DONT_SUIT_ME', value: 'FEATURES_DONT_SUIT_ME' },
				{ name: 'LACK_OF_PERFORMANCES', value: 'LACK_OF_PERFORMANCES' },
				{ name: 'MIGRATED_TO_ANOTHER_OVH_PRODUCT', value: 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' },
				{ name: 'MIGRATED_TO_COMPETITOR', value: 'MIGRATED_TO_COMPETITOR' },
				{ name: 'NO_ANSWER', value: 'NO_ANSWER' },
				{ name: 'NOT_ENOUGH_RECOGNITION', value: 'NOT_ENOUGH_RECOGNITION' },
				{ name: 'NOT_NEEDED_ANYMORE', value: 'NOT_NEEDED_ANYMORE' },
				{ name: 'NOT_RELIABLE', value: 'NOT_RELIABLE' },
				{ name: 'OTHER', value: 'OTHER' },
				{ name: 'PRODUCT_DIMENSION_DONT_SUIT_ME', value: 'PRODUCT_DIMENSION_DONT_SUIT_ME' },
				{ name: 'PRODUCT_TOOLS_DONT_SUIT_ME', value: 'PRODUCT_TOOLS_DONT_SUIT_ME' },
				{ name: 'TOO_EXPENSIVE', value: 'TOO_EXPENSIVE' },
				{ name: 'TOO_HARD_TO_USE', value: 'TOO_HARD_TO_USE' },
				{ name: 'UNSATIFIED_BY_CUSTOMER_SUPPORT', value: 'UNSATIFIED_BY_CUSTOMER_SUPPORT' },
			],
			description: 'All reasons you can provide for a service termination',
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
	];
}

/**
 * Executes the Confirm service termination operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/confirmTermination
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
		const zoneName = this.getNodeParameter('zoneName', _itemIndex) as string;

	const body: IDataObject = {};
		const commentary = this.getNodeParameter('commentary', _itemIndex, '') as string;
		if (commentary !== '') body['commentary'] = commentary;
		const commentaryFutureUse = this.getNodeParameter('commentaryFutureUse', _itemIndex, '') as string;
		if (commentaryFutureUse !== '') body['commentaryFutureUse'] = commentaryFutureUse;
		const commentaryReason = this.getNodeParameter('commentaryReason', _itemIndex, '') as string;
		if (commentaryReason !== '') body['commentaryReason'] = commentaryReason;
		const futureUse = this.getNodeParameter('futureUse', _itemIndex, '') as string;
		if (futureUse !== '') body['futureUse'] = futureUse;
		const reason = this.getNodeParameter('reason', _itemIndex, '') as string;
		if (reason !== '') body['reason'] = reason;
		const token = this.getNodeParameter('token', _itemIndex, '') as string;
		body['token'] = token;

	const data = (await client.httpPost(`/domain/zone/${encodeURIComponent(zoneName)}/confirmTermination`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
