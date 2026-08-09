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
			description: 'The Cpanel license service name',
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
					placeholder: 'cpanel-1',
				},
			],
			displayOptions,
		},
		{
			displayName: 'DestinationIp',
			name: 'destinationIp',
			type: 'string',
			default: '',
			required: true,
			description: 'The Ip on which you want to move this license',
			displayOptions,
		},
	];
}


/**
 * Move this license to another Ip.
 *
 * HTTP method: POST
 * Endpoint: /license/cpanel/{serviceName}/changeIp
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', { extractValue: true }) as string;
	const destinationIp = this.getNodeParameter('destinationIp', _itemIndex, '') as string;

	const body: IDataObject = {
    destinationIp: destinationIp
    };
	const data = (await client.httpPost('/license/cpanel/' + encodeURIComponent(serviceName) + '/changeIp', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

