import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of your domain name',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainMigrateDelegationV3toV6Create'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Create delegation of domain with same nic than V3
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/migrateDelegationV3toV6
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/domain/' + encodeURIComponent(domain) + '/migrateDelegationV3toV6')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
