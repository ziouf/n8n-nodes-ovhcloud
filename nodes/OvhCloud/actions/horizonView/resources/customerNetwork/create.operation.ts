import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Add a new customer network to a HorizonView service.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/customerNetwork
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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the customer network',
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
 * Executes the Create Customer Network operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {
		name: this.getNodeParameter('name', 0) as string,
		network: this.getNodeParameter('network', 0) as string,
	};
	const data = (await client.httpPost(
		`/horizonView/${serviceName}/customerNetwork`,
		{ body },
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
