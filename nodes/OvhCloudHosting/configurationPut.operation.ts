import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/** Update PHP version configuration for a web hosting service. */
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
			displayName: 'PHP Version',
			name: 'phpVersion',
			type: 'options',
			default: '7.4',
			options: [
				{ name: '7.4', value: '7.4' },
				{ name: '8.0', value: '8.0' },
				{ name: '8.1', value: '8.1' },
				{ name: '8.2', value: '8.2' },
			],
			description: 'The PHP version to configure for this service',
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
	const phpVersion = this.getNodeParameter('phpVersion', _itemIndex as number) as string;

	const body: IDataObject = {};
	if (phpVersion && phpVersion !== '') {
		body.phpVersion = phpVersion;
	}

	const data = (await client.httpPut(
		`/hosting/web/${serviceName}/configuration`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
