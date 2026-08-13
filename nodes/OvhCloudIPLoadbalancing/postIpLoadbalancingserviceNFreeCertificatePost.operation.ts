import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The service name',
			displayOptions,
		},
		{
			displayName: 'Fqdn',
			name: 'fqdn',
			type: 'string',
			default: '',
			description: 'The fqdn value',
			displayOptions,
		},
	];
}

/**
 * Order a free certificate. We order and deliver it for you
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/freeCertificate
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;



	const fqdn = this.getNodeParameter('fqdn', _itemIndex) as string;


const body: IDataObject = {
    fqdn: fqdn
    };

	const client = getClient(this);
	const data = (await client.httpPost('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'freeCertificate', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

