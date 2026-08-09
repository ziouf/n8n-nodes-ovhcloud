import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange organization',
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange service',
		},
		{
			displayName: 'I M E I',
			name: 'IMEI',
			type: 'string',
			default: '',
			description: 'Filter the value of IMEI property (like)',
		},
		{
			displayName: 'Device State',
			name: 'deviceState',
			type: 'string',
			default: '',
			description: 'Filter the value of deviceState property (=)',
		},
		{
			displayName: 'Identity',
			name: 'identity',
			type: 'string',
			default: '',
			description: 'Filter the value of identity property (like)',
		},
	];
}

/**
 * List of your ActiveSync devices registered on this Exchange service
 *
 * HTTP method: GET
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/device
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const IMEI = this.getNodeParameter('IMEI', _itemIndex ?? 0) as string;
	const deviceState = this.getNodeParameter('deviceState', _itemIndex ?? 0) as string;
	const identity = this.getNodeParameter('identity', _itemIndex ?? 0) as string;

	const qs: IDataObject = {
    IMEI: IMEI,
    deviceState: deviceState,
    identity: identity
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/device", qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
