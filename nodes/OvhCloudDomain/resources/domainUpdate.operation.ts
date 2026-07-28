import type { IExecuteFunctions, IDisplayOptions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Domain Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: {},
			required: true,
			description: 'The domain service name (e.g. example.com)',
			modes: [
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'example.com',
				},
			],
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;

	await client.httpPut(`/domain/${serviceName}`, {});

	return this.helpers.returnJsonArray([{ ok: true }]);
}
