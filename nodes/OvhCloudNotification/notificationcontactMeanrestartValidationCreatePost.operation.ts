import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Contact Mean ID',
			name: 'contactMeanId',
			type: 'string',
			default: '',
			required: true,
			description: 'The contactMeanId identifier',
		},

	];
}

/**
 * Executes the Post Restart the validation process for this contact mean, if you did not receive the OTP operation.
 *
 * HTTP method: POST
 * Endpoint: /notification/contactMean/{contactMeanId}/restartValidation
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const contactMeanId = this.getNodeParameter('contactMeanId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpPost('/notification/contactMean/' + contactMeanId + '/restartValidation')) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
