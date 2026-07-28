import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/** Purge the CDN cache for an attached domain on a web hosting service. */
export function description(
	displayOptions: IDisplayOptions,
): import('n8n-workflow').INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The hosting web service name',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getHostingWebServices', searchable: true },
				},
				{ displayName: 'By Name', name: 'name', type: 'string', placeholder: 'myservice.ovh' },
			],
			displayOptions,
		},
		{
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'The attached domain name whose CDN cache should be purged',
			placeholder: 'example.com',
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex as number, '', {
		extractValue: true,
	}) as string;
	const domainName = this.getNodeParameter('domainName', itemIndex as number) as string;

	const data = (await client.httpPost(
		`/hosting/web/${serviceName}/attachedDomain/${encodeURIComponent(domainName)}/purge`,
		{},
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
