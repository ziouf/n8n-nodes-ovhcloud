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
			description: 'The internal name of your CDN offer',
			displayOptions,
		},
		{
			displayName: 'Certificate',
			name: 'certificate',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Chain',
			name: 'chain',
			type: 'string',
			default: '',
			description: 'Certificate chain',
			displayOptions,
		},
		{
			displayName: 'Key',
			name: 'key',
			type: 'string',
			default: '',
			required: true,
			description: 'Certificate key',
			displayOptions,
		},
	];
}

/**
 * Executes the Post UpdateSsl operation.
 *
 * HTTP method: POST
 * Endpoint: /cdn/dedicated/{serviceName}/ssl/update
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const certificate = this.getNodeParameter('certificate', _itemIndex) as string;
	const chain = (this.getNodeParameter('chain', _itemIndex, "") as string);
	const key = this.getNodeParameter('key', _itemIndex) as string;

	const body: IDataObject = {};
	body.certificate = certificate;
	if (chain !== '') body.chain = chain;
	body.key = key;

	const client = getClient(this);
	const data = (await client.httpPost(`/cdn/dedicated/${encodeURIComponent(serviceName)}/ssl/update`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
