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
			displayName: 'NetApp Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The NetApp service name (uuid), e.g. aaaa-bbbb-cccc-dddd',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getNetAppServices', searchable: true },
				},
				{ displayName: 'By Name', name: 'name', type: 'string', placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' },
			],
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
			options: [
				{ name: 'NOT_REPLACING_SERVICE', value: 'NOT_REPLACING_SERVICE' },
				{ name: 'OTHER', value: 'OTHER' },
				{ name: 'SUBSCRIBE_AN_OTHER_SERVICE', value: 'SUBSCRIBE_AN_OTHER_SERVICE' },
				{ name: 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR', value: 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' },
				{ name: 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR', value: 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR' },
			],
			default: 'NOT_REPLACING_SERVICE',
			description: 'All future uses you can provide for a service termination',
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'options',
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
			default: 'FEATURES_DONT_SUIT_ME',
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
 * Endpoint: /storage/netapp/{serviceName}/confirmTermination
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', {
				extractValue: true,
			}) as string;
	const body: IDataObject = {};
	const commentary = this.getNodeParameter('commentary', itemIndex, '') as string;
	if (commentary !== '') { body.commentary = commentary; }
	const commentaryFutureUse = this.getNodeParameter('commentaryFutureUse', itemIndex, '') as string;
	if (commentaryFutureUse !== '') { body.commentaryFutureUse = commentaryFutureUse; }
	const commentaryReason = this.getNodeParameter('commentaryReason', itemIndex, '') as string;
	if (commentaryReason !== '') { body.commentaryReason = commentaryReason; }
	const futureUse = this.getNodeParameter('futureUse', itemIndex, '') as string;
	if (futureUse !== '') { body.futureUse = futureUse; }
	const reason = this.getNodeParameter('reason', itemIndex, '') as string;
	if (reason !== '') { body.reason = reason; }
	body.token = this.getNodeParameter('token', itemIndex) as string;
	const data = (await client.httpPost(`/storage/netapp/${encodeURIComponent(serviceName)}/confirmTermination`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
