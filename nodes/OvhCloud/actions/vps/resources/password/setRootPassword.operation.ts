import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

export function descriptionPasswordSetRootPassword(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the VPS service. This can be set manually or selected from the list of services.',
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
			displayName: 'Password',
			name: 'password',
			description: 'The root password to set',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			displayOptions,
		},
	];
}

export async function executePasswordSetRootPassword(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const password = this.getNodeParameter('password', 0) as string;

	const response = (await client.httpPost(`/vps/${serviceName}/setPassword`, {
		body: { password },
	})) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
