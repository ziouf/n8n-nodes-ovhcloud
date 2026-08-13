import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Form Name',
			name: 'formName',
			type: 'string',
			default: '',
			required: true,
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
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const formName = this.getNodeParameter('formName', _itemIndex) as string;
	const answers = this.getNodeParameter('answers', _itemIndex) as string;
	const body: IDataObject = { answers: JSON.parse(answers) };
	const client = getClient(this);
	const data = (await client.httpPost(`/services/${encodeURIComponent(serviceName)}/form/${encodeURIComponent(formName)}/answer`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
