import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Returns the UI property definitions for the Create Confirm Termination operation.
 *
 * Defines inputs for confirming the termination of a VPS.
 *
 * @param displayOptions - Controls when these properties should be displayed in the n8n UI
 * @returns Array of node properties configuring the service name, token, and comment inputs
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the VPS service to confirm termination for. This can be set manually or selected from the list of services.',
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
					placeholder: 'Select a VPS service...',
					typeOptions: {
						searchListMethod: 'getVpsServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Token',
			name: 'confirmTermination.token',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description: 'The termination confirmation token',
			displayOptions,
		},
		{
			displayName: 'Commentary',
			name: 'confirmTermination.commentary',
			type: 'string',
			default: '',
			description: 'An optional commentary for the termination',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Confirm Termination operation.
 *
 * Confirms the termination of a VPS instance.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution data containing the termination confirmation result
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as string;
	const token = this.getNodeParameter('confirmTermination.token', 0) as string;
	const commentary = this.getNodeParameter('confirmTermination.commentary', 0, '') as string;

	const body: IDataObject = { token };
	if (commentary) {
		body.commentary = commentary;
	}

	const response = (await client.httpPost(`/vps/${serviceName}/confirmTermination`, {
		body,
	})) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
