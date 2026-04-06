import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Delete Domain Option operation
 *
 * Deletes a domain option.
 *
 * HTTP method: DELETE
 * Endpoint: /domain/{serviceName}/option/{option}
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
			displayName: 'Option',
			name: 'option',
			type: 'string',
			default: '',
			required: true,
			description: 'The option name to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Domain Option operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const option = this.getNodeParameter('option', 0) as string;

	const data = (await client.httpDelete(`/domain/${serviceName}/option/${option}`)) as IDataObject;
	return [{ json: data }];
}
