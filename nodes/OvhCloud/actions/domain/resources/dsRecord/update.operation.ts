import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Update DS Records operation
 *
 * Updates DS records for a domain.
 *
 * HTTP method: POST
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
			displayName: 'DS Records',
			name: 'dsRecords',
			type: 'fixedCollection',
			typeOptions: {
				multipleValues: true,
			},
			default: {},
			description: 'DS records to update',
			displayOptions,
			options: [
				{
					name: 'records',
					displayName: 'Records',
					values: [
						{
							displayName: 'Algorithm',
							name: 'algorithm',
							type: 'string',
							default: '',
							required: true,
							description: 'The algorithm used',
						},
						{
							displayName: 'Digest',
							name: 'digest',
							type: 'string',
							default: '',
							required: true,
							description: 'The digest value',
						},
						{
							displayName: 'Digest Type',
							name: 'digestType',
							type: 'number',
							default: 0,
							required: true,
						},
						{
							displayName: 'Flags',
							name: 'flags',
							type: 'number',
							default: 0,
							required: true,
							description: 'The flags value',
						},
						{
							displayName: 'Key Tag',
							name: 'keyTag',
							type: 'number',
							default: 0,
							required: true,
						},
					],
				},
			],
		},
	];
}

/**
 * Executes the Update DS Records operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const dsRecords = this.getNodeParameter('dsRecords', 0) as { records: IDataObject[] };
	const body = dsRecords.records as unknown as IDataObject;

	const data = (await client.httpPost(`/domain/${serviceName}/dsRecord`, body)) as IDataObject;
	return [{ json: data }];
}
