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
			displayName: 'LegacyVrack',
			name: 'legacyVrack',
			type: 'string',
			default: '',
			required: true,
			description: 'The legacy vRACK',
			displayOptions,
		},
	];
}

/**
 * Get this object properties
 *
 * HTTP method: GET
 * Endpoint: /vrack/{serviceName}/legacyVrack/{legacyVrack}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const legacyVrack = this.getNodeParameter('legacyVrack', _itemIndex) as string;





	const client = getClient(this);
	const data = (await client.httpGet('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'legacyVrack' + '/' + encodeURIComponent(legacyVrack))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

