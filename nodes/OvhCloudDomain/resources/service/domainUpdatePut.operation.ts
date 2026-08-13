import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDomainNames',
				displayName: 'Service Name',
				description: 'The service name',
				placeholder: 'example.com',
			}),
			displayOptions,
		},
		{
			displayName: 'Name Server Type',
			name: 'nameServerType',
			type: 'options',
			default: 'anycast',
			options: [
				{ name: 'Anycast', value: 'anycast' },
				{ name: 'Dedicated', value: 'dedicated' },
				{ name: 'Empty', value: 'empty' },
				{ name: 'External', value: 'external' },
				{ name: 'Hold', value: 'hold' },
				{ name: 'Hosted', value: 'hosted' },
				{ name: 'Hosting', value: 'hosting' },
				{ name: 'Mixed', value: 'mixed' },
				{ name: 'Parking', value: 'parking' },
			],
			description: 'Name servers type',
			displayOptions,
		},
		{
			displayName: 'Transfer Lock Status',
			name: 'transferLockStatus',
			type: 'options',
			default: 'locked',
			options: [
				{ name: 'Locked', value: 'locked' },
				{ name: 'Locking', value: 'locking' },
				{ name: 'Unavailable', value: 'unavailable' },
				{ name: 'Unlocked', value: 'unlocked' },
				{ name: 'Unlocking', value: 'unlocking' },
			],
			description: 'Current transfer lock status of the domain name',
			displayOptions,
		},
	];
}

/**
 * Executes the Edit domain name properties operation.
 *
 * HTTP method: PUT
 * Endpoint: /domain/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
		const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const body: IDataObject = {};
		const nameServerType = this.getNodeParameter('nameServerType', _itemIndex, '') as string;
		if (nameServerType !== '') body['nameServerType'] = nameServerType;
		const transferLockStatus = this.getNodeParameter('transferLockStatus', _itemIndex, '') as string;
		if (transferLockStatus !== '') body['transferLockStatus'] = transferLockStatus;

	const data = (await client.httpPut(`/domain/${encodeURIComponent(serviceName)}`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
