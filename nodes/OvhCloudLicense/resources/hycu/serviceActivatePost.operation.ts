import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'License Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The HYCU license service name',
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
					placeholder: 'hycu-1',
				},
			],
			displayOptions,
		},
		{
			displayName: 'License Request',
			name: 'licenseRequest',
			type: 'string',
			default: '',
			required: true,
			description: 'License request in base64 format',
			displayOptions,
		},
	];
}

/**
 * Activate the HYCU license.
 *
 * HTTP method: POST
 * Endpoint: /license/hycu/{serviceName}/activate
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
		extractValue: true,
	}) as string;
	const licenseRequest = this.getNodeParameter('licenseRequest', _itemIndex) as string;

	const body: IDataObject = { licenseRequest };

	await client.httpPost(`/license/hycu/${encodeURIComponent(serviceName)}/activate`, body);

	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}
