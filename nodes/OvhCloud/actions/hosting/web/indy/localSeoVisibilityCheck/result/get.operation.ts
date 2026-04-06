import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * @brief Get the result of a visibility check operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/localSeo/visibilityCheckResult` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Directory',
			name: 'directory',
			type: 'string',
			default: '',
			required: true,
			description: 'Get the result only for one directory',
			displayOptions,
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the check',
			displayOptions,
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Token received when requesting the check',
			displayOptions,
		},
	];
}

/**
 * Executes the Get the result of a visibility check operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/localSeo/visibilityCheckResult
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const directory = this.getNodeParameter('directory', 0) as string;
	const id = this.getNodeParameter('id', 0) as string;
	const token = this.getNodeParameter('token', 0) as string;
	const data = (await client.httpGet(`/hosting/web/localSeo/visibilityCheckResult`, { qs: { directory, id, token } })) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
