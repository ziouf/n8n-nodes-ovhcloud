import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Configure SGX operation for Dedicated Server
 *
 * Configures SGX BIOS settings for a dedicated server.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/biosSettings/sgx/configure
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the dedicated server. This can be set manually or selected from the list of services.',
			type: 'resourceLocator',
			required: true,
			default: { mode: 'str', value: '' },
			modes: [
				{ displayName: 'By Name', name: 'str', type: 'string' },
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a dedicated server...',
					typeOptions: { searchListMethod: 'getDedicatedServerServices', searchable: true },
				},
			],
			displayOptions,
		},
		{
			displayName: 'PRMRR',
			name: 'prmrr',
			type: 'string',
			default: '',
			required: true,
			description: 'PRMRR value for SGX configuration',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			required: true,
			description: 'SGX status (e.g., enabled, disabled)',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const prmrr = this.getNodeParameter('prmrr', 0) as string;
	const status = this.getNodeParameter('status', 0) as string;

	const body: IDataObject = { prmrr, status };
	const response = (await client.httpPost(`/dedicated/server/${serviceName}/biosSettings/sgx/configure`, body)) as IDataObject;
	return [{ json: response }];
}
