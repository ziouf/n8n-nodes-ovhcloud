import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Confirm service termination for a HorizonView service.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/confirmTermination
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
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Termination confirmation token',
			displayOptions,
		},
		{
			displayName: 'Commentary',
			name: 'commentary',
			type: 'string',
			default: '',
			description: 'Commentary about the termination',
			displayOptions,
		},
		{
			displayName: 'Future Use',
			name: 'futureUse',
			type: 'string',
			default: '',
			description: 'Future use indication',
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

/**
 * Executes the Confirm Termination operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {
		token: this.getNodeParameter('token', 0) as string,
	};
	const commentary = this.getNodeParameter('commentary', 0, '') as string;
	if (commentary) body.commentary = commentary;
	const futureUse = this.getNodeParameter('futureUse', 0, '') as string;
	if (futureUse) body.futureUse = futureUse;
	const reason = this.getNodeParameter('reason', 0, '') as string;
	if (reason) body.reason = reason;

	const data = (await client.httpPost(
		`/horizonView/${serviceName}/confirmTermination`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
