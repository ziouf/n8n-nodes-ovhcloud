import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'OvhCloudConnect Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The unique identifier of the service (e.g. 123e4567-e89b-12d3-a456-426614174000)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getOvhCloudConnectServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: '123e4567-e89b-12d3-a456-426614174000',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Interface ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'Unique identifier of the interface',
			displayOptions,
		},
	];
}

/**
 * Get the current status of an interface of an OvhCloud Connect service.
 *
 * HTTP method: GET
 * Endpoint: /ovhCloudConnect/{serviceName}/interface/{id}/status
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const id = this.getNodeParameter('id', _itemIndex ?? 0) as number;

	const data = (await client.httpGet(`/ovhCloudConnect/${encodeURIComponent(serviceName)}/interface/${encodeURIComponent(id)}/status`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
