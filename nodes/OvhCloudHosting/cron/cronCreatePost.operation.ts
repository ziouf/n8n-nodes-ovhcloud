import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/** Create a new cron job on a web hosting service. */
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
	];
}

export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpPost(
		`/hosting/web/${serviceName}/cron`,
		{} as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
