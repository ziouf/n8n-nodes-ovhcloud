import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Fqn',
			name: 'fqn',
			type: 'string',
			default: '',
			description: 'Fully qualified name and unique name of the hardware',
			displayOptions,
		},
	];
}

/**
 * Fetch the available Nutanix versions to install.
 *
 * HTTP method: GET
 * Endpoint: /nutanix/availableVersions
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const fqn = (this.getNodeParameter('fqn', _itemIndex ?? 0, '') as string) || '';

	const qs: IDataObject = {};
	if (fqn) qs.fqn = fqn;
	const data = (await client.httpGet('/nutanix/availableVersions', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
