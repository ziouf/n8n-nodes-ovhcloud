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
			displayName: 'Form Name',
			name: 'formName',
			type: 'string',
			default: '',
			required: true,
			description: 'The formName identifier',
			displayOptions,
		},
		{
			displayName: 'Answers',
			name: 'answers',
			type: 'json',
			default: '',
			required: true,
			description: 'JSON array of answers to the form',
			displayOptions,
		}

	];
}

/**
 * Executes the Post FormAnswer operation.
 *
 * HTTP method: POST
 * Endpoint: /services/{serviceName}/form/{formName}/answer
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const formName = this.getNodeParameter('formName', itemIndex) as string;
	const answers = this.getNodeParameter('answers', itemIndex) as string;
	const body: IDataObject = { answers: JSON.parse(answers) };
	const client = new ApiClient(this);
	const data = (await client.httpPost(`/services/${encodeURIComponent(serviceName)}/form/${encodeURIComponent(formName)}/answer`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
