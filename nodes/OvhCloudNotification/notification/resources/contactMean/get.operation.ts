import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * Get a specific notification contact mean.
 *
 * HTTP method: GET
 * Endpoint: /v2/notification/contactMean/{contactMeanId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Contact Mean ID',
			name: 'contactMeanId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the contact mean',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Notification Contact Mean operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const contactMeanId = this.getNodeParameter('contactMeanId', 0) as string;
	const data = (await client.httpGet(`/v2/notification/contactMean/${contactMeanId}`)) as IDataObject;
	return [{ json: data }];
}
