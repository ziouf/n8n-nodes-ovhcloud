import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * @brief Confirm Termination operation for DedicatedNasha resource
 *
 * Confirms the termination of a specific Dedicated Nasha service:
 * - HTTP POST request to `/dedicated/nasha/{serviceName}/confirmTermination` endpoint
 * - Service name and token are required
 * - Commentary, future use, and reason are optional
 * - Returns the confirmation result
 */
export function descriptionDedicatedNashaConfirmTermination(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the Dedicated Nasha service. This can be set manually or selected from the list of services.',
			type: 'resourceLocator',
			required: true,
			default: {
				mode: 'str',
				value: '',
			},
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a service...',
					typeOptions: {
						searchListMethod: 'getDedicatedNashaServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Token',
			name: 'token',
			description: 'The termination confirmation token',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'Commentary',
			name: 'commentary',
			description: 'Optional commentary for the termination',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Future Use',
			name: 'futureUse',
			description: 'Optional future use information',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			description: 'Optional reason for termination',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Confirm Termination operation.
 *
 * Confirms the termination of a specific Dedicated Nasha service.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/nasha/{serviceName}/confirmTermination
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the confirmation result
 */
export async function executeDedicatedNashaConfirmTermination(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const token = this.getNodeParameter('token', 0) as string;
	const commentary = this.getNodeParameter('commentary', 0, '') as string;
	const futureUse = this.getNodeParameter('futureUse', 0, '') as string;
	const reason = this.getNodeParameter('reason', 0, '') as string;

	const body: IDataObject = { token };
	if (commentary) body.commentary = commentary;
	if (futureUse) body.futureUse = futureUse;
	if (reason) body.reason = reason;

	const response = (await client.httpPost(
		`/dedicated/nasha/${serviceName}/confirmTermination`,
		body,
	)) as IDataObject;

	return [{ json: response }];
}
