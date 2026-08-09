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
			displayName: 'LegacyVrack',
			name: 'legacyVrack',
			type: 'string',
			default: '',
			description: 'The legacyvrack value',
			displayOptions,
		},
	];
}

/**
 * add a legacy vrack (vrackXXXX) to this vrack (pn-XXXX)
 *
 * HTTP method: POST
 * Endpoint: /vrack/{serviceName}/legacyVrack
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;



	const legacyVrack = this.getNodeParameter('legacyVrack', _itemIndex) as string;


const body: IDataObject = {
    legacyVrack: legacyVrack
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'legacyVrack', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

