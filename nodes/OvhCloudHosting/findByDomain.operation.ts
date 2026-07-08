import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain used in web hosting attached domains',
			displayOptions,
		},
		{
			displayName: 'With Details',
			name: 'withDetails',
			type: 'boolean',
			default: false,
			description: 'Whether to return the service details or just the service IDs',
			displayOptions,
		},
		{
			displayName: "With Attached Domains",
			name: "withAttachedDomains",
			type: 'boolean',
			default: false,
			description: 'Whether to return the attached domains for each service',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const withDetails = this.getNodeParameter('withDetails', itemIndex, false) as boolean;
	const withAttachedDomains = this.getNodeParameter('withAttachedDomains', itemIndex, false) as boolean;
	const client = new ApiClient(this);
	const domain = this.getNodeParameter('domain', itemIndex) as string;
	const names = (await client.httpGet('/hosting/web/attachedDomain', { domain })) as string[];
	const outputData = names.map((serviceName) => ({ serviceName }));
	if (withDetails) {
		for (const d of outputData) {
			const svcDetails = (await client.httpGet(`/hosting/web/${d.serviceName}`)) as Record<string, unknown>;
			Object.assign(d, svcDetails);
		}
	}
	if (withAttachedDomains) {
		for (const d of outputData) {
			const attachedDomains = (await client.httpGet(`/hosting/web/${d.serviceName}/attachedDomain`)) as string[];
			Object.assign(d, { attachedDomains });
		}
	}
	return this.helpers.returnJsonArray(outputData);
}
