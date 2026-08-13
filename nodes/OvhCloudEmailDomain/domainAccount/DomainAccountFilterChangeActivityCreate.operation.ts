import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account Name',
			name: 'accountName',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of account',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountFilterChangeActivityCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of your domain name',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountFilterChangeActivityCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Filter name',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountFilterChangeActivityCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Activity',
			name: 'activity',
			type: 'string',
			default: '',
			required: true,
			description: 'New activity',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountFilterChangeActivityCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Change filter activity
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/account/{accountName}/filter/{name}/changeActivity
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const accountName = this.getNodeParameter('accountName', _itemIndex ?? 0) as string;
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const activity = this.getNodeParameter('activity', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		activity: activity,
	};

	const client = getClient(this);
	const data = (await client.httpPost('/email' + '/domain/' + encodeURIComponent(domain) + '/account/' + encodeURIComponent(accountName) + '/filter/' + encodeURIComponent(name) + '/changeActivity', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
