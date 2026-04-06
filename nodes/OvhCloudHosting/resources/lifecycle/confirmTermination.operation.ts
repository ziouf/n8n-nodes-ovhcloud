/**
 * @brief Confirm Termination operation for private database lifecycle
 *
 * HTTP POST request to `/hosting/privateDatabase/{serviceName}/confirmTermination` endpoint.
 */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the private database hosting service',
			displayOptions,
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Termination token',
			displayOptions,
		},
		{
			displayName: 'Commentary',
			name: 'commentary',
			type: 'string',
			default: '',
			description: 'Commentary for termination',
			displayOptions,
		},
		{
			displayName: 'Future Use',
			name: 'futureUse',
			type: 'string',
			default: '',
			description: 'Future use information',
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'string',
			default: '',
			description: 'Reason for termination',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const token = this.getNodeParameter('token', 0) as string;
	const commentary = this.getNodeParameter('commentary', 0, '') as string;
	const futureUse = this.getNodeParameter('futureUse', 0, '') as string;
	const reason = this.getNodeParameter('reason', 0, '') as string;

	const body: IDataObject = { token };
	if (commentary) body.commentary = commentary;
	if (futureUse) body.futureUse = futureUse;
	if (reason) body.reason = reason;

	const data = (await client.httpPost(
		`/hosting/privateDatabase/${serviceName}/confirmTermination`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
