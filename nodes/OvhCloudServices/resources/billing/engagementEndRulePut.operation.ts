import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Strategy',
			name: 'strategy',
			type: 'options',
			default: 'STOP_ENGAGEMENT_KEEP_PRICE',
			required: true,
			options: [
				{
					name: 'Cancel Service',
					value: 'CANCEL_SERVICE'
				},
				{
					name: 'Reactivate Engagement',
					value: 'REACTIVATE_ENGAGEMENT'
				},
				{
					name: 'Stop Engagement Fallback Default Price',
					value: 'STOP_ENGAGEMENT_FALLBACK_DEFAULT_PRICE'
				},
				{
					name: 'Stop Engagement Keep Price',
					value: 'STOP_ENGAGEMENT_KEEP_PRICE'
				}
			],
			description: 'Strategy applied at the end of the Engagement',
			displayOptions,
		}

	];
}

/**
 * Executes the Put EngagementEndRule operation.
 *
 * HTTP method: PUT
 * Endpoint: /services/{serviceName}/billing/engagement/endRule
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const strategy = this.getNodeParameter('strategy', itemIndex) as string;
	const body: IDataObject = { strategy };
	const client = new ApiClient(this);
	const data = (await client.httpPut(`/services/${encodeURIComponent(serviceName)}/billing/engagement/endRule`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
