import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/** Set an environment variable on a web hosting service. */
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
			description: 'The hosting web service name to set the environment variable on',
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
			displayName: 'Key',
			name: 'key',
			type: 'string',
			default: '',
			required: true,
			description: 'The environment variable key name',
			displayOptions,
		},
		{
			displayName: 'Value',
			name: 'value',
			type: 'string',
			default: '',
			required: true,
			description: 'The environment variable value',
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
	const key = this.getNodeParameter('key', itemIndex as number) as string;
	const value = this.getNodeParameter('value', itemIndex as number) as string;

	const data = (await client.httpPost(
		`/hosting/web/${serviceName}/env/set`,
		{},
		{ name: key, value },
	)) as IDataObject;

	return this.helpers.returnJsonArray([{ ...data }]);
}
