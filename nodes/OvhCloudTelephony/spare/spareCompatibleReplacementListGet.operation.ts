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
			displayName: 'Spare',
			name: 'spare',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your spare',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Spare Compatible Replacement List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/spare/{spare}/compatibleReplacement
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const spare = this.getNodeParameter('spare', itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet(
		'/telephony/spare/' + encodeURIComponent(spare) + '/compatibleReplacement',
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
