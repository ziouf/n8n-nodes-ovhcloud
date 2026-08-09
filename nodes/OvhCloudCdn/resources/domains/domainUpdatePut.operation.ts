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
			description: 'The internal name of your CDN offer',
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain of this object',
			displayOptions,
		},
		{
			displayName: 'Cache Rule Use',
			name: 'cacheRuleUse',
			type: 'number',
			default: 0,
			displayOptions,
		},
		{
			displayName: 'Cname',
			name: 'cname',
			type: 'string',
			default: '',
			description: 'CNAME value',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'options',
			default: 'error',
			options: [
				{ name: 'Error', value: 'error' },
				{ name: 'Off', value: 'off' },
				{ name: 'On', value: 'on' },
				{ name: 'Removing', value: 'removing' },
			],
			description: 'Status of the domain',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			default: 'plain',
			options: [
				{ name: 'Plain', value: 'plain' },
				{ name: 'SSL', value: 'ssl' },
			],
			description: 'Type of the domain',
			displayOptions,
		},
	];
}

/**
 * Executes the Put UpdateDomain operation.
 *
 * HTTP method: PUT
 * Endpoint: /cdn/dedicated/{serviceName}/domains/{domain}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const domain = this.getNodeParameter('domain', _itemIndex) as string;
	const cacheRuleUse = (this.getNodeParameter('cacheRuleUse', _itemIndex, "") as number);
	const cname = (this.getNodeParameter('cname', _itemIndex, "") as string);
	const status = (this.getNodeParameter('status', _itemIndex, "") as string);
	const type = (this.getNodeParameter('type', _itemIndex, "") as string);

	const body: IDataObject = {};
	if (cacheRuleUse !== 0) body.cacheRuleUse = cacheRuleUse;
	if (cname !== '') body.cname = cname;
	if (status !== '') body.status = status;
	if (type !== '') body.type = type;

	const client = new ApiClient(this);
	const data = (await client.httpPut(`/cdn/dedicated/${encodeURIComponent(serviceName)}/domains/${encodeURIComponent(domain)}`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
