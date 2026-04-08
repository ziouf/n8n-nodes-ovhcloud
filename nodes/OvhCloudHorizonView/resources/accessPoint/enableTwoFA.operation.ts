import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Enable two factor authentication on a pool.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/accessPoint/{accessPointId}/enableTwoFA
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
			displayName: 'Radius IP',
			name: 'radiusIp',
			type: 'string',
			default: '',
			required: true,
			description: 'RADIUS server IP address',
			displayOptions,
		},
		{
			displayName: 'Secret',
			name: 'secret',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'RADIUS shared secret',
			displayOptions,
		},
		{
			displayName: 'On Single AP',
			name: 'onSingleAP',
			type: 'boolean',
			default: false,
			description: 'Whether to apply on a single access point',
			displayOptions,
		},
	];
}

/**
 * Executes the Enable Two FA operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const accessPointId = this.getNodeParameter('accessPointId', 0) as string;
	const body: IDataObject = {
		radiusIp: this.getNodeParameter('radiusIp', 0) as string,
		secret: this.getNodeParameter('secret', 0) as string,
	};
	const onSingleAP = this.getNodeParameter('onSingleAP', 0, false) as boolean;
	if (onSingleAP) body.onSingleAP = onSingleAP;

	const data = (await client.httpPost(
		`/horizonView/${serviceName}/accessPoint/${accessPointId}/enableTwoFA`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
