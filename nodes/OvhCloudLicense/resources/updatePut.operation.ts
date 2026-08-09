import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'License Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The WorkLight license service name (e.g. license-1)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getWorkLightLicenses', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'license-1',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Delete at Expiration',
			name: 'deleteAtExpiration',
			type: 'boolean',
			default: false,
			description: 'Whether to delete the license automatically at expiration',
			displayOptions,
		},
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			description: 'The version of the license (e.g. VERSION-6.2U.2CPU)',
			displayOptions,
		},
	];
}

/**
 * Alter license properties.
 *
 * HTTP method: PUT
 * Endpoint: /license/worklight/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;

	const body: IDataObject = {};

	const deleteAtExpiration = this.getNodeParameter('deleteAtExpiration', _itemIndex ?? 0) as boolean | undefined;
	if (deleteAtExpiration !== undefined) body.deleteAtExpiration = deleteAtExpiration;

	const version = (this.getNodeParameter('version', _itemIndex ?? 0, '') as string) || '';
	if (version) body.version = version;

	await client.httpPut(`/license/worklight/${encodeURIComponent(serviceName)}`, body);

	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}
