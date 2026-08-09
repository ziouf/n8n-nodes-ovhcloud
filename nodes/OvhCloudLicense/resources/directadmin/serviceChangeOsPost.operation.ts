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
			displayName: 'Os',
			name: 'os',
			type: 'string',
			default: '',
			required: true,
			description: 'The operating system you want for this license',
			displayOptions,
		},
	];
}


/**
 * Change the Operating System for a license.
 *
 * HTTP method: POST
 * Endpoint: /license/directadmin/{serviceName}/changeOs
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', { extractValue: true }) as string;
	const os = this.getNodeParameter('os', _itemIndex, '') as string;

	const body: IDataObject = {
    os: os
    };
	const data = (await client.httpPost('/license/directadmin/' + encodeURIComponent(serviceName) + '/changeOs', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

