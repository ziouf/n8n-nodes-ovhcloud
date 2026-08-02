import type {
	IDisplayOptions,
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Pack Xdsl Service Name',
			name: 'packName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your pack',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPackXdslServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'packabcd-ovh',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			required: true,
			description: 'The email address',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Activate a hosted email service.
 *
 * HTTP method: POST
 * Endpoint: /pack/xdsl/{packName}/hostedEmail/services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const packName = this.getNodeParameter('packName', 0, '', { extractValue: true }) as string;
	const email = this.getNodeParameter('email', 0) as string;
	const password = this.getNodeParameter('password', 0) as string;

	const body: IDataObject = { email, password };
	const data = (await client.httpPost(
		`/pack/xdsl/${encodeURIComponent(packName)}/hostedEmail/services`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
