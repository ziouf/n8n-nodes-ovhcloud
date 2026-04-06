/**
 * @brief Confirm termination for a Dedicated Ceph cluster
 *
 * Confirms termination of the specified Dedicated Ceph cluster:
 * - HTTP POST request to `/dedicated/ceph/{serviceName}/confirmTermination` endpoint
 * - Body: token (required), commentary (optional), futureUse (optional), reason (optional)
 */
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: {
				mode: 'list',
				value: '',
			},
			required: true,
			modes: [
				{
					displayName: 'By ID',
					name: 'id',
					type: 'string',
					placeholder: 'Enter the service name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getDedicatedCephServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The termination confirmation token',
			displayOptions,
		},
		{
			displayName: 'Commentary',
			name: 'commentary',
			type: 'string',
			default: '',
			description: 'Optional commentary for the termination',
			displayOptions,
		},
		{
			displayName: 'Future Use',
			name: 'futureUse',
			type: 'string',
			default: '',
			description: 'Optional future use description',
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'string',
			default: '',
			description: 'Optional reason for termination',
			displayOptions,
		},
	];
}

/**
 * Executes the Confirm Termination operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/ceph/{serviceName}/confirmTermination
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };
	const token = this.getNodeParameter('token', 0) as string;
	const commentary = this.getNodeParameter('commentary', 0, '') as string;
	const futureUse = this.getNodeParameter('futureUse', 0, '') as string;
	const reason = this.getNodeParameter('reason', 0, '') as string;

	const body: IDataObject = { token };
	if (commentary) body.commentary = commentary;
	if (futureUse) body.futureUse = futureUse;
	if (reason) body.reason = reason;

	const data = await client.httpPost(
		`/dedicated/ceph/${serviceName}/confirmTermination`,
		body,
	);

	return [{ json: data as IDataObject }];
}
