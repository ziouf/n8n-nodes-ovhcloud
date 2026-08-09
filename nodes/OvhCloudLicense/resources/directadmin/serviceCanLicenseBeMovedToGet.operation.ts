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
			description: 'The Directadmin license service name',
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
					placeholder: 'directadmin-1',
				},
			],
			displayOptions,
		},
		{
			displayName: 'DestinationIp',
			name: 'destinationIp',
			type: 'string',
			default: '',
			description: 'The Ip on which you want to move this license',
			displayOptions,
		},
	];
}


/**
 * Will tell if the ip can accept the license.
 *
 * HTTP method: GET
 * Endpoint: /license/directadmin/{serviceName}/canLicenseBeMovedTo
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', { extractValue: true }) as string;
	const destinationIp = this.getNodeParameter('destinationIp', _itemIndex, '') as string;

	const qs: IDataObject = {
    destinationIp: destinationIp
  };
	const data = (await client.httpGet('/license/directadmin/' + encodeURIComponent(serviceName) + '/canLicenseBeMovedTo', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

