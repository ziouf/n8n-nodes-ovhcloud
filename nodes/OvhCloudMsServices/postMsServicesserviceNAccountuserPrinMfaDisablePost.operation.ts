import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The servicename identifier',
			displayOptions,
		},
		{
			displayName: 'UserPrincipalName',
			name: 'userPrincipalName',
			type: 'string',
			default: '',
			required: true,
			description: 'The userprincipalname identifier',
			displayOptions,
		},
		{
			displayName: 'Period',
			name: 'period',
			type: 'string',
			default: '',
			description: 'The period value',
			displayOptions,
		},
	];
}

/**
 * Disable Multi Factor Authentication for a period of time
 *
 * HTTP method: POST
 * Endpoint: /msServices/{serviceName}/account/{userPrincipalName}/mfa/disable
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const userPrincipalName = this.getNodeParameter('userPrincipalName', _itemIndex) as string;



	const period = this.getNodeParameter('period', _itemIndex) as string;


const body: IDataObject = {
    period: period
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/msServices' + '/' + encodeURIComponent(serviceName) + '/' + 'account' + '/' + encodeURIComponent(userPrincipalName) + '/' + 'mfa' + '/' + 'disable', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

