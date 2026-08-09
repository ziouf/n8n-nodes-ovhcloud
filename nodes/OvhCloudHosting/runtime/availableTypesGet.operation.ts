import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'Language',
			name: 'language',
			type: 'string',
			default: '',
			description: 'Filter the available runtime types on their language',
			displayOptions,
		},
	];
}

/**
 * List the runtime types available for the hosting
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/runtimeAvailableTypes
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number) as string;
	const language = this.getNodeParameter('language', _itemIndex as number, '') as string;

	const qs: IDataObject = {};
	if (language) {
		qs.language = language;
	}

	const data = (await client.httpGet(
		`/hosting/web/${encodeURIComponent(serviceName)}/runtimeAvailableTypes`,
		qs,
	)) as string[];
	return this.helpers.returnJsonArray(data.map((type) => ({ type })));
}
