import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief List DS Records operation
 *
 * Lists DS (Delegation Signer) records for a domain.
 *
 * HTTP method: GET
 * Endpoint: /domain/{serviceName}/dsRecord
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
			displayName: 'Flags',
			name: 'flags',
			type: 'string',
			default: '',
			description: 'Filter by flags value',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'Filter by status',
			displayOptions,
		},
	];
}

/**
 * Executes the List DS Records operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const qs: IDataObject = {};
	const flags = this.getNodeParameter('flags', 0, '') as string;
	const status = this.getNodeParameter('status', 0, '') as string;
	if (flags) qs.flags = flags;
	if (status) qs.status = status;

	const data = (await client.httpGet(`/domain/${serviceName}/dsRecord`, qs)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
