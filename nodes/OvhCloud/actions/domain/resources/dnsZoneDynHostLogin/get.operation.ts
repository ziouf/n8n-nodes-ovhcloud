import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Get DynHost Login operation
 *
 * Retrieves a specific DynHost login.
 *
 * HTTP method: GET
 * Endpoint: /domain/zone/{zoneName}/dynHost/login/{login}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the DNS zone',
			displayOptions,
		},
		{
			displayName: 'Login',
			name: 'login',
			type: 'string',
			default: '',
			required: true,
			description: 'The DynHost login name',
			displayOptions,
		},
	];
}

/**
 * Executes the Get DynHost Login operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;
	const login = this.getNodeParameter('login', 0) as string;

	const data = (await client.httpGet(`/domain/zone/${zoneName}/dynHost/login/${login}`)) as IDataObject;
	return [{ json: data }];
}
