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
			required: true,
			description: 'The legacyvrack identifier',
			displayOptions,
		},
	];
}

/**
 * remove this legacy vrack (vrackXXXX) from this vrack (pn-XXXX)
 *
 * HTTP method: DELETE
 * Endpoint: /vrack/{serviceName}/legacyVrack/{legacyVrack}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const legacyVrack = this.getNodeParameter('legacyVrack', itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpDelete('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'legacyVrack' + '/' + encodeURIComponent(legacyVrack))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

