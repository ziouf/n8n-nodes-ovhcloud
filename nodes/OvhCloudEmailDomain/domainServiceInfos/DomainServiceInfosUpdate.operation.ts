import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
					emailDomainOperation: ['DomainServiceInfosUpdate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Update service information
 *
 * HTTP method: PUT
 * Endpoint: /email/domain/{domain}/serviceInfos
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		undefined: undefined,
	};

	const client = getClient(this);
	const data = (await client.httpPut('/email' + '/domain/' + encodeURIComponent(domain) + '/serviceInfos', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
