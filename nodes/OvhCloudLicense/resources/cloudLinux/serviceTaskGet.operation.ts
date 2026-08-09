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
			description: 'The CloudLinux license service name',
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
					placeholder: 'cloudLinux-1',
				},
			],
			displayOptions,
		},
		{
			displayName: 'TaskId',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}


/**
 * Get this object properties.
 *
 * HTTP method: GET
 * Endpoint: /license/cloudLinux/{serviceName}/tasks/{taskId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', { extractValue: true }) as string;
	const taskId = this.getNodeParameter('taskId', _itemIndex) as string;
	const data = (await client.httpGet('/license/cloudLinux/' + encodeURIComponent(serviceName) + '/tasks/' + encodeURIComponent(taskId) + '')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

