import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get DS Record operation
 *
 * Retrieves a specific DS record by ID.
 *
 * HTTP method: GET
 * Endpoint: /domain/{serviceName}/dsRecord/{id}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the domain. This can be set manually or selected from the list of services.',
			type: 'resourceLocator',
			required: true,
			default: { mode: 'str', value: '' },
			modes: [
				{ displayName: 'By Name', name: 'str', type: 'string' },
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a domain...',
					typeOptions: { searchListMethod: 'getDomainServices', searchable: true },
				},
			],
			displayOptions,
		},
		{
			displayName: 'DS Record ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the DS record',
			displayOptions,
		},
	];
}

/**
 * Executes the Get DS Record operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const id = this.getNodeParameter('id', 0) as string;

	const data = (await client.httpGet(`/domain/${serviceName}/dsRecord/${id}`)) as IDataObject;
	return [{ json: data }];
}
