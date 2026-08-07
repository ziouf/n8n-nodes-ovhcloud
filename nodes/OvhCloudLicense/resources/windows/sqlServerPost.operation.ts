import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'License Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Windows license service name',
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
					placeholder: 'windows-1',
				},
			],
			displayOptions,
		},
		{
			displayName: 'LicenseId',
			name: 'licenseId',
			type: 'string',
			default: '',
			required: true,
			description: 'Your license serial number',
			displayOptions,
		},
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			required: true,
			description: 'Your license version',
			displayOptions,
		},
	];
}


/**
 * Link your own sql server license to this Windows license.
 *
 * HTTP method: POST
 * Endpoint: /license/windows/{serviceName}/sqlServer
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', { extractValue: true }) as string;
	const licenseId = this.getNodeParameter('licenseId', itemIndex, '') as string;
	const version = this.getNodeParameter('version', itemIndex, '') as string;

	const body: IDataObject = {
    licenseId: licenseId,
    version: version
    };
	const data = (await client.httpPost('/license/windows/' + encodeURIComponent(serviceName) + '/sqlServer', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

