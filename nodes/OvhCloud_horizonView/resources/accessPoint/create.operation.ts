import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Create a new access point for a HorizonView service.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/accessPoint
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
			displayName: 'Pool Type',
			name: 'poolType',
			type: 'string',
			default: '',
			required: true,
			description: 'The type of pool to deploy',
			displayOptions,
		},
		{
			displayName: 'Private Block',
			name: 'privateBlock',
			type: 'string',
			default: '',
			description: 'Private IP block for the access point',
			displayOptions,
		},
		{
			displayName: 'Private VLAN',
			name: 'privateVlan',
			type: 'number',
			default: undefined,
			description: 'Private VLAN ID',
			displayOptions,
		},
		{
			displayName: 'VRouter Pool Public IP',
			name: 'vrouterPoolPublicIp',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Raw Body (JSON)',
			name: 'rawBody',
			type: 'json',
			default: '{}',
			description:
				'Full access point configuration as JSON. Overrides individual fields if provided.',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Access Point operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const rawBody = this.getNodeParameter('rawBody', 0, '{}') as string;
	const body: IDataObject = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;

	if (Object.keys(body).length === 0) {
		body.poolType = this.getNodeParameter('poolType', 0) as string;
		const privateBlock = this.getNodeParameter('privateBlock', 0, '') as string;
		if (privateBlock) body.privateBlock = privateBlock;
		const privateVlan = this.getNodeParameter('privateVlan', 0) as number | undefined;
		if (privateVlan !== undefined) body.privateVlan = privateVlan;
		const vrouterPoolPublicIp = this.getNodeParameter('vrouterPoolPublicIp', 0, '') as string;
		if (vrouterPoolPublicIp) body.vrouterPoolPublicIp = vrouterPoolPublicIp;
	}

	const data = (await client.httpPost(`/horizonView/${serviceName}/accessPoint`, {
		body,
	})) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
