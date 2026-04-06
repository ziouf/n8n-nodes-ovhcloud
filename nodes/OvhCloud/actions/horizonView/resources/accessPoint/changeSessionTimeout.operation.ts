import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Change session timeout on Unified Access Gateway.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/accessPoint/{accessPointId}/changeSessionTimeout
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
			displayName: 'Expiration',
			name: 'expiration',
			type: 'string',
			default: '',
			required: true,
			description: 'Session timeout expiration',
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
 * Executes the Change Session Timeout operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const accessPointId = this.getNodeParameter('accessPointId', 0) as string;
	const body: IDataObject = {
		expiration: this.getNodeParameter('expiration', 0) as string,
	};
	const onSingleAP = this.getNodeParameter('onSingleAP', 0, false) as boolean;
	if (onSingleAP) body.onSingleAP = onSingleAP;

	const data = (await client.httpPost(
		`/horizonView/${serviceName}/accessPoint/${accessPointId}/changeSessionTimeout`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
