import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Action',
			name: 'action',
			type: 'options',
			options: [
				{ name: 'Registration', value: 'REGISTRATION' },
				{ name: 'Renewal', value: 'RENEWAL' },
				{ name: 'Transfer In', value: 'TRANSFER_IN' },
				{ name: 'Redemption Grace Period', value: 'REDEMPTION_GRACE_PERIOD' },
			],
			default: 'REGISTRATION',
			displayOptions,
		},
		{
			displayName: 'Domain Name',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'example.com',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const action = (this.getNodeParameter('action', 0) as string) || undefined;
	if (!action) {
		throw new Error(`Action is required for configurationRule operation`);
	}

	const domain = this.getNodeParameter('domain', 0, '', { extractValue: true }) as string;

	const qs: IDataObject = {};
	if (action) qs.action = action;
	if (domain) qs.domain = domain;

	try {
		const data = (await client.httpGet('/domain/configurationRule', qs)) as IDataObject;
		return this.helpers.returnJsonArray([data]);
	} catch (error: unknown) {
		throw new Error(error instanceof Error ? error.message : String(error));
	}
}
