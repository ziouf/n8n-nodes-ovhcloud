import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'IamTags',
			name: 'iamTags',
			type: 'string',
			default: '',
			description: 'The iamtags parameter',
			displayOptions,
		},
	];
}

/**
 * List available services
 *
 * HTTP method: GET
 * Endpoint: /msServices/sharepoint
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {

	const iamTags = this.getNodeParameter('iamTags', itemIndex) as string;


const qs: IDataObject = {
    iamTags: iamTags
  };



	const client = new ApiClient(this);
	const data = (await client.httpGet('/msServices' + '/' + 'sharepoint', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

