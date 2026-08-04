import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name identifier',
			displayOptions,
		},
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The zoneName identifier',
			displayOptions,
		},
		{
			displayName: 'Automatic',
			name: 'automatic',
			type: 'boolean',
			default: false,
			description: 'Whether the service is automatically renewed',
			displayOptions,
		},
		{
			displayName: 'Delete At Expiration',
			name: 'deleteAtExpiration',
			type: 'boolean',
			default: false,
			description: 'Whether the service will be deleted at expiration',
			displayOptions,
		},
		{
			displayName: 'Forced',
			name: 'forced',
			type: 'boolean',
			default: false,
			description: 'Whether the service forced to be renewed',
			displayOptions,
		},
		{
			displayName: 'Manual Payment',
			name: 'manualPayment',
			type: 'boolean',
			default: false,
			description: 'Whether the service needs to be manually renewed and paid',
			displayOptions,
		},
		{
			displayName: 'Period',
			name: 'period',
			type: 'number',
			default: 0,
			description: 'Period of renew in month',
			displayOptions,
		},
	];
}

/**
 * Executes the Alter this object properties operation.
 *
 * HTTP method: PUT
 * Endpoint: /domain/zone/{zoneName}/option/{name}/serviceInfos
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const name = this.getNodeParameter('name', itemIndex) as string;
		const zoneName = this.getNodeParameter('zoneName', itemIndex) as string;

	const body: IDataObject = {};
		const automatic = this.getNodeParameter('automatic', itemIndex, false) as boolean;
		if (automatic !== undefined) body['automatic'] = automatic;
		const deleteAtExpiration = this.getNodeParameter('deleteAtExpiration', itemIndex, false) as boolean;
		if (deleteAtExpiration !== undefined) body['deleteAtExpiration'] = deleteAtExpiration;
		const forced = this.getNodeParameter('forced', itemIndex, false) as boolean;
		if (forced !== undefined) body['forced'] = forced;
		const manualPayment = this.getNodeParameter('manualPayment', itemIndex, false) as boolean;
		if (manualPayment !== undefined) body['manualPayment'] = manualPayment;
		const period = this.getNodeParameter('period', itemIndex, 0) as number;
		if (period !== 0) body['period'] = period;

	const data = (await client.httpPut(`/domain/zone/${encodeURIComponent(zoneName)}/option/${encodeURIComponent(name)}/serviceInfos`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
