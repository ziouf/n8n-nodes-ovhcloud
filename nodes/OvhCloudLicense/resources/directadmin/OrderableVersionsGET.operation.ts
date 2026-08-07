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
			displayName: 'Ip',
			name: 'ip',
			type: 'string',
			default: '',
			description: 'Your license Ip',
			displayOptions,
		},
	];
}


/**
 * Get the orderable DirectAdmin versions.
 *
 * HTTP method: GET
 * Endpoint: /license/directadmin/orderableVersions
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ip = this.getNodeParameter('ip', itemIndex, '') as string;

	const qs: IDataObject = {
    ip: ip
  };
	const data = (await client.httpGet('/license/directadmin/orderableVersions', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

