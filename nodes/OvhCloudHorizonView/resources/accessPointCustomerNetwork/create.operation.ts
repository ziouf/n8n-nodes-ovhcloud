import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Add a new customer network to an access point.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the HorizonView service',
			displayOptions,
		},
		{
			displayName: 'Access Point ID',
			name: 'accessPointId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the access point',
			displayOptions,
		},
		{
			displayName: 'Network',
			name: 'network',
			type: 'string',
			default: '',
			required: true,
			description: 'The network CIDR to add',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Access Point Customer Network operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const accessPointId = this.getNodeParameter('accessPointId', 0) as string;
	const body: IDataObject = {
		network: this.getNodeParameter('network', 0) as string,
	};
	const data = (await client.httpPost(
		`/horizonView/${serviceName}/accessPoint/${accessPointId}/customerNetwork`,
		{ body },
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
