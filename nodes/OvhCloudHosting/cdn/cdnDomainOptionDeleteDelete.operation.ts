import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This will permanently delete the CDN domain option. This action is irreversible.', displayOptions),
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'The domain name',
			displayOptions,
		},
		{
			displayName: 'Option Name',
			name: 'optionName',
			type: 'string',
			default: '',
			required: true,
			description: 'The option name to reset/remove',
			displayOptions,
		},
	];
}

/**
 * Remove or reset a CDN domain option to its default value
 *
 * HTTP method: DELETE
 * Endpoint: /hosting/web/{serviceName}/cdn/domain/{domain}/option/{optionName}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const domain = this.getNodeParameter('domain', _itemIndex) as string;
	const optionName = this.getNodeParameter('optionName', _itemIndex) as string;
	const data = (await client.httpDelete(
		`/hosting/web/${serviceName}/cdn/domain/${domain}/option/${optionName}`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
