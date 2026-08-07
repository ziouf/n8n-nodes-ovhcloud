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
			description: 'The Plesk license service name',
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
					placeholder: 'plesk-1',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Action',
			name: 'action',
			type: 'string',
			default: '',
			description: 'Filter the value of action property (=)',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'Filter the value of status property (=)',
			displayOptions,
		},
	];
}


/**
 * tasks linked to this license.
 *
 * HTTP method: GET
 * Endpoint: /license/plesk/{serviceName}/tasks
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', { extractValue: true }) as string;
	const action = this.getNodeParameter('action', itemIndex, '') as string;
	const status = this.getNodeParameter('status', itemIndex, '') as string;

	const qs: IDataObject = {
    action: action,
    status: status
  };
	const data = (await client.httpGet('/license/plesk/' + encodeURIComponent(serviceName) + '/tasks', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

