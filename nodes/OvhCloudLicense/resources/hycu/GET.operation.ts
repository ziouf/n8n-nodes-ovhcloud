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
			displayName: 'IamTags',
			name: 'iamTags',
			type: 'string',
			default: '',
			description: 'Filter resources on IAM tags',
			displayOptions,
		},
	];
}


/**
 * Get list of owned HYCU licenses.
 *
 * HTTP method: GET
 * Endpoint: /license/hycu
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const iamTags = this.getNodeParameter('iamTags', _itemIndex, '') as string;

	const qs: IDataObject = {
    iamTags: iamTags
  };
	const data = (await client.httpGet('/license/hycu', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

