import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/** Configures BIOS SGX parameters on a dedicated server (BETA). */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Dedicated Server Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The dedicated server service name (e.g. ns123456.ip-123-45-678.eu)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getDedicatedServerServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'ns123456.ip-123-45-678.eu',
				},
			],
			displayOptions,
		},
		{
			displayName: 'PRMRR Size',
			name: 'prmrr',
			type: 'options',
			options: [
				{ name: 'Disabled', value: 0 },
				{ name: '1MB', value: 1 },
				{ name: '2MB', value: 2 },
				{ name: '4MB', value: 4 },
				{ name: '8MB', value: 8 },
			],
			default: 0,
			description: 'PRMRR (Protected Range Memory Region Size) for SGX configuration',
			displayOptions,
		},
		{
			displayName: 'SGX Status',
			name: 'status',
			type: 'options',
			options: [
				{ name: 'Enabled', value: 'enabled' },
				{ name: 'Disabled', value: 'disabled' },
			],
			default: 'enabled',
			description: 'Enable or disable SGX on the dedicated server',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const prmrr = ((this.getNodeParameter('prmrr', 0) as number) ?? 0) as number;
	const status = ((this.getNodeParameter('status', 0) as string) ?? 'disabled') as string;

	await client.httpPost(`/dedicated/server/${serviceName}/biosSettings/sgx/configure`, {
		prmrr,
		status,
	});

	return this.helpers.returnJsonArray([{ serviceName, prmrr, status }]);
}
