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
			displayName: 'Certificate',
			name: 'certificate',
			type: 'string',
			default: '',
			description: 'The certificate value',
			displayOptions,
		},
		{
			displayName: 'Chain',
			name: 'chain',
			type: 'string',
			default: '',
			description: 'The chain value',
			displayOptions,
		},
		{
			displayName: 'DisplayName',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'The displayname value',
			displayOptions,
		},
		{
			displayName: 'Key',
			name: 'key',
			type: 'string',
			default: '',
			description: 'The key value',
			displayOptions,
		},
	];
}

/**
 * Add a new custom SSL certificate on your IP Load Balancing
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/ssl
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;



	const certificate = this.getNodeParameter('certificate', _itemIndex) as string;
	const chain = this.getNodeParameter('chain', _itemIndex) as string;
	const displayName = this.getNodeParameter('displayName', _itemIndex) as string;
	const key = this.getNodeParameter('key', _itemIndex) as string;


const body: IDataObject = {
    certificate: certificate,
    chain: chain,
    displayName: displayName,
    key: key
    };

	const client = getClient(this);
	const data = (await client.httpPost('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'ssl', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

