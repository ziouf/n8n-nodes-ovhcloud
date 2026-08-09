import type { IDisplayOptions, IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Resource Name',
			name: 'serviceName' as const,
			type: 'resourceLocator' as const,
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The web hosting resource name (e.g. ns123456.ip-123-45-678.eu)',
			modes: [
				{
					displayName: 'From List' as const,
					name: 'list' as const,
					type: 'list' as const,
					typeOptions: { searchListMethod: 'getHostingWebServices', searchable: true },
				},
				{
					displayName: 'By Name' as const,
					name: 'name' as const,
					type: 'string' as const,
					placeholder: 'ns123456.ip-123-45-678.eu',
				},
			],
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex?: number) {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number, '', {
		extractValue: true,
	}) as string;

	return this.helpers.returnJsonArray([
		(await client.httpGet(
			`/webhosting/resource/${encodeURIComponent(serviceName)}/certificate`,
		)) as IDataObject,
	]);
}
