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
			displayName: 'Login',
			name: 'login',
			type: 'string',
			default: '',
			required: true,
			description: 'The login identifier',
			displayOptions,
		},
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The zoneName identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete login object operation.
 *
 * HTTP method: DELETE
 * Endpoint: /domain/zone/{zoneName}/dynHost/login/{login}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const login = this.getNodeParameter('login', _itemIndex) as string;
		const zoneName = this.getNodeParameter('zoneName', _itemIndex) as string;

	const data = (await client.httpDelete(`/domain/zone/${encodeURIComponent(zoneName)}/dynHost/login/${encodeURIComponent(login)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
