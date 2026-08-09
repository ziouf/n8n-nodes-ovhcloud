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
 * Endpoint: /license/windows/{serviceName}/tasks
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', { extractValue: true }) as string;
	const action = this.getNodeParameter('action', _itemIndex, '') as string;
	const status = this.getNodeParameter('status', _itemIndex, '') as string;

	const qs: IDataObject = {
    action: action,
    status: status
  };
	const data = (await client.httpGet('/license/windows/' + encodeURIComponent(serviceName) + '/tasks', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

