import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief Confirm Termination operation for Dedicated Cluster
 *
 * Confirms the termination of a specific Dedicated Cluster service:
 * - HTTP POST request to `/dedicated/cluster/{serviceName}/confirmTermination` endpoint
 * - Service name and token parameters are required
 * - Commentary, future use, and reason parameters are optional
 * - Returns the confirmation result
 */
export function descriptionDedicatedClusterConfirmTermination(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the Dedicated Cluster service to confirm termination for. This can be set manually or selected from the list of services.',
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
					placeholder: 'Select a Dedicated Cluster service...',
					typeOptions: {
						searchListMethod: 'getDedicatedClusterServices',
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
			type: 'boolean',
			default: false,
			description: 'Whether the service will be used in the future',
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'options',
			options: [
				{
					name: 'No Longer Needed',
					value: 'noLongerNeeded',
				},
				{
					name: 'Not Satisfied',
					value: 'notSatisfied',
				},
				{
					name: 'Other',
					value: 'other',
				},
				{
					name: 'Too Complicated',
					value: 'tooComplicated',
				},
				{
					name: 'Too Expensive',
					value: 'tooExpensive',
				},
			],
			default: 'other',
			description: 'Reason for termination',
			displayOptions,
		},
	];
}

/**
 * Executes the Confirm Termination operation for Dedicated Cluster.
 *
 * Confirms the termination of a specific Dedicated Cluster service.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/cluster/{serviceName}/confirmTermination
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the confirmation result
 */
export async function executeDedicatedClusterConfirmTermination(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const token = this.getNodeParameter('token', 0) as string;
	const commentary = this.getNodeParameter('commentary', 0, '') as string;
	const futureUse = this.getNodeParameter('futureUse', 0, false) as boolean;
	const reason = this.getNodeParameter('reason', 0, 'other') as string;

	const body: IDataObject = {
		token,
	};

	if (commentary !== '') {
		body.commentary = commentary;
	}
	body.futureUse = futureUse;
	if (reason !== '') {
		body.reason = reason;
	}

	const response = (await client.httpPost(
		`/dedicated/cluster/${serviceName}/confirmTermination`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
