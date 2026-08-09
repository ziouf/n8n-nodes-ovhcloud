import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'Identifier of the (additional) SQL slot',
			displayOptions,
		},
		{
			displayName: 'Automatic Renewal',
			name: 'renewAutomatic',
			type: 'boolean',
			default: false,
			description: 'Whether the service is automatically renewed',
			displayOptions,
		},
		{
			displayName: 'Delete at Expiration',
			name: 'renewDeleteAtExpiration',
			type: 'boolean',
			default: false,
			description: 'Whether the service will be deleted at expiration',
			displayOptions,
		},
		{
			displayName: 'Forced Renewal',
			name: 'renewForced',
			type: 'boolean',
			default: false,
			description: 'Whether the service is forced to be renewed',
			displayOptions,
		},
		{
			displayName: 'Manual Payment',
			name: 'renewManualPayment',
			type: 'boolean',
			default: false,
			description: 'Whether the service needs to be manually renewed and paid',
			displayOptions,
		},
		{
			displayName: 'Renewal Period (Months)',
			name: 'renewPeriod',
			type: 'number',
			default: 0,
			description: 'Period of renew in months',
			displayOptions,
		},
	];
}

/**
 * Update the service properties of an extra SQL perso option
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/extraSqlPerso/{id}/serviceInfosUpdate
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number) as string;
	const id = this.getNodeParameter('id', _itemIndex as number) as number;
	const renewAutomatic = this.getNodeParameter('renewAutomatic', _itemIndex as number) as boolean;
	const renewDeleteAtExpiration = this.getNodeParameter(
		'renewDeleteAtExpiration',
		_itemIndex as number,
	) as boolean;
	const renewForced = this.getNodeParameter('renewForced', _itemIndex as number) as boolean;
	const renewManualPayment = this.getNodeParameter(
		'renewManualPayment',
		_itemIndex as number,
	) as boolean;
	const renewPeriod = this.getNodeParameter('renewPeriod', _itemIndex as number) as number;

	const renew: IDataObject = {
		automatic: renewAutomatic,
		deleteAtExpiration: renewDeleteAtExpiration,
		forced: renewForced,
		manualPayment: renewManualPayment,
		period: renewPeriod,
	};

	const data = (await client.httpPost(
		`/hosting/web/${encodeURIComponent(serviceName)}/extraSqlPerso/${encodeURIComponent(String(id))}/serviceInfosUpdate`,
		{ renew } as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
