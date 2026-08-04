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
		{
			displayName: 'Sub Domain',
			name: 'subDomain',
			type: 'string',
			default: '',
			description: 'Login sub-domain',
			displayOptions,
		},
	];
}

/**
 * Executes the Alter login object properties operation.
 *
 * HTTP method: PUT
 * Endpoint: /domain/zone/{zoneName}/dynHost/login/{login}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const login = this.getNodeParameter('login', itemIndex) as string;
		const zoneName = this.getNodeParameter('zoneName', itemIndex) as string;

	const body: IDataObject = {};
		const subDomain = this.getNodeParameter('subDomain', itemIndex, '') as string;
		if (subDomain !== '') body['subDomain'] = subDomain;

	const data = (await client.httpPut(`/domain/zone/${encodeURIComponent(zoneName)}/dynHost/login/${encodeURIComponent(login)}`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
