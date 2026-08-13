import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			required: true,
			description: 'The email address to check',
			displayOptions,
		},
	];
}

/**
 * Check email availability for a local SEO order (global, no serviceName)
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/localSeo/emailAvailability
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const email = this.getNodeParameter('email', _itemIndex) as string;
	const data = (await client.httpGet('/hosting/web/localSeo/emailAvailability', {
		email,
	})) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
